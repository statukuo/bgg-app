import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

function CustomNavBar() {
    if (!useContext(AppContext).userService.isLoggedIn) {
        return <Navbar bg="light">
            <Container>
                <Navbar.Brand to='/'>
                    BoardGameGasteiz
                </Navbar.Brand>
            </Container>
        </Navbar>
    }

    return <Navbar bg="light">
        <Container>
            <Navbar.Brand to='/bookings'>
                BoardGameGasteiz
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/bookings" className="nav-link">Bookings</Link>
                    <Link to="/user" className="nav-link">User</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavBar;
