import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '@abb/controller';

import { RegisterConnector } from '../modules/register/RegisterConnector';
import { LoginConnector } from '../modules/login/LoginConnector';
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector';
import { ChangePasswordConnector } from '../modules/changePassword/ChangePasswordConnector';
import { GenericMesssageComponent } from '../modules/GenericMessage';
import { CreateListingConnector } from '../modules/listing/create/CreateListingConnector';
import { FindListingsConnector } from '../modules/listing/find/FindListingsConnector';
import { LogoutConnector } from '../modules/logout';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/register' component={RegisterConnector} />
            <Route exact={true} path='/login' component={LoginConnector} />
            <Route exact={true} path='/logout' component={LogoutConnector} />
            <Route exact={true} path='/forgot-password' component={ForgotPasswordConnector} />
            <Route exact={true} path='/change-password/:key' component={ChangePasswordConnector} />
            <Route path='/m' component={GenericMesssageComponent} />
            <Route path='/listing' component={FindListingsConnector} />
            <AuthRoute path='/create-listing' component={CreateListingConnector} />
        </Switch>
    </BrowserRouter>
);
