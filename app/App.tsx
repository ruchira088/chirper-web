import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./views/home/HomeIndex"
import SignUp from "./views/sign-up/SignUpIndex"
import SignIn from "./views/sign-in/SignInIndex"

export default () =>
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/sign-in" component={SignIn}/>
    </BrowserRouter>
