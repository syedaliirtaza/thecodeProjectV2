import React, { useEffect, useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./Faq.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 800px;
  background: #0E0F16;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 70em;
  @media (max-width: 1480px) {
    width: 60em
  }
  @media (max-width: 780px) {
    width: 25em
  }
  @media (max-width: 480px) {
    width: 20em
  }
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #00ffb9;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #7DF842;
  @media (max-width: 1480px) {
    height: 80px;
  }
  @media (max-width: 780px) {
    height: 100px;
  }
  @media (max-width: 480px) {
    height: 120px;
  }
  p {
    font-size: 0.8rem;
  }
`;


const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])

  return (
    <IconContext.Provider value={{ color: '#7DF842', size: '25px' }}>
      <AccordionSection>
      <div className='FaqHeading font-ocr'>
        <h1 data-aos="fade-up"
     data-aos-duration="3000" className='font-ocr'>FAQs</h1>
      </div>
        <Container data-aos="fade-up"
     data-aos-duration="3000">
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 className='heading'>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p className='paragraph'>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Faq;