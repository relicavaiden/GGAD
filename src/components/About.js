import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { AboutCard } from "./AboutCard";
import  levi from "../assets/img/levi.jpeg";
import headshotF1 from "../assets/img/headshotF1.jpg";
import headshotF2 from "../assets/img/headshotF2.jpg";
import headshotF3 from "../assets/img/headshotF3.png";
import headshotF4 from "../assets/img/headshotF4.png";
import headshotM1 from "../assets/img/headshotM1.jpg";
import headshotM2 from "../assets/img/headshotM2.png";
import headshotM3 from "../assets/img/headshotM3.png";

export const About = () => {
    
    const about = [
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotF1, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotF2, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotF3, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotF4, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotM1, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotM2, //need img,
        },
        {
            title: "Placeholder",
            description: "Placeholder",
            imgUrl: headshotM3, //need img,
        }
    ];
    
    return(
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2>Meet the leaders of GGAD</h2>
                        {/* <p>Need text for section</p> */}
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