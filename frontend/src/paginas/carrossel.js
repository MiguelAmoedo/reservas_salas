import {React, useState, useEffect} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';
import '../componentes/Modal/BSmodal'
import { motion } from 'framer-motion'
import image1 from '../imgs/1.jpg'
import image2 from '../imgs/2.jpg'
import image3 from '../imgs/3.jpg'
import image4 from '../imgs/4.jpg'
import image5 from '../imgs/5.jpg'
import image6 from '../imgs/6.jpg'





function Carrossel() {

  const images = [image1, image2 , image3 , image4 , image5 , image6]
  const [width, setWidth] = useState(0)

  const [carrosselData, setCarrosselData] = useState([]);

  useEffect(() => {
    async function fetchCarrosselData () {
      console.log(Carousel.currrent?.scrollWidth, Carousel.currrent?.offsetWidht)
      setWidth(Carousel.currrent?.scrollWidth, Carousel.currrent?.offsetWidht)
    
      try {
        const response = await axios.get('http://localhost:5000/api/salas');
        setCarrosselData(response.data);
        console.log('data' + carrosselData);
        console.log('response' + response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCarrosselData();
  }, [carrosselData]);

  const handleImageClick = (link) => {
    window.location.href = link;  }

  return (
    <div className="Api">
      <motion.div className="carousel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index} data-link="https://example.com">
              <Link to="/salas">
                <img src={image} alt="Texto alt" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carrossel;