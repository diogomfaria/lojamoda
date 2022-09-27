import React from 'react'
import styled from 'styled-components'

import mm1 from '../img/mm1.jpg'
import mm2 from '../img/mm2.jpg'
import mm3 from '../img/mm3.jpg'
import mm4 from '../img/mm4.jpg'
import mm5 from '../img/mm5.jpg'
import mm6 from '../img/mm6.jpg'

const DivMm = styled.div`

    background-color: #E0EEEE;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: auto;
    padding: 15px;
    text-align: center;
    

    h1{
        margin: 0;
        padding: 15px;        
        text-align: center;
    }

    h3{
        text-align: center;
    }

    img{
        width: 25%;
        height: 500px;
        padding: 50px;
        display: inline-block;
        box-shadow: 10px 10px 8px #888888;

    }
    
    p{
        border-width: medium;
        border-style: double;
        width: 300px;
        margin-left: 790px;
    }

    h4{
        border-left-style: double;
        border-right-style: double;
        width: 100px;
        margin-left: 880px; 
    }
`

export default ()=>{

    return(
        <DivMm>
            <h1>Esta é a sessão de moda masculina</h1>
            <hr/>
            <h3>Todas as roupas podem ser parceladas em até 5x sem juros!!</h3>
            <br/>
            <img src={mm1}/>
            <p>JAQUETA ESTAMPADA CORTA VENTO</p>
            <h4>R$149,90</h4>
            <br/>
            <img src={mm2}/>
            <p>BERMUDA CARGO EM SARJA PRETA</p>
            <h4>R$139,90</h4>
            <br/>
            <img src={mm3}/>
            <p>CAMISA EM MALHA BOTONÊ COQUEIRO</p>
            <h4>R$59,90</h4>
            <br/>
            <img src={mm4}/>
            <p>MEIA HAPPY ET</p>
            <h4>R$19,90</h4>
            <br/>
            <img src={mm5}/>
            <p>OVERSHIRT EM SARJA PRETA</p>
            <h4>R$169,90</h4>
            <br/>
            <img src={mm6}/>
            <p>CAMISA LISTRADA BLACK</p>
            <h4>R$119,90</h4>
            <br/>
        </DivMm>
    )
}