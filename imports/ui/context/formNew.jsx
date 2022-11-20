import { createContext } from "react";

const formnewContext = createContext({
  formnuevo: false,
  setformnew: (auth) => {}
});

export default formnewContext;