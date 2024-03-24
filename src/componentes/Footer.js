import {Container, Row, Col} from "react-bootstrap";
import logo from "../materiales/img/logo.png";
import navIcon1 from '../materiales/img/nav-icon1.png';
import navIcon2 from '../materiales/img/nav-icon2.png';
import navIcon3 from '../materiales/img/nav-icon3.png';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="Icon" /></a>
                    <a href="#"><img src={navIcon2} alt="Icon" /></a>
                    <a href="#"><img src={navIcon3} alt="Icon" /></a>
                    </div>
                    <p>Fernando 2024. Todos los derechos reservados</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}