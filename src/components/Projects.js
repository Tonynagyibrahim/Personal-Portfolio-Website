import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "./assets/logos/bussines.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
      link: "https://services.fue.edu.eg/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
      link: "https://services.fue.edu.eg/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
      link: "https://services.fue.edu.eg/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h2>Projects</h2>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <Tab.Container defaultActiveKey="first">

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center">

                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>

                  </Nav>

                  <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <p>Tab Two Content</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>Tab Three Content</p>
                    </Tab.Pane>

                  </Tab.Content>

                </Tab.Container>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};