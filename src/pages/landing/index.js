import { Button, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './_style.css';
import { LinkContainer } from 'react-router-bootstrap'

function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="logo" />
        <p>
          Edit <code>src/Landing.js</code> and save to reload.
        </p>
        <a
          className="Landing-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Row className="mx-0">
          <LinkContainer to="/login">
            <Button>LOGIN</Button>
          </LinkContainer>
        </Row>
      </header>
    </div>
  );
}

export default Landing;
