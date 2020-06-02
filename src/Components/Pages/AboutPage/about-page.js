import React from 'react';

import './about-page.css';

const AboutPage = () => {
    return (
        <div className="footerPages-content">
            <div className="footerPages-section">
                <div className="headline-content">
                    <h1 className="headline-content-title">О проекте</h1>
                </div>
                <div className="article-body">
                    <div className="text">
                        <h3>Основное</h3>
                        <p><a href="/">HR-Portal</a> - это веб-приложение для тех, кто ищет работу и для тех, кто эту работу предлагает. Но прежде всего, главная цель создания этого проекта - помощь соискателям посмотреть правдивые отзывы о первом человеке, которого они увидят перед собой в компании при собеседовании - HR-а / Рекрутера. HR-портал - это уникальный способ быть в курсе всего о компании, рекрутерах, атмосфере, которая ждет соискателя и заранее быть готовым к любмому развитию событий.</p>

                        <h3>Участники</h3>
                        <p>Основатели проекта: <strong>Павел Пшенишюк</strong> и <strong>Михаил Катеринич</strong></p>

                        <h3>Контакты</h3>
                        <p>По вопросам рекламы и сотрудничества пишите на почту: <a href="mailto:example@gmail.com">example@gmail.com</a> </p>
                        <p>По общим вопросам <a href="mailto:pashapshenishnyuk@gmail.com">pashapshenishnyuk@gmail.com</a> или <a href="mailto:mihanya2011@ukr.net">mihanya2011@ukr.net</a></p>

                        <h3>Помочь проекту</h3>
                        <p> Репозиторий на GitHub: <a href="https://github.com/Pshenya/HR-Portal-Frontend">ВОТ!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AboutPage;