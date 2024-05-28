import React from 'react';
import { motion } from 'framer-motion';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import './App.css'; // Import custom CSS for additional styling

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  tap: { scale: 0.9 },
};

const App = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="background-overlay"></div> {/* Background overlay for dim lighting */}
      <Row className="w-100 justify-content-center mb-5">
        <Col xs={12} md={6} lg={4}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="d-flex justify-content-center"
          >
            <Card style={{ width: '100%' }} className="shadow bg-dark text-white">
              <Card.Img variant="top" src="./one.jpeg" />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Shreya Gupta</Card.Title>
                <Card.Text>
                  Since "2000-pending"
                </Card.Text>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button variant="primary" href="mailto:guptashreya39830@gmail.com">
                    Email 
                  </Button>
                </motion.div>

              </Card.Body>
            </Card>

          </motion.div>
        </Col>
      </Row>
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="text-center"
      >
        <motion.p variants={fadeInUpAnimation} className="text-light">
          Happy Birthday! 🎉
        </motion.p>
        <motion.h1
          variants={fadeInUpAnimation}
          className="text-4xl font-extrabold leading-10 tracking-tight sm:text-6xl sm:leading-none md:text-8xl text-light"
        >
          Wishing you a day filled with joy,<br />
          unforgettable moments <br />
          "Beloved."
        </motion.h1>
        <motion.p
          variants={fadeInUpAnimation}
          className="text-base text-gray-400 md:text-lg"
        >
        </motion.p>
      </motion.div>
    </Container>
  );
};

export default App;
