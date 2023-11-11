import React from 'react'
import styled from 'styled-components'
import imagemDireita from '../assets/img2.png'

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px; 
    max-width: 1000px;
    margin: auto;

 
`

const FormContainer = styled.div`
   flex:3;
   text-align: center;
`

const Form = styled.form`
   //Estilo adicional pode ser inserido aqui se tiver relação com o form 

`

const SearchInput = styled.input`
   display: block;
   width: 60%;
   padding: 15px;
   margin-bottom: 20px;
   border: 1px solid #000;
   border-radius: 4px;
   margin: 0 auto 20px auto;
`

const ImageContainer = styled.figure`
   flex: 2;
   img{
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
   }

`

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size:16px;
    transition: all 0.3s;
`


function ContactPage(){
    return(
        <ContactContainer>
            <FormContainer>
                <Form>
                    <SearchInput  type='text' placeholder='Insira seu Nome'/>
                    <SearchInput  type='email' placeholder='Insira seu Nome'/>
                    <SearchInput  type='textarea' placeholder='Insira seu Nome'/>
                    <SearchInput  type='text' placeholder='Insira seu Nome'/>
                    <Button></Button>

            

                </Form>
            </FormContainer>
            <ImageContainer>
                <img src={imagemDireita} alt="Imagem Descritivo"/>
            </ImageContainer>
        </ContactContainer>
    )
}

export default ContactPage