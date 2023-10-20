import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Project">Project</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
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