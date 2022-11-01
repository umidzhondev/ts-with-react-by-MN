import React from "react";
import { Children, Children2 } from "./Children";

const Parents = () => {
  return (
    <>
      <Children
        color="#000"
        onClick={() => console.log("Click")}
        name="Umidjon"
        age={17}
      />
    </>
  );
};

export default Parents;
