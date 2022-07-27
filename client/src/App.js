import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Navbar from './components/Common/Navbar';
import HomePage from './pages/readPage';
import { ToastContainer } from 'react-toastify';
import CreatePage from './pages/createPage';
import UpdatePage from './pages/updatePage';

class App extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(props) => (
                                    <HomePage {...props} key={Date.now()} />
                                )}
                            />
                            <Route
                                exact
                                path="/create-product"
                                render={(props) => (
                                    <CreatePage {...props} key={Date.now()} />
                                )}
                            />
                            <Route
                                exact
                                path="/update-product/:id"
                                render={(props) => (
                                    <UpdatePage {...props} key={Date.now()} />
                                )}
                            />
                        </Switch>
                    </BrowserRouter>
                    <ToastContainer position="top-center" />
                </Container>
            </>
        );
    }
}

export default App;
