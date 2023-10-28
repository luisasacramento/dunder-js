import React from 'react'
import styled from 'styled-components'
import buildingImage from '../assets/building.png'

const BannerContainer = styled.main`
   background-image: url(${buildingImage});
   height: 300px;
   background-size: cover;
   justify-content: center;
   align-items: center;
   
`


function Banner(){
    return(
        <BannerContainer />

        
    )
}

export default Banner