import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import speech from "../assets/img/speech.jpg"
import speech2 from "../assets/img/speech2.jpg"
import redcarpet6 from "../assets/img/redcarpet6.jpeg"
import redcarpet7 from "../assets/img/redcarpet7.jpeg"
// Ask if there is a need for a background

export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className="projects-bx">
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Current and upcoming projects
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="projects-slider">
                            <div className="item">
                                <img src={speech} alt="Image" />
                                <h5>Child an Women Advocacy</h5>
                            </div>
                            <div className="item">
                                <img src={speech2} alt="Image" />
                                <h5>Child an Women Advocacy</h5>
                            </div>
                            <div className="item">
                                <img src={redcarpet6} alt="Image" />
                                <h5>Child an Women Advocacy</h5>
                            </div>
                            <div className="item">
                                <img src={redcarpet7} alt="Image" />
                                <h5>Child an Women Advocacy</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}