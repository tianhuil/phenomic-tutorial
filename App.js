import React from "react"
import { Router, Route, browserHistory, Link } from "react-router"
import { createApp, createContainer, query, BodyRenderer, renderApp } from "@phenomic/preset-react-app/lib/client"

import { Layout }  from "./app/layout"

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

const Home =  ({ posts }) => (
  <Layout>
    <h1>Home</h1>
    <ul>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={ `/blog/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
    {
      posts.node && posts.node.hasNextPage &&
      <Link to={ `/after/${ posts.node.next }`}>Older posts</Link>
    }
  </Layout>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({
    collection: "posts",
    sortBy: "date",
    limit: 5,
    after: props.params.after,
  }),
}))

const BlogPost = ({ page }) => (
  <Layout>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </Layout>
)

const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

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
