import { Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../materiales/img/meter1.png';
import meter2 from '../materiales/img/meter4.png';
import meter3 from '../materiales/img/meter5.png';
import colorSharp from '../materiales/img/color-sharp.png';

export const Skills  = () =>{
    const responsive = {
      superLargeDesktop: {
        //el nombre puede ser cualquiera, depende de ti
        breakpoint:{ max:4000, min:3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max:3000, min:1024},
        items: 3
      },
      tablet: {
        breakpoint:{max: 1024, min: 464},
        items: 2
      },
      mobile: {
        breakpoint:{ max:464, min: 0},
        items: 1
      }
    };

    return(
        <section className="skill" id="skills">
            <Container>
              <Row>
                 <Col>
                 <div className="skill-bx">
                    <h2>
                      Skills
                    </h2>
                    <p>Estas son las habilidades que adquiri durante mis estudios en SENATI y mediante las prácticas empresariales</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>HTML - CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>Javascript</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>Wordpress</h5>
                        </div>
            
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>SQL</h5>
                        </div>
                    </Carousel>
                 </div>
                 </Col>
              </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}