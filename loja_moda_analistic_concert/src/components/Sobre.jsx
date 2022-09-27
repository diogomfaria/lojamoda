import styled from 'styled-components'
import alberto from '../img/alberto.png'
import diogo from '../img/diogo.jpg'
import lucas from '../img/lucas.png'
import gabriel from '../img/gabriel.webp'

const DivSobre = styled.div`
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
    
    img{
        display: inline-block;
        width: 150px;
    }
`

export default ()=>{

    return(
        <DivSobre>
            <h1>Conheça mais sobre a Analystic Concert</h1>
            <hr/>
            <img src={alberto}/> 
            <p>Alberto Januario Rodrigues Junior</p> 
            <p>RM: 86332 </p>
            <img src={diogo}/>
            <p>Diogo Moreira Faria</p> 
            <p>RM: 86987</p> 
            <img src={gabriel}/>
            <p>Gabriel Henrique Mahmoud Cardoso</p> 
            <p>RM: 89166 </p> 
            <img src={lucas}/> 
            <p>Lucas Ribeiro Lapinha</p> 
            <p>RM: 88257 </p> 
        </DivSobre>
    )
}