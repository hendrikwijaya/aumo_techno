import React, { createContext } from "react";

export const { Provider, Consumer } = createContext();

// eslint-disable-next-line react/display-name
export const withContext = (Component) => (props) =>
  <Consumer>{(value) => <Component {...value} {...props} />}</Consumer>;
