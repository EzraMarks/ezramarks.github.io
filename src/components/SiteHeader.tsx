import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import "./SiteHeader.css";

interface Props extends RouteComponentProps {}

export const SiteHeader: React.FC<Props> = ({ history, location, match }) => {
  const getActivePathClass = (pathname: string) => {
    return location.pathname === pathname ? "active" : null;
  };

  const homePath = "/";
  const resumePath = "/resume";

  return (
    <div className="site-header">
      <h1 className="site-title">
        <Link to={homePath}>Ezra Marks</Link>
      </h1>

      <div className="navbar">
        <Link
          className={`navbar-link home ${getActivePathClass(homePath)}`}
          to={homePath}
        >
          Home
        </Link>
        <Link
          className={`navbar-link resume ${getActivePathClass(resumePath)}`}
          to={resumePath}
        >
          Resume
        </Link>
      </div>
    </div>
  );
};
