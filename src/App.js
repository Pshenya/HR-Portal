import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from "./Components/Header/header";
import MainContent from "./Components/Main/News/main-content";
import Footer from "./Components/Footer/footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
