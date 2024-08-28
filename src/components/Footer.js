import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/first logos.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/whatsapp-white-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            Call me : +94 71 331 1853 <br />
            Email me : udanthawanasinghe@gmail.com
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/udantha-wanasingha-814063201" target="_blank" rel="noopener noreferrer"> <img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100010221191416&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"> <img src={navIcon2} alt="" /></a>
            <a href="https://wa.me/0713311538" target="_blank" rel="noopener noreferrer"> <img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
