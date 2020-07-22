from flask import Flask, session, request, url_for, send_from_directory, render_template
from flask_cors import CORS
from .places import get_places_by_weather, get_place_by_id, get_params_range
import json
import random
import uuid
import os
import werkzeug


def create_app(test_config=None, *args, **kwargs):
    # создаем и настраиваем приложение
    app = Flask(__name__, instance_relative_config=True,
                static_folder=f"./build", static_url_path="/")
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY=os.getenv('PERFECTWEATHER_FLASK_SECRET_KEY')
    )

    if test_config is None:
        # если не тестим - загружаем боевой конфиг
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    # удостоверяемся, что папка для приложения создана
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    CORS(app)

    # main view
    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    # get a list of Place objects based on parameters

    @app.route("/api/places", methods=['POST'])
    def get_places():
        # TODO: передавать параметры как dict и не трогая тут сразу принимать в функцию
        print(request)
        try:
            params = request.get_json()
            print(f'params are: {params}')
        except Exception as e:
            print(f'failed getting params: {e}')
        #print(f'params are: {params}')
        try:
            response = get_places_by_weather(params)
        except ValueError:
            response = 'Error getting places'
        print(response)
        return json.dumps(response)

    # get info on specific place
    @app.route("/api/places/<place_id>", methods=['GET'])
    def get_place_info(place_id):
        try:
            response = get_place_by_id(place_id)
        except ValueError:
            response = 'Error getting places'
        return json.dumps(response)

    # get min & max values for parameters
    @app.route("/api/params", methods=['GET'])
    def get_params():
        try:
            month = request.args['month']
            response = get_params_range(month)
        except ValueError:
            response = 'Error getting places'
        return json.dumps(response)

    ### ERROR HANDLERS ###

    def serve_js(filename):
        return send_from_directory("/static/js", filename)

    @app.route(f"/static/data/otgovorki.xlsx")
    def return_poop():
        return "<h1>💩</h1>"

    # simple error handlers

    @app.errorhandler(werkzeug.exceptions.BadRequest)
    def handle_bad_request(e):
        return "<h1>400</h1><p>The request seems bad. If you are trying to mess around with the API, don't. Use the main site instead.</p>", 400

    @app.errorhandler(werkzeug.exceptions.NotFound)
    def handle_not_found(e):
        return "<h1>404</h1><p>This API is not supposed to be used outside of the main site yet. Try the main site?</p>", 404

    @app.errorhandler(werkzeug.exceptions.InternalServerError)
    def handle_internal_error(e):
        return "<h1>500</h1><p>I am sorry, David. I could not find places for you. Try again?</p>", 500

    return app
