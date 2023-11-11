import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Episodios(){
    return(
        <div>
            <Header/>
            <Banner/>
            <div>Contato</div>
            <p>Lista com todos os episodios da serie</p>
            <Footer/>
        </div>
    )
}

export default Episodios