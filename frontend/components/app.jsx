import React from 'react'
import GreetingContainer from '../containers/greeting_container';
import LoginFormContainer from '../containers/login_form_container';
import SignupFormContainer from '../containers/signup_form_container';
import { Route } from 'react-router-dom'
import {AuthRoute} from '../util/route_util';
import SearchContainer from "../containers/search_container";
export const App = () => (
    <div>
        <header>
            <h1>BenchBnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path="/" component={SearchContainer} />
    </div>
)

export default App;