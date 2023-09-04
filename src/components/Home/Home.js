import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactModal from "./ContactModel";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rohail John</strong>
              </h1>

              <div
                style={{ paddingLeft: 50, paddingTop: 20, textAlign: "left" }}
              >
                <Type />
              </div>
              <p
                style={{
                  marginLeft: 50,
                  marginTop: 30,
                  cursor: "pointer",
                  fontSize: 18,
                }}
              >
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations .
              </p>
              <Row style={{ marginLeft: 50, marginTop: 20, cursor: "pointer" }}>
                {/* <ContactModal /> */}
                <Button variant="primary" style={{ maxWidth: "210px" }}>
                  Contact Me
                </Button>
                {/* <a
                className="border border-danger"
                target=""
                href="tel:+923084483279"
              >
                click me
              </a> */}
              </Row>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "650px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
