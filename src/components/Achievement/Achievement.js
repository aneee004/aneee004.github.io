import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                    <div className="achievement-body">
                        <div className="achievement-description">
                            <h1 style={{color: theme.primary}}>Achievements</h1>
                        </div>
                        <div className="achievement-cards">
                            {achievementData.achievements.slice(0, 3).map(achieve => ( 
                                <AchievementCard 
                                    key={achieve.id}
                                    id={achieve.id}
                                    title={achieve.title}
                                    details={achieve.details}
                                    date={achieve.date}
                                    image={achieve.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Achievement
