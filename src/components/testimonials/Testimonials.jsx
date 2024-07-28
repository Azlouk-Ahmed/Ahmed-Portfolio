import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './testimonials.css';
import { zoomIn } from '../../utils/motion';
import svg from "./../../wave.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const fadeVariants = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1,
      ease: "easeOut",
    },
  },
});

function Testimonials({ isVisible }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="container pr">
      <div className="wavybox1">
        <img src={svg} alt="Wave background" />
      </div>
      <div className="wavybox2">
        <img src={svg} alt="Wave background" />
      </div>
      <div className="wavybox3">
        <img src={svg} alt="Wave background" />
      </div>
      <div className="title2 ta-c mt-3">what they say about me</div>
      <Swiper
      speed={1000}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="testiswiper mt-3"
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      >
        <SwiperSlide >
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/person1.jpeg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/anis.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide >
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/habib.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide >
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/ratib.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
        </SwiperSlide>
      </Swiper>

      {activeSlideIndex === 0 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/person1.jpeg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}

      {activeSlideIndex === 1 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/anis.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}

      {activeSlideIndex === 2 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/habib.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 3 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/ratib.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 4 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 5 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 6 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 7 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}
      {activeSlideIndex === 8 && (
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeVariants(0.2)}
          className="testibox rotating-animation df-c"
        >
          <img src={svg} className='wave' alt="Wave background" />
          <motion.div
            variants={zoomIn(0.2, 1)}
            className="imgcont"
          >
            <img src={require("../../assets/img/profile.jpg")} alt="Profile" />
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam, dolorum accusamus ducimus in id laboriosam quam hic molestiae tempore.
          </p>
        </motion.div>
      )}

    </div>
  );
}

export default Testimonials;
