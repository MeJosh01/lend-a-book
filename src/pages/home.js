import React from 'react';
import { Feature, Heading } from '../components';
import { IntrohomeContainer } from '../container/introhome';
import { FooterContainer } from '../container/footer';
import { FaqsContainer } from '../container/faqs';
import {HeaderContainer} from '../container/header';

export default function Home(){
    return (
<>
    <HeaderContainer>
    <Feature>
        <Feature.Title>
            Welcome to lend a booK
        </Feature.Title>
        <Feature.SubTitle>
            Lend a book and movies from anywhare
        </Feature.SubTitle>

        <Heading>
        <Heading.Input placeholder ="Enter your Email address"/>
        <Heading.Button>Sign Up </Heading.Button>
        <Heading.Break/>
        <Heading.Text>
            Aren't you sign up yet ? &nbsp; Enter your Email to get started
        </Heading.Text>
        </Heading>
    </Feature>
    </HeaderContainer>
    
    <IntrohomeContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    
</>
    );
}