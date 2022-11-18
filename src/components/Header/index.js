import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import routesMain from "../../config";
import css from './header.module.css';


const Header = () =>  {

    return (
        <div className={css.mainHeader}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand style={{color:"black"}} href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        {routesMain.slice(1).map((item) => {
                            return <Link className={css.links} to={item.path}>{item.title}</Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header;