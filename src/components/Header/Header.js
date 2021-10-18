import React from 'react'
import {Navbar , Container , Nav, NavDropdown } from 'react-bootstrap'
const Header = () => {
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ras Jebel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https://fr.wikipedia.org/wiki/Ras_Jebel">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://www.google.com/maps/search/?api=1&query=March%C3%A9%20Municipal%2C%20Ras%20Jebel%2C%20Gouvernorat%20de%20Bizerte&query_place_id=
          ChIJPwRErjLo4hIRbBCbGe4jfjE">Localisation</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.google.com/search?rlz=1C1NDCM_frTN970TN970&sxsrf=AOaemvJuhIiWytZ7UkoyGoPNbstTQ37HTA:1634453637389&source=univ&tbm=isch&q=ras+jebel&fir=PByr65htLagjMM%252CL8CwBT-UtM4VnM%252C_%253B7g2syTLEgoDzgM%252CNYMpe3Ki5LmL4M%252C_%253BejYnjCMR2L2nFM%252CGe8zqaebID-s4M%252C_%253Bb3vR2zfEAhqKfM%252C_Ngqq-zK7JbXLM%252C_%253BFpR2sVbwRZ9ySM%252C2fVbXJRZL9Q4JM%252C_%253BYoNiN-UGX9G7YM%252CATmEfaNPWZt-kM%252C_%253BZQq-GVpsQjbCSM%252C_KWU9lioOyQK3M%252C_%253BgZ4th0m6ZXCB0M%252CXv1oH2M6adw9BM%252C_%253BGqtrQ1BaqbSJBM%252CAOgcPk52ppr1OM%252C_%253BI-KnV47IQFxLIM%252CsyJXvvC4d3ZiUM%252C_&usg=AI4_
          -kQFEY1yGt2VpmcwsP8Lpi1bNXpETQ&sa=X&ved=2ahUKEwiO8dSj7tDzAhUxDWMBHdeNDlsQjJkEegQIIBAC&biw=1366&bih=657&dpr=1">Pictures</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    )
}

export default Header
