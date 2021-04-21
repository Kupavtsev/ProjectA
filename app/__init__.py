from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS #comment this on deployment

import os



APP_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_FOLDER = os.path.join(APP_DIR, '../static/build/static') # Where your webpack build output folder is
TEMPLATE_FOLDER = os.path.join(APP_DIR, '../static/build') # Where your index.html file is located

app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
# CORS(app) #comment this on deployment
app.config.from_object('app.config.BaseConfig')

db = SQLAlchemy(app)
# bcrypt = Bcrypt(app)