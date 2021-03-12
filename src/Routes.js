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
                <Route exact path="/my-resume/" component={Homepage} />
                <Route exact path="/my-resume/about" component={About} />
                <Route exact path="/my-resume/skills" component={Skills} />
                <Route exact path="/my-resume/resume" component={Resume} />
                <Route exact path="/my-resume/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
