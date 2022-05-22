import React, { Suspense } from "react";

//components
import Loading from "../components/Loading";

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspenseWrapper;
