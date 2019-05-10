import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

export default () =>
    <BrowserRouter>
        <Route path="/" component={() => <div>Foo</div>}/>
        <div>Hello World</div>
        <div>Hi</div>
    </BrowserRouter>
