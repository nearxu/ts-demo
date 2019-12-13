import * as React from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';

import About from './about'
import Users from './users'
import Home from './home'

class AppRouter extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/users">Users</Link>
                        </li>
                    </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRouter;