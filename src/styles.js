import styled from "styled-components";
import Background from './assets/backgraund1.svg'

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh; 
    

`;
export const Image = styled.img`
margin-top: 30px ;

`;

export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  ); 

  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;  

  display: flex;
    flex-direction: column;
    
    height: 100vh; 
  

    `;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;

color: #ffffff;
margin-bottom: 80px;

`;

export const InputLabel = styled.p`

letter-spacing: -0.40799999237060547px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
margin-bottom:34px ;

color: #eeeeee;
margin-left:25px;

`;

export const Input = styled.input`

background: #FFFFFF40;
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;

width: 342px;
height: 58px;
padding-left: 25px;
margin-bottom: 34px;

border: nome;
outline: nome;


font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;

color: #FFFFFF;
`;

export const Button = styled.button`

width: 342px;
height: 74px;

background: #000000CC;

border-radius: 14px;
border: nome; 

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
color: #ffffff;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
opacity: 0.8;

}

&:active{
  opacity: 0.5;
}

`;

export const User = styled.li`
display: flex;
    
    justify-content: space-around;
    align-items: center;
  margin-top: 20px; 
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

border: nome;
outline: nome;

p{
 
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #FFF;
}
button {
background: none;
border: nome;
cursor: pointer;

}

`;