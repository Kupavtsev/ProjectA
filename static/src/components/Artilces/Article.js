import React from 'react'
import First from './article/First';
import Second from './article/Second';

let Article = (props) => {


    let articleFirstElements = props.articles.article.first.map(a => <First
        articles={a.articles}
        key={a.id}
        id={a.id}
        title={a.title}
        content={a.content} />)
    
    let articleSecondElements = props.articles.article.second.map(a => <Second
        articles={a.articles}
        key={a.id}
        id={a.id}
        title={a.title}
        content={a.content} />)

    return (
        <div>
            <article className="is-warning">
                <div className="message-body">
                    {articleFirstElements}
                </div>
            </article>
            <article className="message is-link">
                <div className="message-body">
                    {articleSecondElements}
                </div>
            </article>
        </div>
    )
}

export default Article;