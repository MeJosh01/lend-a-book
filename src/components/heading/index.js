import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/heading';

export default function Heading({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Heading.Input = function HeadingInput({...restProps}){
    return <Input{...restProps}/>;
};

Heading.Button = function HeadingButton({children, ...restProps}){
    return(
        <Button {...restProps}>
            {children}<img src= "/images/secondImageGroup/a2.png" alt= "sign up"/>
        </Button>
    );
};

Heading.Text = function HeadingText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Heading.Break = function HeadingBreak({...restProps}){
    return<Break{...restProps}/>;
};