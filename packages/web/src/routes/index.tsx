import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '@abb/controller';

import { RegisterConnector } from '../modules/register/RegisterConnector';
import { LoginConnector } from '../modules/login/LoginConnector';
import { ForgotPasswordConnector } from '../modules/ForgotPassword/ForgotPasswordConnector';
import { ChangePasswordConnector } from '../modules/changePassword/ChangePasswordConnector';
import { GenericMesssageComponent } from '../modules/GenericMessage';
import { CreateListingConnector } from '../modules/listing/create/CreateListingConnector';
import { FindListingsConnector } from '../modules/listing/find/FindListingsConnector';
import { LogoutConnector } from '../modules/logout';
import { TestSub } from '../modules/TestSub';
import { ViewListingConnector } from '../modules/listing/view/ViewListingConnector'
import { MessageConnector } from '../modules/listing/messages/MessageConnector'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/register' component={RegisterConnector} />
            <Route exact={true} path='/login' component={LoginConnector} />
            <Route exact={true} path='/logout' component={LogoutConnector} />
            <Route exact={true} path='/forgot-password' component={ForgotPasswordConnector} />
            <Route exact={true} path='/change-password/:key' component={ChangePasswordConnector} />
            <Route path='/m' component={GenericMesssageComponent} />
            <Route path='/listings' component={FindListingsConnector} />
            <Route exact={true} path='/listing/:listingId' component={ViewListingConnector} />
            <Route path='/listing/:listingId/chat' component={MessageConnector} />
            <Route path='/test-sub' component={TestSub} />
            <AuthRoute path='/create-listing' component={CreateListingConnector} />
        </Switch>
    </BrowserRouter>
);
