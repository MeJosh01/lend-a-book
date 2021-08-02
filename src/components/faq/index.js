import React, {createContext, useState, useContext} from 'react';
import { Container, Title, Item, Inner, Header, Body } from './styles/faq';

const ToggleContext = createContext();

export default function Faq({children, ...restProps}){
    return(
<Container {...restProps}>
    <Inner>
        {children}
    </Inner>
</Container>
    );
}

Faq.Title = function FaqTitle({children,...restProps}){
return <Title{...restProps}>{children}</Title>;
};


Faq.Item = function FaqItem({children,...restProps}){
const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value = {{toggleShow, setToggleShow}}>
        <Item{...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Faq.Header = function FaqHeader({children,...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return (<Header onClick = {()=>setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
        {children}
        {toggleShow ?(<img src="/images/secondImageGroup/b.png" alt="Close" />):(
            <img src="/images/secondImageGroup/a.png" alt="Open" />
        )}
    </Header>
    ); 
    };

Faq.Body = function FaqBody({children, ...restProps}){
const {toggleShow} = useContext(ToggleContext);

return toggleShow ? <Body{...restProps}>{children}</Body>: null;
};