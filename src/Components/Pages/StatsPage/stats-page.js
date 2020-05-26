import React, { Component } from 'react';
import './stats-page.css';

class StatsPage extends Component {
    render() {
        return (
            <div>
                <iframe title="Salary widget" className="salary-widget" height="560" src="https://jobs.dou.ua/salary-widget/" width="750" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default StatsPage;