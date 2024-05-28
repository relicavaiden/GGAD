import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import  levi from "../assets/img/levi.jpeg";
import  redcarpet5  from "../assets/img/redcarpet5.jpeg";
import  redcarpet6 from "../assets/img/redcarpet6.jpeg";
import  redcarpet7 from "../assets/img/redcarpet7.jpeg";

export const About = () => {
    
    const about = [
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: redcarpet5, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: redcarpet6, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: redcarpet7, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: levi, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: levi, //need img,
        },
    ];
    
    return(
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2>About</h2>
                        <p>Need text for section</p>
                        <Tab.Container id="about-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            about.map((about, index) => {
                                                return (
                                                    <AboutCard
                                                      key={index}
                                                      {...about}
                                                      />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Need Text</Tab.Pane>
                                <Tab.Pane eventKey="third">Need Text</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* Need to ask if an img is necessary */}
            <img className="background-image-right" src={""}></img>
        </section>

    )
}