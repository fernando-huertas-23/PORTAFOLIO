import {Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../materiales/img/color-sharp2.png";
import projImg1 from "../materiales/img/proyecto-1.png";
import projImg2 from "../materiales/img/proyecto-2.png";
import projImg3 from "../materiales/img/proyecto-3.png";
import projImg4 from "../materiales/img/proyecto-4.png";
import projImg5 from "../materiales/img/proyecto-5.png";

export const Projects = () => {

  const projects = [
    {
      title: "Mi primer CRUD(JAVAWEB)",
      description: "Diseño y desarrollo",
      imgUrl: projImg1,
      linkUrl: "https://www.example.com/link1"
    },
    {
      title: "Mi primer juego con Phaser",
      description: "Diseño y dearrollo",
      imgUrl: projImg2,
      linkUrl: "https://www.example.com/link1"
    },
    {
      title: "Juego de memoria",
      description: "Diseño y desarrollo",
      imgUrl: projImg3,
      linkUrl: "https://fernando-lysoft.github.io/JUEGO-DE-MEMORIA/"
    },
    {
      title: "Mi primer BLOG",
      description: "Diseño y Desarrollo",
      imgUrl: projImg4,
      linkUrl: "https://fernando-lysoft.github.io/BLOG2.0/"
    },
    {
      title: "Sistema de ventas",
      description: "Diseño y desarrollo",
      imgUrl: projImg5,
    },
    /*{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },*/
  ];
  
  return(
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <h2>Projectos</h2>
          <p>Mis primeros proyectos</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="first">Web</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Juegos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Movil</Nav.Link>
          </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {
                    projects
                    .filter((project) => project.title === "Mi primer BLOG" || project.title === "Mi primer CRUD(JAVAWEB)" || project.title === "Sistema de ventas" )
                    .map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      );
                    })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row>
            {
              projects
                .filter((project) => project.title === "Mi primer juego con Phaser" || project.title === "Juego de memoria")
                .map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  );
                })
            }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}