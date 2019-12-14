import * as React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

import Home from '../pages/home';

const RouterList : any[] = [
    {
        path:'/',
        component:Home
    }

];

const RouterIndex = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {
                        RouterList.map((item,index) => (
                            <Route 
                                key={index}
                                exact = {true}
                                path={item.path}
                                component = {item.component}
                            />
                        ))
                    }
                </Switch>
            </div>
        </Router>
    )
}

export default RouterIndex;