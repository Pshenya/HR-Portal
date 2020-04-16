import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./Components/Header/header";
import News from "./Components/Main/News/news";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <News/>
        </React.Fragment>
    );
}

export default App;
