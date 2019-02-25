import React from 'react'
import GreetingContainer from '../containers/greeting_container';
import LoginFormContainer from '../containers/login_form_container';
import SignupFormContainer from '../containers/signup_form_container';
import {AuthRoute} from '../util/route_util';

export const App = () => (
    <div>
        <header>
            <h1>BenchBnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </div>
)

export default App;