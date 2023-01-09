import React, { FC } from "react";

import { createRoot } from "react-dom/client";
import TitleComponent from "./common/components";

const App: FC = () => {
  const name = "Viktoryia";

  return (
    <div>
      <TitleComponent />
      hello there,
      {name}
    </div>
  );
};

const root = document.querySelector("#root") as Element;
createRoot(root).render(<App />);
