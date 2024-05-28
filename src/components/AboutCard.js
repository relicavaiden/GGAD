import { Col } from "react-bootstrap";

export const AboutCard = ({ title, description, imgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="about-imgbx">
                <img src={imgUrl} />
                <div className="about-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}