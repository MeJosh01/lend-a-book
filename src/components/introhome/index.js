import React from 'react';
import {Container,Inner,Item,Pane,Title,SubTitle,Image } from './styles/introhome';


export default function Introhome({children, direction='row', ...restPrps}){
    return (
    
            <Item {...restPrps}>
                <Inner direction={direction}>{children}</Inner>
            </Item>

        )
}


Introhome.Container = function IntrohomeContainer({children,...restPrps}){
    return <Container{...restPrps}>{children}</Container>;
}

Introhome.Pane = function IntrohomePane({children,...restPrps}){
    return <Pane{...restPrps}>{children}</Pane>;
}

Introhome.Title = function IntrohomeTitle({children,...restPrps}){
    return <Title{...restPrps}>{children}</Title>;
}

Introhome.SubTitle = function IntrohomeSubTitle({children,...restPrps}){
    return <SubTitle{...restPrps}>{children}</SubTitle>;
}

Introhome.Image = function IntrohomeImage({...restPrps}){
    return <Image{...restPrps} />;
}