import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import baby from "../assets/img/projectOneBabyOneCribjpeg.jpeg"
import marketBuilding from "../assets/img/projectMarketBuild1.png"
import schoolDesk from "../assets/img/projectSchoolDesk.png"
import marketBuilding2 from "../assets/img/projectMarketBuild2.png"
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
                                <img src={baby} alt="Image" width={100}/>
                                <h5>One Baby One Crib</h5>
                            </div>
                            <div className="item">
                                <img src={marketBuilding} alt="Image" />
                                <h5>Creating a new Market Building</h5>
                            </div>
                            <div className="item">
                                <img src={marketBuilding2} alt="Image" />
                                <h5>Improving the new Market Building</h5>
                            </div>
                            <div className="item">
                                <img src={schoolDesk} alt="Image" />
                                <h5>School Desk Building</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}