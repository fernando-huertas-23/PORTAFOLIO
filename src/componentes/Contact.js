import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../materiales/img/contact-img.svg";

export const Contact = () => {
  const [buttonText] = useState('Enviar');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Add this state variable

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(refForm.current);
    const serviceId = "service_sryon4w";
    const templateId = "template_py4yqif";
    //3er parametro
    const apikey = "Ypqp-0L47va_0Fjzj"

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then((result) => {
      console.log(result.text);
      setSuccessMessage('Mensaje enviado correctamente!'); 
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false); 
      }, 3000);
    })
    .catch((error) => console.error(error));
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Ponte en contacto</h2>
            <form ref={refForm} action='' onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input name='from_name' type="text"   placeholder="Nombres" required /*onChange={(e) => onFormUpdate('firstName', e.target.value)}*/ />
                </Col>
                <Col sm={6} className="px-1">
                  <input name='Apellido' type="text"   placeholder="Apelidos" required /*onChange={(e) => onFormUpdate('lastName', e.target.value)}*/ />
                </Col>
                <Col sm={6} className="px-1">
                  <input name='email' type="email"  placeholder="correo electronico" required /*onChange={(e) => onFormUpdate('email', e.target.value)}*/ />
                </Col>
                <Col sm={6} className="px-1">
                  <input name='phone' type="tel"  /*value={formDetails.phone}*/ placeholder="Telefono(opcional)" /*onChange={(e) => onFormUpdate('phone', e.target.value)}*/ />
                </Col>
                <Col>
                  <textarea name='message' rows="6" /*value={formDetails.message}*/ placeholder="Mensaje" required /*onChange={(e) => onFormUpdate('message', e.target.value)}*/></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
            {showMessage && (
              <div className={`success-message ${showMessage ? 'show' : ''}`}>
                <p>{successMessage}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}