export const certificatesImage = (certificateName) => {
    const certificateID = certificateName.toLowerCase();
    switch (certificateID) {
        case 'react':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkGqpxlp3xYy5UN0RbKeGxyGifJ1vC2l6TA&s'
        case 'aws1':
            return 'https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_200_200/B4EZgOay6gHEAQ-/0/1752588562343/amazon_web_services_logo?e=1763596800&v=beta&t=dEpWPcQ6-Qy_eNyehtgc8KkODdGU19mVuHQU3-jGDNs'
        case 'aws':
            return 'https://img.icons8.com/androidL/512/FD7E14/amazon-web-services.png'
        case 'deep learning':
            return 'https://coursera-university-assets.s3.amazonaws.com/b4/5cb90bb92f420b99bf323a0356f451/Icon.png'
        case 'hackerrank':
            return 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'
        default:
            break;
    }
}
