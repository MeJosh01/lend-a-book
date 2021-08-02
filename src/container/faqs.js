import React from 'react';
import {Faq} from '../components'
import Heading from '../components/heading';
import faqsData from '../first_home/faqs.json'; 

export function FaqsContainer(){
    return(
        <Faq>
            <Faq.Title>Frequeently asked qutions</Faq.Title>
            {faqsData.map((item) => (
                <Faq.Item key={item.id}>
                    <Faq.Header>{item.header}</Faq.Header>
                    <Faq.Body>{item.body}</Faq.Body>
                </Faq.Item>
            ))}
            <Faq.Item/>

                <Heading>
                    <Heading.Input placeholder ="Enter your email address"/>
                    <Heading.Button>Try it now</Heading.Button>
                    <Heading.Break/>
                    <Heading.Text>
                        Ready to watch? Enter your Email to create or resart your membership
                    </Heading.Text>
                </Heading>

        </Faq>
    )
}