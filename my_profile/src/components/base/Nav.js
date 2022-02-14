import routes from '../../routes';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const TopBar = styled.div`
display: flex;
flex-direction: row-reverse;
width: 100%;
height: 50px;
background-color: #333333;
margin-top: 20px;
margin-bottom: 20px;
border-color: #FF0000;
border-width: 4px;
border-style: solid;
`
const TopMenu = styled.li`
display: inline;
width: 80%;
margin: 0;
border-color: #00AA00;
border-width: 4px;
border-style: solid;
list-style:none;
`

function Nav(props){
    return(
        <TopBar>
        <ul >
        {
            routes.filter(
                item => item.isNav
            ).map(
                (item, index) =>
                    <TopMenu className="nav-item" key={index}><Link className="nav=link" to={item.path} style={{color: "red"}}>{item.title}</Link></TopMenu>
            )
        }
        </ul>
        </TopBar>
    )
}

export default Nav;