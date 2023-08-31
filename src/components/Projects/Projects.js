import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expenseTracker from "../../Assets/Projects/expense-tracker.png";
import sondar from "../../Assets/Projects/film-festival.png";
import gosto from "../../Assets/Projects/gosto.png";
import realState from "../../Assets/Projects/real-state.png";
import reilu from "../../Assets/Projects/reilu-finland.png";
import bonik from "../../Assets/Projects/bonik.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realState}
              isBlog={false}
              title="Real State"
              description="The Luxurious Urban Residences Development project not only redefined the city's real estate landscape but also set a new standard for upscale urban living. Its successful execution resulted in increased property values in the surrounding area and garnered praise for its design, sustainability features, and meticulous attention to detail. This project's achievements demonstrated my ability to manage complex real estate initiatives ."
              demoLink="https://realestate-4713d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonik}
              isBlog={false}
              title="Bonik E-commerce"
              description="As part of a dynamic team, I contributed to the successful development of an E-Commerce Garments App, showcasing my expertise in software engineering and e-commerce solutions. The project aimed to provide users with a seamless and user-friendly platform to browse, select, and purchase garments online. This experience showcases my proficiency in frontend development, backend integration, UI/UX design ."
              demoLink="https://bonik-ecommerce.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gosto}
              isBlog={false}
              title="Gosto E-commerce"
              description="This e-commerce project allowed me to showcase my ability to transform business requirements into a functional and user-friendly digital platform. It highlighted my skills in project management, technical leadership, and problem-solving, resulting in a successful product that significantly contributed to the organization's online growth and customer satisfaction , UI/UX design, and a commitment to delivering exceptional."
              demoLink="https://gosto-ecommerce.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense - Tracker"
              description="The Expense Tracker application provided users with an efficient tool to manage their finances, promoting better financial awareness and control. Users could track their expenses, identify trends, and make informed decisions to improve their saving habits. The project received positive feedback from users for its user-friendly design and insightful data analysis features."
              demoLink="https://expense-tracker-rohail.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reilu}
              isBlog={false}
              title="REILU"
              description="As part of this project, I undertook the enhancement and management of a local restaurant, implementing strategies to improve customer experience, operational efficiency, and overall profitability. Through effective collaboration with cross-functional teams and the application of business acumen, I successfully revitalized the restaurant's operations and garnered positive outcomes."
              demoLink="https://reilukuljetus.fi/ " // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sondar}
              isBlog={false}
              title="Film-Festival Sondar"
              description="Designed and implemented a comprehensive movie analysis and recommendations system as a personal project to showcase proficiency in data analysis, machine learning, and software development. The project aimed to create a user-friendly platform that offers personalized movie suggestions based on user preferences, enhancing the overall movie-watching experience."
              demoLink="https://film-festival-sonder-demo.web.app/" // <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
