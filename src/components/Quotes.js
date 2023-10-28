import React from 'react'
import styled from 'styled-components'


const Quotes = styled.section`
  padding: 20px;
  background-color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;

`

function QuotesSection (){
    return(
        <Quotes>
            <blockquote>
                "Isso é o que ela disse!" - Michel Scott
            </blockquote>
        </Quotes>
    )
}

export default QuotesSection
