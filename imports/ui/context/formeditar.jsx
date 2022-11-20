import { createContext } from "react";

const formeditarContext = createContext({
  formedit: false,
  setformedit: (auth) => {}
});

export default formeditarContext;