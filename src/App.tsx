import React from 'react'
import GlobalFonts from './Components/GlobalStyles'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Footer from './Components/footer/footer'
import styled from '@emotion/styled'




const Fiv = styled.div`
  body {
    font-family: CustomFonts;
    background-color: white;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    width: 100%;
  }

`

const App:React.FC = () => {
  return (
    <Fiv>
      <GlobalFonts />
      <Header />
      <Landing />
     
      <Footer />
      
      
    </Fiv>
  )
}

export default App
