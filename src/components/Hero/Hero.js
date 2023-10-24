import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {/* Hello there, i am _____, make my own to stand out */}
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        {/* My value proposition, what i can offer to employers, what projects i can help them build */}
        The purpose of JavaScript Mastery is to help aspiring and established
        developers to take their development skills to the next level and build
        awesome apps.
      </SectionText>
      <Button onClick={() => (window.location.href = 'https://google.com')}>
        {/* Point to any specific section of this page or point directly to email */}
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
