import React from "react";
import classNames from "classnames";
import "./button.css";
import { Kinds } from "./Kinds";

const allowedKinds = Object.values(Kinds);
/*
<ButtonGroup>
  <Header><Icon name="home"> Home </Header>
  <Header><Loader type="spinner"> Loading </Header>
</ButtonGroup>
*/
export const Button = ({ kind, className, isVisible = true, children }) => (
  <button
    className={classNames(
      "btn",
      `btn-${allowedKinds.includes(kind) ? kind : Kinds.DEFAULT}`,
      {
        "btn-hidden": !isVisible,
        [className]: className
      }
    )}
  >
    {children}
  </button>
);
