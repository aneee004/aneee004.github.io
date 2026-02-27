import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.secondary, 
            backgroundColor: theme.primary,
            width: '100px',
            justifyContent: 'center',
            gap: '0px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1)',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
                transform: 'scale(1.05)',
                width: '180px',
                gap: '12px',
            },
            "&:hover $viewArr": {
                opacity: 1,
                transform: 'rotate(360deg) scale(1)',
                backgroundColor: theme.secondary,
                width: '38px',
                height: '38px',
                padding: '0.5rem',
                marginLeft: '0px',
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary,
            width: '0px',
            height: '0px',
            padding: '0px',
            marginLeft: '0px',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            opacity: 0,
            transform: 'rotate(0deg) scale(0)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none',
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
