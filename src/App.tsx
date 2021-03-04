import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./Components/ContainerSrolll";
import Routes from "./config/router";
import Blog from "./Pages/Blog";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container >
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
