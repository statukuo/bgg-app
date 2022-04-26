import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context";

function CustomNavBar() {
    const userService = useContext(AppContext).userService;
    const navigate = useNavigate();

    const logOut =  () => {
        userService.logout();
        navigate("/");
    }

    if (!userService.isLoggedIn) {
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
            <Navbar.Brand to='/'>
                BoardGameGasteiz
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Bookings</Link>
                    <Link to="/user" className="nav-link">User</Link>
                </Nav>
                <Button onClick={logOut} variant="outline-success">Log Out</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default CustomNavBar;
