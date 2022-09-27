import React from 'react'
import styled from 'styled-components'
import homeroupa from '../img/homeroupa.jpg'
import homeroupa2 from '../img/homeroupa2.jpg'
import homeroupa3 from '../img/homeroupa3.jpeg'

const DivHome = styled.div`
    background-color: #E0EEEE;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: auto;
    padding: 30px;

    h1{
        margin: 0;
        padding: 15px;        
        text-align: center;
    }

    h2{
        text-align: center;
    }

    img{
        width: 25%;
        height: 400px;
        padding: 50px;
        box-shadow: 10px 10px 8px #888888;
    }
    
    p{
        text-align: center;
        padding-top: 15px;
    }

`

export default ()=>{

    return(
        <DivHome>
            <h1>Bem vindo(a)</h1>
            <hr/>
            <h2>Nossa loja procura atender todos os publicos com a melhor qualidade em todos os sentidos!</h2>
            <img src={homeroupa}/> <img src={homeroupa2}/> <img src={homeroupa3}/>
            <p>Aqui você pode encontrar roupas para todos os estilos e gostos, compre para você, seu cônjuge, seu filho ou para qualquer pessoa que você goste.</p>
            <p>Temos roupas de crianças, adolescentes e adultos, tudo isso na melhor qualidade possível, para satisfazer você!!</p>

        </DivHome>
    )
}
