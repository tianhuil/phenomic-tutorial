import React from "react"

export const Layout = ({children}) => (
  <div>
    <div class="container">
      <header>
        <p>Header</p>
      </header>
      <div>{ children }</div>
      <footer>
        <p>Footer</p>
      </footer>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    </div>
  </div>
)