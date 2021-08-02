import React from 'react';
import introData from '../first_home/intro';
import {Introhome} from '../components';

export function IntrohomeContainer() {
  return (
    <Introhome.Container>
      {
        introData.map((item)=>(
          <Introhome key={item.id} direction ={item.direction}>
            <Introhome.Pane>
            <Introhome.Title>{item.title}</Introhome.Title>
            <Introhome.SubTitle>{item.subTitle}</Introhome.SubTitle>
            </Introhome.Pane>
            <Introhome.Pane>
            <Introhome.Image src={item.image} alt={item.alt}/>
            </Introhome.Pane>
          </Introhome>
        ))
      }
    </Introhome.Container>
      
  );
}


 
 