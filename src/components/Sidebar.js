import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import ThemeChanger from './ThemeChanger'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Sidebar = () => {
  return (
      <nav>
        <CustomLink to="/"><FontAwesomeIcon icon={faHome} /></CustomLink>
        <CustomLink to="/about"><FontAwesomeIcon icon={faCircleInfo} /></CustomLink>
        <CustomLink to="/projects"><FontAwesomeIcon icon={faFolderOpen} /></CustomLink>
        {/* Add a button to toggle colors */}
        <ThemeChanger />
      </nav>
  );
};

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
      <Link className={isActive ? "active" : ""} to={to} {...props}>
          {children}
      </Link>
  )
}

export default Sidebar;
