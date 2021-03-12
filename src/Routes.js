import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Homepage from "./views/Homepage"
import About from "./views/About"
import Skills from "./views/Skills"
import Resume from "./views/Resume"
import Portfolio from "./views/Portfolio"

const Routes = () => {
    return (
        <BrowserRouter basename="/my-resume">
            <Switch>
                <Route path="/" component={Homepage} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
