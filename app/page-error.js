import React from "react"
import { Layout } from './layout'

export const PageError = ({ error }) => {
  const status = error && error.status || 404
  const message = error && status !== 404 ? error.statusText : "Page not found"

  return (
    <Layout>
      <h1>Error: {status}</h1>
      <p>{message}</p>
    </Layout>
  )
}