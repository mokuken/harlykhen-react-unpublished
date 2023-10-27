import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import MusicPlayer from '../components/MusicPlayer'

function Sidebar() {
    return (
        <div className="sidebar">
            <CustomLink to="/"><i class="fas fa-home"></i> Home</CustomLink>
            <CustomLink to="/About"><i class="fas fa-info-circle"></i> About</CustomLink>
            <CustomLink to="/Project"><i class="fas fa-folder-open"></i> Project</CustomLink>
            <CustomLink to="/Contact"><i class="fas fa-envelope"></i> Contact</CustomLink>
            <MusicPlayer />
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