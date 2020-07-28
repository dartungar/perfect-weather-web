from . import db
from .db import conn, select, session,  ClimateData, Iwmo
from sqlalchemy import *
import random


def get_places_by_weather(params):
    print(params)
    result = session.query(ClimateData, Iwmo).filter(and_(
        ClimateData.iwmo == Iwmo.iwmo_id,
        ClimateData.month == params['month'],
        ClimateData.mean_temp.between(
            params['mean_temp'][0], params['mean_temp'][1]),
        ClimateData.mean_max_temp.between(
            params['mean_max_temp'][0], params['mean_max_temp'][1]),
        ClimateData.humidity.between(
            params['humidity'][0], params['humidity'][1]),
        ClimateData.precipitation_monthly.between(
            params['precipitation_monthly'][0], params['precipitation_monthly'][1]),
        # ClimateData.sunshine_percent.between(
        #     params['sunshine_percent'][0], params['sunshine_percent'][1]),
        ClimateData.sunshine_hours.between(params['sunshine_hours'][0], params['sunshine_hours'][1])))

    # result = conn.execute(sel)
    # TODO: нормально вытянуть из тапла объектов нужную инфу и трансформировать в чистенький объект
    places = [{**p[0].to_dict(), **p[1].to_dict()} for p in result.all()]
    return places


# get place by IWMO id
# TODO: реализовать дробление по месяцам
def get_place_by_id(place_id):
    places = session.query(ClimateData, Iwmo).filter(
        and_(ClimateData.iwmo == Iwmo.iwmo_id, Iwmo.iwmo_id == place_id))
    places_list = [{**p[0].to_dict(), **p[1].to_dict()} for p in places.all()]
    return places_list

# get range of parameters


def get_params_range(month):
    mean_temp_min = round(session.query(func.min(ClimateData.mean_temp)).filter(and_(ClimateData.month == month, ClimateData.mean_temp > -100.0))
                          .one()[0], 1)
    mean_temp_max = round(session.query(func.max(ClimateData.mean_temp)).filter(and_(ClimateData.month == month, ClimateData.mean_temp < 200.0))
                          .one()[0], 1)
    mean_max_temp_min = round(session.query(func.min(ClimateData.mean_max_temp)).filter(and_(ClimateData.month == month, ClimateData.mean_max_temp > -100.0))
                              .one()[0], 1)
    mean_max_temp_max = round(session.query(func.max(ClimateData.mean_max_temp)).filter(and_(ClimateData.month == month, ClimateData.mean_max_temp < 200.0))
                              .one()[0], 1)
    humidity_min = round(session.query(func.min(ClimateData.humidity)).filter(and_(ClimateData.month == month, ClimateData.humidity > -100.0))
                         .one()[0], 1)
    humidity_max = round(session.query(func.max(ClimateData.humidity)).filter(and_(ClimateData.month == month, ClimateData.humidity < 200.0))
                         .one()[0], 1)
    precipitation_monthly_min = round(session.query(func.min(ClimateData.precipitation_monthly)).filter(and_(ClimateData.month == month, ClimateData.precipitation_monthly > -100.0))
                                      .one()[0], 1)
    precipitation_monthly_max = round(session.query(func.max(ClimateData.precipitation_monthly)).filter(and_(ClimateData.month == month, ClimateData.precipitation_monthly < 9999.0))
                                      .one()[0], 1)
    sunshine_hours_min = round(session.query(func.min(ClimateData.sunshine_hours)).filter(and_(ClimateData.month == month, ClimateData.sunshine_hours > -100.0))
                               .one()[0], 1)
    sunshine_hours_max = round(session.query(func.max(ClimateData.sunshine_hours)).filter(and_(ClimateData.month == month, ClimateData.sunshine_hours < 800.0))
                               .one()[0], 1)
    # sunshine_percent_min = round(session.query(func.min(ClimateData.sunshine_percent)).filter(and_(ClimateData.month == month, ClimateData.sunshine_percent > -100.0))
    #                              .one()[0], 1)
    # sunshine_percent_max = round(session.query(func.max(ClimateData.sunshine_percent)).filter(and_(ClimateData.month == month, ClimateData.sunshine_percent < 200.0))
    #                              .one()[0], 1)

    return [{'name': 'mean_temp', 'title': 'Средняя температура', 'range': (mean_temp_min, mean_temp_max), 'coverage': get_param_coverage(month, 'mean_temp')},
            {'name': 'mean_max_temp', 'title': 'Средняя дневная температура', 'range': (
                mean_max_temp_min, mean_max_temp_max), 'coverage': get_param_coverage(month, 'mean_max_temp')},
            {'name': 'humidity', 'title': 'Среднемес. влажность',
                'range': (humidity_min, humidity_max), 'coverage': get_param_coverage(month, 'humidity')},
            {'name': 'precipitation_monthly', 'title': 'Осадки за месяц', 'range': (
                precipitation_monthly_min, precipitation_monthly_max), 'coverage': get_param_coverage(month, 'precipitation_monthly')},
            {'name': 'sunshine_hours', 'title': 'Часов солнечного света в месяц', 'range': (
                sunshine_hours_min, sunshine_hours_max), 'coverage': get_param_coverage(month, 'sunshine_hours')},
            #{'name': 'sunshine_percent', 'title': '% от возможного солнечного света', 'range': (sunshine_percent_min, sunshine_percent_max), 'coverage': get_param_coverage(month, 'sunshine_percent')}
            ]


# calculate how much of target param is filled
def get_param_coverage(month, param_name):
    print(param_name)
    values = session.query(ClimateData.iwmo).filter(
        and_(ClimateData.month == month, getattr(ClimateData, param_name) > -9999)).count()
    total = session.query(ClimateData.iwmo).filter(
        ClimateData.month == month).count()
    return round(values / total, 2)
