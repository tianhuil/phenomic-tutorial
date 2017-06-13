import React from "react"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import { Layout } from './layout'
import { PageError } from "./page-error"

const BlogPost = ({ hasError, page }) => {
  if (hasError) {
    return <PageError error={page.error} />
  }

  return (
    <Layout>
      {page.node && (
        <article>
          <h1>{ page.node.title }</h1>
          <BodyRenderer>{ page.node.body }</BodyRenderer>
        </article>
      )}
    </Layout>
  )
}

export const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))
