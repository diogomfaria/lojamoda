import React from 'react'
import styled from 'styled-components'

const DivRod = styled.div`
    
    background-color: #C1CDCD;
    height: 10%;
    margin: 0;
    padding: 25px;

    .heart {
        font-size: 24px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(255, 255, 255, 0.3);
        color: red;
    }
    
    p{
        text-align: center;
    }

`

export default ()=>{

    return(
        <DivRod>
            <p> Av. Paulista, 1106 - Cerqueira César, São Paulo - SP, 01311-000 | Feito com carinho <span class="heart" >&hearts;</span> por Analystic Concert | Copyright &copy; 2021 </p>
        </DivRod>
    )
}