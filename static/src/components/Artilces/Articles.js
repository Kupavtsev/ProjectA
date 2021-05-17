import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import * as axios from 'axios';


// My Components
import s from './Articles.module.css';
import Article from './Article';


import { YMInitializer } from 'react-yandex-metrika';

// For Google Analitycs
// import ReactGA from 'react-ga';
// import { createBrowserHistory } from 'history';


// Google Analitycs
// ReactGA.initialize('G-K6FY56S2SR');
// const history = createBrowserHistory();

// // Initialize google analytics page view tracking
// history.listen(location => {
//     ReactGA.set({ page: location.pathname }); // Update the user's current page
//     ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });


export default function Articles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getArticlesData = async () => {
            try {
                const response = await axios.get('http://www.kpglogistic.ru//api/article');
                setArticles(response.data);
                setLoading(true);
            } catch (e) {
                console.log(e)
            }
        };

        getArticlesData()
    }, [articles]);


    return (
        // <Router history={history}>
            <div>

                <nav className="breadcrumb is-small" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li className="is-active"><Link to="/articles" aria-current="page">Статьи</Link></li>
                    </ul>
                </nav>

                {loading
                    ? (
                        <Article articles={articles} />
                    )
                    : (
                        <div className={s.spinner}>
                            <button className="button is-rounded is-loading">Loading...</button>
                        </div>
                    )
                }

                <article className="message is-warning">
                    <div className="message-body">
                        <strong>Под грузовым контейнером</strong> для международных (а также внутренних) перевозок понимается единица транспортного оборудования многократного использования. Конструкция грузового контейнера обеспечивает сохранную перевозку грузов одним или несколькими видами транспорта, что достигается достаточной прочностью контейнера в течение установленного срока службы.
                Независимо от назначения все контейнеры стандартизированы по массе брутто, габаритам, присоединительным размерам, а также по конструкции присоединительных устройств к подвижному составу железнодорожного и автомобильного транспорта и к захватным органам погрузочно-разгрузочных машин. Это позволяет осуществлять с минимальными затратами времени и труда смешанные перевозки различными видами транспорта, реализуя принцип "от двери до двери".
                (cмотрите также виды <Link to='/containers'>контейнеров</Link> - <Link to='/semitrailers-cont'>контейнеровозов</Link>)
                </div>
                </article>

                {/* <div className="tags">
                <span className="tag">Автомобильный</span>
                <span className="tag">Транспорт</span>
                <span className="tag">Полуприцеп</span>
                <span className="tag">Еврофура</span>
                <span className="tag">Контейнер</span>

                <span className="tag">Контейнеровоз</span>
                <span className="tag">Автотранспорт</span>
                
            </div> */}
            
                {/* <YMInitializer accounts={[75168874]} /> */}
            </div>
        // </Router>
    )
}
