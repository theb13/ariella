import React from "react"
import { Switch, Route } from "react-router-dom"
import AboutUs from "../Pages/AboutUs"
import AriellaStudio from "../Pages/AriellaStudio"
import Blog from "../Pages/Blog"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import SingleBlogView from "../Pages/SingleViewBlog"
import SingleViewMedia from "../Pages/SingleViewMedia"
import SingleViewYoutube from "../Pages/SingleViewYoutube"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/ariellaStudio" component={AriellaStudio} />
            <Route path="/blog/:id" component={SingleBlogView} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/youtube/:id" component={SingleViewYoutube} />
            <Route path="/:id" component={SingleViewMedia} />
        </Switch>
    )
}

export default Routes
