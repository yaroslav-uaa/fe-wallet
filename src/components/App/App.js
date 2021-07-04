import React, { Component } from 'react';
import { Container } from '@material-ui/core';

//TODO: подключить routes, private, public, добавить компоненты lazy load

export default class App extends Component {

    // componentDidMount() {
        
    // }

    // componentDidUpdate() {
       
    // }

    render() {
        return (
            <Container
                maxWidth="xl"
                disableGutters={false}
                style={{
                    background: 'linear-gradient(90deg, #8609F9 0%, #311FA0 45%)',
                }} >
                {/* <Suspense fallback={<Spinner />}>
                    <Switch>
                        routes
                    </Switch>
                </Suspense> */}
            </Container>
        );
    }
}
