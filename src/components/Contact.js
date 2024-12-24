import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactus.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3p1bvpq', 'template_6ef04xn', form.current, {
        publicKey: 'YfY6GLcqiWQiL-EIL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='first_name' placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='last_name'  placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name='phone_number'  placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name='message'  placeholder="Message"></textarea>
                      <button type="submit">Submit</button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
