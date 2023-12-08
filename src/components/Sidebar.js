import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faFolderOpen, faEnvelope, faImages } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <CustomLink to="/"><FontAwesomeIcon className="sideSep" icon={faHome} /><p className="linkName">Home</p></CustomLink>
            <CustomLink to="/About"><FontAwesomeIcon className="sideSep" icon={faCircleInfo} /><p className="linkName">About</p></CustomLink>
            <CustomLink to="/Project"><FontAwesomeIcon className="sideSep" icon={faFolderOpen} /><p className="linkName">Project</p></CustomLink>
            <CustomLink to="/Contact"><FontAwesomeIcon className="sideSep" icon={faEnvelope} /><p className="linkName">Contact</p></CustomLink>
            <CustomLink to="/Gallery"><FontAwesomeIcon className="sideSep" icon={faImages} /><p className="linkName">Gallery</p></CustomLink>
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