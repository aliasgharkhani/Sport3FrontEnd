import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import './App.css';

import globalTranslations from "./translations/global";
import ReactDOMServer from "react-dom/server";
import {LocalizeProvider, withLocalize} from 'react-localize-redux';
import {createBrowserHistory} from "history";
import {renderToStaticMarkup} from "react-dom/server";


import Page1 from './view/main';
import Page2 from './view/login';
import Page3 from './view/news';
import Page4 from './view/teams';
import Page5 from './view/match';
import Page6 from './view/signup';
import Page7 from './view/player';
import Page8 from './view/leagues';
import Page9 from './components/auth/pass_forgotten';
import Page10 from './components/auth/confirm';
import Page11 from './components/auth/signup_confirm';
import Page12 from './components/auth/password_change';


const history = createBrowserHistory();

class App extends Component {
    state={
        c:false,
    }
    render() {
        if(!localStorage.getItem('lan'))
            localStorage.setItem('lan','fa');
        if(!localStorage.getItem('dir'))
            localStorage.setItem('dir','rtl');
        if(!localStorage.getItem('align'))
            localStorage.setItem('align','right');
        if(!localStorage.getItem('I_align'))
            localStorage.setItem('I_align','left');
        return (
            <LocalizeProvider initialize={{
                languages: [
                    { name: "English", code: "en" },
                    { name: "Persian", code: "fa" }
                ],
                translation: globalTranslations,
                options: {
                    defaultLanguage: localStorage.getItem('lan'),
                    renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup
                }
            }}>
                <Router history={history}>
                    <Switch>
                        <Route {...this.props} exact path='/sport3/home' component={Page1} />
                        <Route exact path='/sport3/login' component={Page2} />
                        <Route exact path='/sport3/pass_forgotten' component={Page9} />
                        <Route exact path='/sport3/news/:title/:id' component={Page3} />
                        <Route exact path='/sport3/team/:name/:id' component={Page4} />
                        <Route exact path='/sport3/match/:name/:id' component={Page5} />
                        <Route exact path='/sport3/signup' component={Page6} />
                        <Route exact path='/sport3/player/:name/:id' component={Page7} />
                        <Route exact path='/sport3/league/:league_name/:season_name/:id' component={Page8} />
                        <Route exact path='/sport3/confirm/:username/:confirm_id' component={Page10} />
                        <Route exact path='/sport3/signup_confirm' component={Page11} />
                        <Route exact path='/sport3/pass_change/:user_id' component={Page12} />
                    </Switch>
                </Router>
            </LocalizeProvider>
        );
    }
}
export default withLocalize(App);