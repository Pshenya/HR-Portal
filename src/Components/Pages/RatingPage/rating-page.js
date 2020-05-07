import React, { Component } from 'react';

import './rating-page.css';

class RatingPage extends Component {
    render() {
        return (
            <div className="rating-container">
                <div className="rating-content">
                    <h1 className="rating-title">ТОП-50 HR-ов Украины</h1>
                    <table className="rating-table" id="ratingTableId">
                        <thead>
                        <tr>
                            <rh></rh>
                            <th>№</th>
                            <th>Имя и фамилия</th>
                            <th></th>
                            <th>Компания</th>
                            <th>Δ
                                <div className="period">Jul&#39;19 / Jan&#39;20</div>
                            </th>
                            <th></th>
                            <th>Средняя оценка<br/>пользователей</th>
                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                1
                            </td>
                            <td className="person-name">
                                <a href="#">Person name</a>
                                <div className="job">
                                    Team Lead
                                </div>
                            </td>
                            <td></td>
                            <td>SoftServe</td>
                            <td>
                                <p style={{color: "green"}}>+800</p>
                            </td>
                            <td></td>
                            <td>9.8</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                1
                            </td>
                            <td className="person-name">
                                <a href="#">Person name</a>
                                <div className="job">
                                    Team Lead
                                </div>
                            </td>
                            <td></td>
                            <td>SoftServe</td>
                            <td>
                                <p style={{color: "green"}}>+800</p>
                            </td>
                            <td></td>
                            <td>9.8</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                1
                            </td>
                            <td className="person-name">
                                <a href="#">Person name</a>
                                <div className="job">
                                    Team Lead
                                </div>
                            </td>
                            <td></td>
                            <td>SoftServe</td>
                            <td>
                                <p style={{color: "green"}}>+800</p>
                            </td>
                            <td></td>
                            <td>9.8</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RatingPage;