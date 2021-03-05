import React, { useContext } from "react";
import { FirstNameContext, LastNameContext } from "../HookApp";

const ContextRender = () => {
  const firstName = useContext(FirstNameContext);
  const lastName = useContext(LastNameContext);

  return (
    <>
      <div>
        Using useContext to consume these following values {firstName}{" "}
        {lastName}
      </div>
    </>
  );
};

export default ContextRender;
