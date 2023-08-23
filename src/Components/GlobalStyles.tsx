import { Global, css } from "@emotion/react";
import React from 'react'

const GlobalFonts:React.FC = () => {
  return (
    <div>

        <Global styles = {css
        `
        :root {
          --color-primary: #050794;
          --color-secondary: #fbaf1b;}
        @font-face {
            font-family: CustomFonts;
            src: url(../Fonts/Roboto/Roboto-Medium.ttf);
            src: url(../Fonts/Roboto/Roboto-Black.ttf);
            src: url(../Fonts/Roboto/Roboto-Regular.ttf);
          }
          body {
						font-family: CustomFonts;
						background-color: white;
						min-height: 100vh;
						margin: 0;
						width: 100%;
					}
          
        
        
        `} />
      
    </div>
  )
}

export default GlobalFonts