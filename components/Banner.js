import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./style.css";
import MyCV from "./assets/logos/CV.pdf";

function Banner() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "Tony_Nagy_CV.pdf";
    link.click();
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <span className="tagline">Welcome to my Portfolio</span>

            <h1>
              Hi! I'm Tony <br />
              <span className="wrap">Web Developer</span>
            </h1>

            <p>I build modern websites using React and Bootstrap with clean UI.</p>

            <button className="connect-btn" onClick={handleDownload}>
              Download CV <ArrowRightCircle size={22} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;