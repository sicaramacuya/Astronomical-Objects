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

# class Missions(db.Model):
#     """Missions model."""
#     pass

# class Rockets(db.Model):
#     """Rockets model."""
#     pass

# class AstronomicalObjects(db.Model):
#     """Astronomical Objects model."""
#     pass