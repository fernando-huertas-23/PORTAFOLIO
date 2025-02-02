import { Col } from 'react-bootstrap';

export const ProjectCard =({title, description, imgUrl, linkUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={{zIndex: 1, position: 'relative'}}>
                    <img src={imgUrl} alt=''/>
                </a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
