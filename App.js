import React from "react"
import { Router, Route, browserHistory, Link } from "react-router"
import { createApp, createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

const Home =  ({ posts }) => (
  <div>
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
  </div>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({collection: "posts", sortBy: "date"}),
}))

const BlogPost = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </div>
)

const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/blog/*" component={ BlogPostContainer } collection="posts" />
  </Router>
))
