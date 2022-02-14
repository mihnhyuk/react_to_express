import styled from 'styled-components'
import React, {useState, useEffect} from 'react'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Category(){
    const [values, setValues] = useState({content: ""});
    const [submitting, setSubmitting] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };
    const handleSubmit = (event: React.FormEvent) => {
        setSubmitting(true);
        event.preventDefault();
    };
    useEffect(()=>{
        if(submitting){
            setSubmitting(false);
            console.log({values});
        }   
    })
    return(
        <Body>
            <form onSubmit={handleSubmit}>
                <input value={values.content} name="content" onChange={handleChange} type="text"/>
                <input type="submit" value="제출"/>
            </form>
        </Body>
    )
}

export default Category;