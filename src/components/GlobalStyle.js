import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.5rem;
    color: #2C2C2C;
}
button{
    padding: 1.2rem 2.5rem;
    border: 1px solid #047958;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    transition: all 0.5 ease;
    background-color: #0AA765;
    border-radius: 10px;
}
h1{
    font-family: 'Playfair Display', serif;
}
h2{
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    padding-bottom: 3rem;
}
h3{
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    padding-bottom: 3rem;  
}
h4{
    font-family: 'Playfair Display', serif; 
}
p{
    padding-bottom: 3rem;
    line-height: 145%;

}
`;
export default GlobalStyle;
