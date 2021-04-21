# from datetime import datetime, timedelta
from sqlalchemy.exc import IntegrityError

from app import db



class Article(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    # date = db.Column(db.DateTime())
    article_id = db.Column(db.String(255), nullable = False)
    title = db.Column(db.String(255), nullable = False)
    content = db.Column(db.String(3000), nullable = False)

    def __init__(self, article_id, title, content) -> None:
        self.article_id = article_id
        self.title = title
        # self.date = datetime.utcnow().date()
        self.content = content

    def __str__(self):
        return '<Message {}, {}, {}>'.format(self.article_id, self.title, self.content)
    
    @staticmethod
    def add_article(article_id, title, content):
        article = Article(
            article_id=article_id,
            title=title,
            content=content
            )
        
        db.session.add(article)
        try:
            db.session.commit()
            return True, article.id
        except IntegrityError:
            return False, None

    @staticmethod
    def get_latest_article():
        article_to_list = {}

        result = db.engine.execute(
            """ SELECT t.id, t.article_id, t.title, t.content
                from article t """) 

        # print(next(result))


        for t in result:
            if t.article_id in article_to_list:
                article_to_list.get(t.article_id).append(dict(t))
            else:
                article_to_list[t.article_id] = [dict(t)]


        return article_to_list