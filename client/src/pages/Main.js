import React, { lazy } from "react";

//hooks
import { useResize } from "../hooks/useResize";

//wrappers
import SuspenceWrapper from "../wrappers/SuspenceWrapper";

//components
const Gallery = lazy(() => import("../components/Gallery"));
const Artist = lazy(() => import("../components/Artist"));
const Realeses = lazy(() => import("../components/Releases"));
const NepaliRapNew = lazy(() => import("../components/NepaliRapNew"));
const NepaliRapNews = lazy(() => import("../components/NepaliRapNews"));

const Main = () => {
  const { horizontalDimension } = useResize();

  return (
    <>
      <SuspenceWrapper>
        <Gallery
          url={"/api/order/album/1"}
          horizontalDimension={horizontalDimension}
        />
      </SuspenceWrapper>
      <SuspenceWrapper>
        <Artist />
      </SuspenceWrapper>
      <SuspenceWrapper>
        <Realeses />
      </SuspenceWrapper>
      <SuspenceWrapper>
        <Gallery
          url={"/api/order/album/2"}
          horizontalDimension={horizontalDimension}
        />
      </SuspenceWrapper>
      <SuspenceWrapper>
        <NepaliRapNew />
        <NepaliRapNews />
      </SuspenceWrapper>
    </>
  );
};

export default Main;
