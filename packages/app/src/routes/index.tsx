import * as React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

export const Routes = () => (
    <NativeRouter>
        <Switch>
            <Route exact={true} path='/register' />
        </Switch>
    </NativeRouter>
);
