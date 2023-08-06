import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import none from "../assets/img/none.jpg"
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {

  const projects = [
    {
      title: "MyTube",
      description: "Recoded Youtube with RapidAPI",
      imgUrl: projImg1,
    },
    {
      title: "OpenAI Retrained",
      description: "Used my own personal .txt files to train an OpenAI model with information about me",
      imgUrl: projImg2,
    },
    {
      title: "RVU Tracker",
      description: "Following the SDLC, I created a multi-platform fullstack mobile application to help cardiologists. Check the link out: 'RVU Tracker'",
      imgUrl: projImg3,
    },
    {
      title: "Soon to Come",
      description: "Design & Development",
      imgUrl: none,
    },
    {
      title: "Soon to Come",
      description: "Design & Development",
      imgUrl: none,
    },
    {
      title: "Soon to Come",
      description: "Design & Development",
      imgUrl: none,
    },
  ];



  const projects2 = [
    {
      title: "MyTube",
      description: "Recoded Youtube with RapidAPI",
      imgUrl: projImg1,
    },
    {
      title: "OpenAI Retrained",
      description: "Used my own personal .txt files to train an OpenAI model with information about me",
      imgUrl: projImg2,
    },
    {
      title: "RVU Tracker",
      description: "Following the SDLC, I created a multi-platform fullstack mobile application to help cardiologists. Check the link out: 'RVU Tracker'",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: ,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The projects listed here are individual projects that I have been working on myself to improve my coding skills and show them off at the same time!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects to come as I continue my developer journey!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects to come as I continue my developer journey!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
