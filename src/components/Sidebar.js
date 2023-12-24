import React from "react";
import Tooltip from '../components/Tooltip.js';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faFolderOpen, faImages } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <Tooltip text="Home">
                <CustomLink to="/"><FontAwesomeIcon className="sideSep" icon={faHome} /></CustomLink>
            </Tooltip>
            <Tooltip text="About">
                <CustomLink to="/About"><FontAwesomeIcon className="sideSep" icon={faCircleInfo} /></CustomLink>
            </Tooltip>
            <Tooltip text="Project">
                <CustomLink to="/Project"><FontAwesomeIcon className="sideSep" icon={faFolderOpen} /></CustomLink>
            </Tooltip>
            <Tooltip text="Gallery">
                <CustomLink to="/Gallery"><FontAwesomeIcon className="sideSep" icon={faImages} /></CustomLink>
            </Tooltip>
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