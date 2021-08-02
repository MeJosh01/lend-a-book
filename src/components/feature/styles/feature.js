import styled from "styled-components/macro";

export const Container = styled.div`
display: flex;
flex-direction: column;
border-bottom: 8px solid #222;
text-align: center;
padding: 165px 45px;
`;

export const Title = styled.h1`
color:white;
max-width:840px;
font-size: 70px;
font-weight:bold;
margin:auto;
font-family: "Times New Roman", Times, serif;


@media (max-width: 1000px){
    font-size:35px;
}
`;

export const SubTitle = styled.h2`
color:white;
font-size: 26px;
font-weight:normal;
margin:16px auto;
font-family: "Times New Roman", Times, sans-serif;

@media (max-width: 1000px){
    font-size:18px;
}
`;