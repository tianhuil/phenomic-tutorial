import React from "react"

export const Layout = ({children}) => (
  <div>
    <header>
      <p>Header</p>
    </header>
    <div>{ children }</div>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
)