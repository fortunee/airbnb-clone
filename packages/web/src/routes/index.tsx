import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
);
