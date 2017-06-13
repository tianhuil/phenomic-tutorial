import React from "react"
import { Router, Route, browserHistory, Link } from "react-router"
import { createApp, createContainer, query, BodyRenderer, renderApp } from "@phenomic/preset-react-app/lib/client"
import { Layout }  from "./app/layout"
import { HomeContainer } from "./app/home"
import { BlogPostContainer } from "./app/blog"

const PageError = ({ error }) => {
  const status = error && error.status || 404
  const message = error && status !== 404 ? error.statusText : "Page not found"

  return (
    <Layout>
      <h1>Error: {status}</h1>
      <p>{message}</p>
    </Layout>
  )
}

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/after/:after" component={ HomeContainer } />
    <Route path="/blog/*" component={ BlogPostContainer } collection="posts" />
    <Route path="*" component={ PageError } />
  </Router>
)

export default createApp(routes)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
