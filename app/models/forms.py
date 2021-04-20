# -*- coding: utf-8 -*-

from flask_wtf import FlaskForm
from wtforms import fields, validators
from wtforms_alchemy import ModelForm

from app.models.models import Article


class ArticleForm(ModelForm):
    class Meta:
        model = Article

