import React from 'react'
import styled from 'styled-components'
import mf1 from '../img/mf1.webp'
import mf2 from '../img/mf2.webp'
import mf3 from '../img/mf3.webp'
import mf4 from '../img/mf4.webp'
import mf5 from '../img/mf5.webp'
import mf6 from '../img/mf6.webp'

const DivMf = styled.div`

    background-color: #E0EEEE;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: auto;
    padding: 15px;
    text-align: center;
    

    h1{
        margin: 0;
        padding: 15px;       
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
        <DivMf>
            <h1>Esta é a sessão de moda feminina</h1>
            <hr/>
            <h3>Todas as roupas podem ser parceladas em até 5x sem juros!!</h3>
            <br/>
            <img src={mf1}/>
            <p>BLUSA SUEDE MANGA CURTA</p>
            <h4>R$59,90</h4>
            <br/>
            <img src={mf2}/>
            <p>CALÇA JEANS SKINNY BIOTIPO</p>
            <h4>R$109,90</h4>
            <br/>
            <img src={mf3}/>
            <p>CALÇA JEANS DESTROYED SKINNY BIOTIPO</p>
            <h4>R$129,90</h4>
            <br/>
            <img src={mf4}/>
            <p>BLUSA CIGANINHA BOTÕES MANGA CURTA BABADO</p>
            <h4>R$55,90</h4>
            <br/>
            <img src={mf5}/>
            <p>MACAQUINHO CANELADO HALTER NECK AMARRAÇÃO</p>
            <h4>R$79,90</h4>
            <br/>
            <img src={mf6}/>
            <p>BLUSA REGATA TEXTURA VAZADO</p>
            <h4>R$49,90</h4>
            <br/>
        </DivMf>
    )
}