import * as React from 'react'
import SplitLayout from '../components/SplitLayout'

const LightCol = () => (
  <h1>
    AboutPage
  </h1>
)

const DarkCol = () => (
  <div>
  </div>
)

const AboutPage = () => (
  <SplitLayout
    light={
      <LightCol/>
    }
    dark={
      <DarkCol/>
    }
  />
)

export default AboutPage
