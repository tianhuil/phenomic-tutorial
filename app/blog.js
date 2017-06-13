import React from "react"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import { Layout } from './layout'

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

export const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))
