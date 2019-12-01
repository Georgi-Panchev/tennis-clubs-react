import React, { Fragment } from 'react';
import './App.css';

import Header from './components/common/Header/Header';
import Routes from './components/common/Routes/Routes';

function App() {
    return (
        <Fragment>
            <Header />
            <Routes />
        </Fragment>
    );
}

export default App;
