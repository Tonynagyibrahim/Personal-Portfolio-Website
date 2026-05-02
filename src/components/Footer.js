import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "./assets/logos/hh.png";
import navIcon2 from "./assets/logos/pngtree-instagram-icon-logo-png-image_3560506.jpg";
import navIcon3 from "./assets/logos/download.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h2 className="footer-logo">LOGO</h2>
          </Col>

          <Col xs={12} md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="/"><img src={navIcon1} alt="WhatsApp" /></a>
              <a href="/"><img src={navIcon2} alt="Instagram" /></a>
              <a href="/"><img src={navIcon3} alt="Facebook" /></a>
            </div>

            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};