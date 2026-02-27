import React,{ useContext } from 'react';

import './Certificates.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { certificatesData } from '../../data/certificatesData'
import { certificatesImage } from '../../utils/certificateImage'

function Certificates() {

    const { theme } = useContext(ThemeContext);
    const groupedCertificates = certificatesData.reduce((acc, cert) => {
        if (!acc[cert.name]) {
            acc[cert.name] = [];
        }
        acc[cert.name].push(cert);
        return acc;
    }, {});
    const webDevAndHackerRank = [
        ...(groupedCertificates.React || []),
        ...(groupedCertificates.HackerRank || [])
    ];
    const certificateRows = [
        webDevAndHackerRank,
        groupedCertificates['Deep Learning'] || [],
        groupedCertificates.AWS || []
    ].filter((row) => row.length > 0);

    const certificateBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="certificates" style={{backgroundColor: theme.secondary}}>
            <div className="certificatesHeader">
                <h2 style={{color: theme.primary}}>Certificates</h2>
            </div>
            <div className="certificatesContainer">
                {certificateRows.map((row, rowIndex) => (
                    <div
                        className={`certificate-row ${rowIndex === certificateRows.length - 1 ? 'certificate-row--aws' : ''}`}
                        key={`certificate-row-${rowIndex}`}
                    >
                        {row.map((cert) => (
                            <a
                                className="certificate--box"
                                key={`${cert.id}-${cert.title}`}
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                style={certificateBoxStyle}
                            >
                                <img src={certificatesImage(cert.name)} alt={cert.name} />
                                <h3 style={{color: theme.tertiary}}>
                                    {cert.title}
                                </h3>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificates
