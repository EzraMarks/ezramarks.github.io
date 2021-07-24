import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const SiteHeader: React.FC<Props> = ({ history, location, match }) => {
  // TODO
  const button = <Link to="/resume">Go to Resume page</Link>;
  const button2 = (
    <button
      onClick={() => {
        history.push("/about");
      }}
    >
      Go to about page
    </button>
  );

  return (
    <>
      Home
      {button}
      {button2}
    </>
  );
};
