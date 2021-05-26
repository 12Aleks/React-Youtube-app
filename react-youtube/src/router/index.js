import React from 'react'
import {Nav} from 'react-bootstrap'
import Homes from "./homes";
import About from './about'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import NotFound from "./notFound";


export function Index() {
    const PEEPS = [
        { id: 0, name: "Michelle", friends: [1, 2, 3] },
        { id: 1, name: "Sean", friends: [0, 3] },
        { id: 2, name: "Kim", friends: [0, 1, 3] },
        { id: 3, name: "David", friends: [1, 2] }
    ];

    const [auth, setAuth] = React.useState(false)


    const authUp = () => {
        setAuth(true)
    }

    return (
        <Router>
            <Nav>

            </Nav>
            <Switch>
                <Route path={'/'} exact component={<Homes/>}>
                    <Homes auth={auth} updateAuth={authUp}/>
                </Route>
                <Route path={'/about/:id'} component={About}>
                    <About auth={auth} />
                </Route>
                <Route path={'*'} >
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}
