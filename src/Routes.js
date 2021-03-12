import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Homepage from "./views/Homepage"
import About from "./views/About"
import Skills from "./views/Skills"
import Resume from "./views/Resume"
import Portfolio from "./views/Portfolio"

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
