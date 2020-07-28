from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import *
import os


Base = declarative_base()
metadata = Base.metadata
engine = create_engine(os.environ['DATABASE_URL_WEATHER'])
#engine = create_engine('postgresql://postgres:Dfcbktr1@localhost:5432/weather')
Session = sessionmaker(bind=engine)
session = Session()
conn = engine.connect()


class ClimateData(Base):
    __tablename__ = 'climate_normals'
    id = Column('id', Integer, primary_key=True)
    iwmo = Column('iwmo', String, ForeignKey('iwmos.iwmo_id'))
    month = Column('month', String)
    mean_temp = Column('mean_temp_mean_value', Float)
    mean_max_temp = Column('mean_max_temp_mean_value', Float)
    humidity = Column('humidity_mean_value', Float)
    precipitation_monthly = Column(
        'precipitation_data_mean_monthly_value', Float)
    sunshine_hours = Column('sunshine_mean_number_of_hours', Float)
    sunshine_percent = Column('percent_possible_sunshine', Float)

    # def __repr__(self):
    #     return {'id': self.id,
    #             'iwmo': self.iwmo,
    #             'month': self.month,
    #             'mean_temp': self.mean_temp,
    #             'mean_max_temp': self.mean_max_temp,
    #             'humidity': self.humidity,
    #             'precipitation_monthly': self.precipitation_monthly,
    #             'sunshine_percent': self.sunshine_percent}

    def to_dict(self):
        return {'id': self.id,
                'iwmo': self.iwmo,
                'month': self.month,
                'mean_temp': self.mean_temp,
                'mean_max_temp': self.mean_max_temp,
                'humidity': self.humidity,
                'precipitation_monthly': self.precipitation_monthly,
                'sunshine_hours': self.sunshine_hours,
                'sunshine_percent': self.sunshine_percent}


class Iwmo(Base):
    __tablename__ = 'iwmos'
    id = Column('id', Integer,  primary_key=True)
    iwmo_id = Column('iwmo_id', String)
    name = Column('name', String)
    country = Column('country', String)
    latitude = Column('latitude', Float)
    longitude = Column('longitude', Float)
    elevation = Column('elevation', Float)

    def to_dict(self):
        return {'id': self.id,
                'iwmo_id': self.iwmo_id,
                'name': f'{self.name.strip().title()}, {self.country.strip().title()}',
                'latitude': self.latitude,
                'longitude': self.longitude,
                'elevation': self.elevation}
