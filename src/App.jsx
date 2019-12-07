import React, { Fragment } from 'react';

import Header from './components/shared/Header/Header';
import Routes from './components/routing/Routes/Routes';
import Footer from './components/shared/Footer/Footer';

function App() {
    return (
        <Fragment>
            <Header />
            <Routes />
            <Footer />
        </Fragment>
    );
}

export default App;
