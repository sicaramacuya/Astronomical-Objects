"""Import packages and modules."""
from flask import Blueprint, request, render_template, redirect, url_for, flash
from flask_login import login_user, logout_user, login_required, current_user
from datetime import date, datetime
from terrela_app.models import User, Missions, Rockets, AstronomicalObjects
from terrela_app.main.forms import MissionForm, RocketsForm, AstronomicalObjectsForm
from terrela_app import bcrypt

# Import app and db from events_app package so that we can run app
from terrela_app import app, db

main = Blueprint("main", __name__)

##########################################
#           Routes                       #
##########################################

@main.route('/',  methods=['GET', 'POST'])
def homepage():
    all_missions = Missions.query.all()
    all_rockets = Rockets.query.all()
    all_objects = AstronomicalObjects.query.all()
    print(f'Missions: {all_missions}')
    print(f'Rockets: {all_rockets}')
    print(f'Objects: {all_objects}')

    return render_template('home.html')

@main.route('/create_mission', methods=['GET', 'POST'])
def create_mission():
    form = MissionForm()

    if form.validate_on_submit():     # Debes verificar rocket_id
        new_mission = Missions(
            title=form.title.data,
            date=form.date.data,
            description=form.description.data
        )
        db.session.add(new_mission)
        db.session.commit()

        flash('New mission was created successfully.')
        return redirect(url_for('main.mission_detail'))
    return render_template('create_mission.html', form=form)

@main.route('/mission_details', methods=['GET', 'POST'])
def mission_detail():

    return render_template('mission_detail.html')

@main.route('/create_object', methods=['GET', 'POST'])
def create_object():
    form = AstronomicalObjectsForm()

    if form.validate_on_submit():
        new_object = AstronomicalObjects(
            name=form.name.data,
            category=form.category.data,
            description=form.description.data
        )
        db.session.add(new_object)
        db.session.commit()

        flash('New object was created successfully.')
        return redirect(url_for('main.object_details', object_id=new_object.id))
    return render_template('create_object.html', form=form)

@main.route('/object_details/<object_id>', methods=['GET', 'POST'])
def object_details(object_id):
    astronomical_object = AstronomicalObjects.query.get(object_id)
    form = AstronomicalObjectsForm(obj=astronomical_object)

    if form.validate_on_submit():
        astronomical_object.name = form.name.data,
        astronomical_object.category = form.category.data,
        astronomical_object.description = form.description.data

        db.session.add(astronomical_object)
        db.session.commit()

        flash('Object was edited successfully')
        return redirect(url_for('main.object_detail', object_id=astronomical_object.id))

    return render_template('object_detail.html', object=astronomical_object, form=form)

@main.route('/create_rocket', methods=['GET', 'POST'])
def create_rocket():
    return render_template('create_rocket.html')

@main.route('/example', methods=['GET', 'POST'])
def base():
    return render_template('example.html')