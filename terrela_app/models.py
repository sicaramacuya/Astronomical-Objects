"""Create database models to represent tables."""
from terrela_app import db
from sqlalchemy.orm import backref
from flask_login import UserMixin


class User(UserMixin, db.Model):
    """Users model."""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<User: {self.username}>'

class Missions(db.Model):
    """Missions model."""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False, unique=True)
    date = db.Column(db.Date)
    description = db.Column(db.String(500))
    rocket_id = db.Column(db.Integer, db.ForeignKey('rockets.id'))
    rocket = db.relationship('Rockets', back_populates='missions')

class Rockets(db.Model):
    """Rockets model."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String(500))
    missions = db.relationship('Missions', back_populates='rocket')

class AstronomicalObjects(db.Model):
    """Astronomical Objects model."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))