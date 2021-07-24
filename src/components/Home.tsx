import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }) => {
  const button = <Link to="/resume">Go to Resume page</Link>;
  const button2 = (
    <button
      onClick={() => {
        history.push("/about");
      }}
    ></button>
  );

  return (
    <>
      <div>Home</div>
      {button}
      {button2}
    </>
  );
};
