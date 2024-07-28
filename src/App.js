import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from "./components/hero/Hero.jsx";
import Specialities from "./components/specialities/Specialities.jsx";
import Projects from "./components/projects/Projetcs.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Experiences from "./components/experiences/Experiences.jsx";
import ChessSection from "./components/chess/ChessSection.jsx";
import FunFacts from "./components/funfacts/FunFacts.jsx";
import Skills from "./components/skills/Skills.jsx"


import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';

import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import Experience2 from './components/experiences/Experience2.jsx';
import Experience3 from './components/experiences/Experience3.jsx';
import Goals from './components/goal/Goals.jsx';
import Skills2 from './components/skills/Skills2.jsx';
import Skills3 from './components/skills/Skills3.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={{
        enabled: true,
      }}
      speed={1000} 
      modules={[Keyboard, Mousewheel, Pagination]}
      className="main-swiper"
      simulateTouch={false}
      allowTouchMove={false}
      noSwiping={true}
      onlyExternal={true}
      noSwipingClass="swiper-slide"
      onSlideChange={handleSlideChange}
    >
      <SwiperSlide><Hero isVisible={slideIndex === 0} /></SwiperSlide>
      <SwiperSlide>
        <Specialities isVisible={slideIndex === 1} />
      </SwiperSlide>
      <SwiperSlide>
        <Projects isVisible={slideIndex === 2} />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonials isVisible={slideIndex === 3} />
      </SwiperSlide>
      <SwiperSlide>
        <Experiences isVisible={slideIndex === 4} />
      </SwiperSlide>
      <SwiperSlide>
        <Experience2 isVisible={slideIndex === 5} />
      </SwiperSlide>
      <SwiperSlide>
        <Experience3 isVisible={slideIndex === 6} />
      </SwiperSlide>
      <SwiperSlide>
        <FunFacts isVisible={slideIndex === 7} />
      </SwiperSlide>
      <SwiperSlide>
        <ChessSection isVisible={slideIndex === 8} />
      </SwiperSlide>
      <SwiperSlide>
        <Goals isVisible={slideIndex === 9}/>
      </SwiperSlide>
      <SwiperSlide>
        <Skills isVisible={slideIndex === 10}/>
      </SwiperSlide>
      <SwiperSlide>
        <Skills2 isVisible={slideIndex === 11}/>
      </SwiperSlide>
      <SwiperSlide>
        <Skills3 isVisible={slideIndex === 12}/>
      </SwiperSlide>
      <SwiperSlide>
        <Contact isVisible={slideIndex === 12}/>
      </SwiperSlide>
      <SwiperSlide>
        <Footer isVisible={slideIndex === 13}/>
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
