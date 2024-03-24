import {useState, useEffect} from 'react';
import { Container,Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../materiales/img/saludo.png';

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick =() =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,  text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenido a mi portafolio</span>
                    <h1>{`hola soy un desarrollador `}<span className="wrap">{text}</span></h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                    <button onClick={()=> console.log('connect')}>Contactame<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Headder Img"/>
                </Col>
                </Row>
            </Container>
        </section>
    )
}