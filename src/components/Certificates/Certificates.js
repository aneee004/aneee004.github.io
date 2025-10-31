import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Certificates.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { certificatesData } from '../../data/certificatesData'
import { certificatesImage } from '../../utils/certificateImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="certificates" style={{backgroundColor: theme.secondary}}>
            <div className="certificatesHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="certificatesContainer">
                <div className="certificates--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {certificatesData.map((certificate, id) => (
                            <div className="certificate--box" key={id} style={certificateBoxStyle}>
                                <img src={certificatesImage(certificate)} alt={certificate} />
                                <h3 style={{color: theme.tertiary}}>
                                    {certificate}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
