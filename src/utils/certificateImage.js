export const certificatesImage = (certificateName) => {
    const certificateID = certificateName.toLowerCase();
    switch (certificateID) {
        case 'react':
            return 'https://media.licdn.com/dms/image/v2/D560BAQEAi2tXX6yTVg/company-logo_100_100/B56ZWvKUEqHsAc-/0/1742400471801/hkust_logo?e=1763596800&v=beta&t=fOVLSYX-UMP2wnafFgWEQiVpeIfl8SS548Pgd7dVcXY'
        case 'aws fundamentals':
            return 'https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_200_200/B4EZgOay6gHEAQ-/0/1752588562343/amazon_web_services_logo?e=1763596800&v=beta&t=dEpWPcQ6-Qy_eNyehtgc8KkODdGU19mVuHQU3-jGDNs'
        case 'aws architecting':
            return 'https://img.icons8.com/androidL/512/FD7E14/amazon-web-services.png'
        case 'deep learning':
            return 'https://media.licdn.com/dms/image/v2/C560BAQEHKffoI8RwIQ/company-logo_200_200/company-logo_200_200/0/1630672537710/deeplearningai_logo?e=1763596800&v=beta&t=LDXWHIPdQSeXWeJJq6u6snq_xiS8sCnYreAi66XVilE'
        case 'hackerrank':
            return 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'
        default:
            break;
    }
}
