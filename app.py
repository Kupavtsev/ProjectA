from flask import Flask, redirect, url_for
from flask import request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS #comment this on deployment

from config import BaseConfig

import os

# __init__.py
APP_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_FOLDER = os.path.join(APP_DIR, 'static/build/static') # Where your webpack build output folder is
TEMPLATE_FOLDER = os.path.join(APP_DIR, 'static/build') # Where your index.html file is located

app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
# CORS(app) #comment this on deployment
app.config.from_object(BaseConfig)

db = SQLAlchemy(app)
from models import *
from forms import *



@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('index.html')


@app.route("/api/article", methods=["GET"])
def get_article():
    return jsonify(article=Article.get_latest_article())


@app.route("/api/submit_article", methods=["POST"])
def submit_article():

    db.create_all()
    
    form = ArticleForm(request.form)

    if form.validate():
        article = Article(**form.data)

        db.session.add(article)
        db.session.commit()
        print('Article added')

    else:
        print(str(form.errors))

    return redirect(url_for('index'))