import styled from 'styled-components'
import React from 'react'
import './About.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function About(){
    return(
        <Body>
            <p style={{width: "90%"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo diam nec mi tincidunt elementum. Duis at tempus sapien. Nam varius pellentesque felis et placerat. Duis sollicitudin nec metus quis scelerisque. Etiam convallis, massa id porta ornare, orci quam ultricies diam, vel maximus tellus lorem eu dui. Nulla pellentesque gravida ante, nec mollis felis luctus in. Ut vel lacus malesuada sem tristique aliquet. Nunc nec felis sed sapien consectetur gravida eget at massa. Ut eu purus non eros ornare iaculis at sit amet ex. Aliquam imperdiet, dui in porttitor iaculis, tortor augue volutpat augue, nec ullamcorper quam nibh vitae ipsum. Vivamus lobortis tellus id quam scelerisque, sit amet hendrerit tellus ultrices. Vivamus laoreet fermentum felis ut eleifend. Proin volutpat malesuada vehicula.
            </p>
        </Body>
    )
}

export default About;