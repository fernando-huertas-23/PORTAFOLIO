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
                    <p>Estudiante de 4º semestre de la carrera de
                        Desarrollo de Software, con conocimientos
                        básicos en desarrollo de software,
                        diseñador de sitios web, entre otros.
                        Interesado en laborar en una empresa para
                        expandir mis conocimientos en el área Front
                        End/Back End Developer.
                        </p>
                    <button onClick={()=> console.log('connect')}>TELF : 971512094<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Headder Img"/>
                </Col>
                </Row>
            </Container>
        </section>
    )
}