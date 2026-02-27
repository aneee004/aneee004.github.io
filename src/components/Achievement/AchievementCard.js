import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Achievement.css'

function AchievementCard({id, title, details, date, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor: theme.secondary,
            boxShadow: `0px 0px 30px ${theme.primary30}`,
            "&:hover": {
                backgroundColor: theme.secondary,
            },
        },
    }));

    const classes = useStyles();
    const isLargerImageCard = id === 1 || id === 3;
    const isThirdCard = id === 3;

    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-imgcontainer">
                    <img
                        src={image}
                        alt={title}
                        className={`${isLargerImageCard ? 'achievecard-img--large' : ''} ${isThirdCard ? 'achievecard-img--xlarge' : ''}`.trim()}
                    />
                </div>
                <div className="achievecard-content">
                    <p className="achievecard-date" style={{color: theme.tertiary}}>{date}</p>
                    <h2 style={{color: theme.tertiary}}>{title}</h2>
                    <p style={{color: theme.tertiary}}>{details}</p>
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
