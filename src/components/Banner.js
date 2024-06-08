import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/conv2.jpg";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Educational Developement", "Healthcare", "Sustainable Projects", "Rights Advocacy" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(1000);
    const period = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i =loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">GGAD</span>
                        <h1>{`Grand Gedeh Association in the Diaspora INC: `} <span className="wrap">{text}</span></h1>
                        <p>Founded in 2017 with the goal of providing humanitarian service to Grand Gedians in the diaspora, in Grand Gedeh County and Liberia</p>
                        {/* connect button removed possibly use later */}
                        {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}