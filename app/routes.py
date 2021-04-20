from flask import Flask, redirect, url_for
from flask import request, render_template, jsonify, g

from app import app, db
from app.models.models import *
from app.models.forms import *





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
    
    
    # incoming = request.get_json()

    # success = Article.add_article(
    #     incoming.get("article"),
    #     incoming.get("article_id"),
    #     incoming.get("content")
    # )

    # if not success:
    #     return jsonify(message="Error submitting task", id=None), 409

    # return jsonify(success=True, id=id)