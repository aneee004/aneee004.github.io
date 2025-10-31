import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Blog, Education, Experience, Contacts, Projects, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Certificates from '../../components/Certificates/Certificates'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Achievement />
            <Certificates />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
