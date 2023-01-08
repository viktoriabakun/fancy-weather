import React from "react";
import { FC } from "react";

import { createRoot } from "react-dom/client";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const App: FC = () => {
  const name = "Viktoryia";

  return (
    <div>
      <Title>Styled component title</Title>
      hello there,
      {name}
    </div>
  );
};

const root = document.querySelector("#root") as Element;
createRoot(root).render(<App />);
