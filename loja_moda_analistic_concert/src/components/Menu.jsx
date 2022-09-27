import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DivMenu = styled.nav`
    background-color: #9F79EE;
    display: flex;
    justify-content: center;
    height: 80px;
    text-shadow: 2px 2px darkblue;
    
    ul{ display:flex;}
    
    ul li{ list-style: none; text-align: center; border-radius: 10px ; box-shadow: 4px 4px 1px 1px #8e67e0; padding-left: 10px}
    
    ul li a{ display: inline-block; text-decoration: none; 
        padding:20px; color: #fff; font-size: 1.5em; }
        
`
const DivTitulo = styled.div`
        text-align: center;
        background-color: #9F79EE;
        margin: 0;
        display: flex;
        justify-content: center;
        height: 80px;
        text-shadow: 2px 2px darkblue;        
        padding-bottom:20px; 
        color: #fff; 
        font-size: 2em;
        padding: 20px;
`

export default ()=>{

    return(
        <>
        <DivTitulo>
            <h1>Fashion Concert</h1>
        </DivTitulo>
        <DivMenu>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/modafeminina'>Moda Feminina</Link></li>
                <li><Link to='/modamasculina'>Moda Masculina</Link></li>
                <li><Link to='/modainfantil'>Moda Infantil</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
        </DivMenu>
        </>
    )
}
