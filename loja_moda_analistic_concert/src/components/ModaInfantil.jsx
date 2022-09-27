import React from 'react'
import styled from 'styled-components'

import mi1 from '../img/mi1.webp'
import mi2 from '../img/mi2.jpg'
import mi3 from '../img/mi3.png'
import mi4 from '../img/mi4.webp'
import mi5 from '../img/mi5.jpg'
import mi6 from '../img/mi6.jpg'

const DivMi = styled.div`

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
        <DivMi>
            <h1>Esta é a sessão de moda infantil</h1>
            <hr/>
            <h3>Todas as roupas podem ser parceladas em até 5x sem juros!!</h3>
            <br/>
            <img src={mi1}/>
            <p>CONJUNTO INFANTIL MASCULINO VERÃO</p>
            <h4>R$149,90</h4>
            <br/>
            <img src={mi2}/>
            <p>CONJUNTO DE ROUPA INFANTIL MASCULINO COM CAMISA CAMUFLADA + SHORTS 2PÇS COCOGO</p>
            <h4>R$74,90</h4>
            <br/>
            <img src={mi3}/>
            <p>ROUPA INFANTIL - KIT DE PRAIA MASCULINO - BANANA DANGER</p>
            <h4>R$89,90</h4>
            <br/>
            <img src={mi4}/>
            <p>ROUPA FEMININA INFANTIL BLUSA TULE CALÇA JOGGER BLOGUEIRINHA</p>
            <h4>R$89,90</h4>
            <br/>
            <img src={mi5}/>
            <p>ROUPA INFANTIL FEMININA MODA BLOGUEIRINHA MINI DIVA FASHION</p>
            <h4>R$149,90</h4>
            <br/>
            <img src={mi6}/>
            <p>CONJUNTO INFANTIL FEMININO VERÃO</p>
            <h4>R$89,90</h4>
            <br/>
        </DivMi>
    )
}