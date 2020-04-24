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
                        <p><a href="/">HR-Portal</a> - Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.</p>

                        <h3>Участники</h3>
                        <p>Основатели проекта: <strong>Павел Пшенишюк</strong> и <strong>Михаил Катеринич</strong></p>

                        <h3>Контакты</h3>
                        <p>По вопросам рекламы и сотрудничества пишите на почту: <a href="mailto:example@gmail.com">example@gmail.com</a> </p>
                        <p>По общим вопросам <a href="mailto:pashapshenishnyuk@gmail.com">pashapshenishnyuk@gmail.com</a> или <a href="mailto:хуйзнает@почтаМиши.ком.com">хуйзнает@почтаМиши.ком</a></p>

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