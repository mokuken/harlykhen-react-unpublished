import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import MusicPlayer from '../components/MusicPlayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faFolderOpen, faEnvelope, faImages } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <CustomLink to="/"><FontAwesomeIcon icon={faHome} /> Home</CustomLink>
            <CustomLink to="/About"><FontAwesomeIcon icon={faCircleInfo} />  About</CustomLink>
            <CustomLink to="/Project"><FontAwesomeIcon icon={faFolderOpen} />  Project</CustomLink>
            <CustomLink to="/Contact"><FontAwesomeIcon icon={faEnvelope} />  Contact</CustomLink>
            <MusicPlayer />
            <CustomLink to="/Gallery"><FontAwesomeIcon icon={faImages} />  Gallery</CustomLink>
        </div>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <Link className={isActive ? "active" : ""} to={to} {...props}>
            {children}
        </Link>
    )
}

export default Sidebar