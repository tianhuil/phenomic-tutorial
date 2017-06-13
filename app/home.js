import React from "react"
import { Link } from "react-router"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client"
import { Layout } from './layout'
import { Helmet } from 'react-helmet'

const Home = ({ posts }) => (
  <Layout>
    <Helmet>
      <title>Hello world</title>
      <meta name="description" content="Everything is awesome!" />
    </Helmet>
    <h1>Home</h1>
    <ul>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={ `blog/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
    {
      posts.node && posts.node.hasNextPage &&
      <Link to={ `after/${ posts.node.next }`}>Older posts</Link>
    }
  </Layout>
)

export const HomeContainer = createContainer(Home, (props) => ({
  posts: query({
    collection: "posts",
    sortBy: "date",
    limit: 5,
    after: props.params.after,
  }),
}))
