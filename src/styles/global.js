import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:  #1b1b1b;
    --background-second: #262626;
    --background:  #1b1b1b;
    --red: #E52e54;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
    --rosa:#ff124b;
    --gray-light:#333333;
    --full-white: #ffffff;
    --primary-shadow: 0px 18px 41px rgba(0,0,0,0.05);
  }
   *{
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased
   }
   html{
     @media(max-widht: 1080px){
       font-size: 93.75%
     }
     @media(max-widht: 720px){
       font-size: 87.5%;
     }
   }
   
  
   body, input, textarea, button{
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
   }
   /* h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
   } */

`
