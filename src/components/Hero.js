import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/video/Tavle1.mp4"
export const Hero = () => {
  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBG>
      <HeroContent>
        <HeroItem>
          <HeroH1>The Lovely Destiny.</HeroH1>
          <HeroP>Out Of this World</HeroP>
          <Button primary="true" big="true" round="true" to="/trips">
            Travel Now
          </Button>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
  padding:0 1rem;
  position:relative
  margin-top:-80px;
  :before{
      content="";
      position:absolute;
      top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index:32;
  background: linear-gradient(
      180deg,
       rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%
        ),
  linear-gradient(180deg, rgba(0,0,0,0.2) 0%,transparent 100%);
   }
`
const HeroBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.div`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 1.5rem;
  padding: 0 1rem;
`
const HeroP = styled.div`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
