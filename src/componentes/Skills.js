import { Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meterc from '../materiales/img/c.png';
import meter0 from '../materiales/img/nodejs.png';
import meter1 from '../materiales/img/HTML-CSS.png';
import meter2 from '../materiales/img/js.webp';
import meter3 from '../materiales/img/imgreact.png';
import meter4 from '../materiales/img/wordpress.png';
import meter5 from '../materiales/img/java.webp';
import meter6 from '../materiales/img/python.png';
import meter7 from '../materiales/img/sql.png';
import meter8 from '../materiales/img/angular.png';
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
                            <img src={meter0} alt=""/>
                            <h5>Node.JS</h5>
                        </div>
                       
                        <div className="item">
                            <img src={meter2} alt="" />
                            <h5>Javascript</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="" />
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={meter8} alt="" />
                            <h5>Angular</h5>
                        </div>
                        <div className="item">
                            <img src={meterc} alt=""/>
                            <h5>C#</h5>
                        </div>  
                        <div className="item">
                            <img src={meter4} alt="" />
                            <h5>Wordpress</h5>
                        </div>                           
                        <div className="item">
                            <img src={meter5} alt="" />
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={meter6} alt="" />
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt=""/>
                            <h5>HTML - CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter7} alt="" />
                            <h5>SQL</h5>
                        </div>
                    </Carousel>
                 </div>
                 </Col>
              </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}