import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
display:flex;
flex-direction:column;
background: url(${({src}) => 
src ? '../images/background/${src}.jpg':'../images/background/bg2.jpg'})
top left / cover no-repeat;
`;


export const Container = styled.div`
display:flex;
margin: 0 30px;
height:200px;
padding:0;
justify-content: space-between;
align-item:center;

a{
    display: flex;
}

@media (max-width:1000px){
    margin: 0 30px;
}
`;

export const Logo = styled.img`
height:150px;
width: 150px;


@media (min-width:1000px){
    
    height: 200px;
    width: 200px;
}

`;

export const ButtonLink = styled(ReactRouterLink)`
display: block;
background-color: #ef6c35;
align-items:center;
width:140px;
height:fit-content;
color:black;
font-weight:bold;
border:0;
font-size:15px;
border-radious:3px;
padding: 8px 17px;
margin-top:60px;

  border-radius: 20px;




cursor:pointer;
text-decoration:none; 
box-sizing: border-box;

&:hover{
    background-color:#f40612;
    
}

@media (max-width:1000px){
    width:108px;
    font-size:10px;

}

img{
    margin-left:20px;
    filter:brightness(0) invert(0);
    width: 24px;

    @media (max-width:1000px){
        width:16px;
    }
}
`;
