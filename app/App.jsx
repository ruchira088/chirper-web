import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Broadcast from "./broadcast/BroadcastIndex"
import View from "./view/ViewIndex"

export default () =>
    <BrowserRouter>
        <Route exact path="/" component={() => <div>Foo</div>}/>
        <Route path="/broadcast" component={Broadcast}/>
        <Route path="/view" component={View}/>
        <div>Hello World</div>
        <div>Hi</div>
    </BrowserRouter>
