import React from "react"
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Grid } from "react-bootstrap"

const NavbarInstance = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export const Layout = ({children}) => (
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/latest/react-bootstrap.min.js"></script>
    <div class="container">
      <NavbarInstance/>
      <Grid>
        <div>{ children }</div>
        <footer>
          <p>Footer</p>
        </footer>
      </Grid>
    </div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
  </div>
)