import React from "react"
import { BrowserRouter } from "react-router-dom"
import Container from "./Components/ContainerSrolll"
import Routes from "./config/router"
import { GlobalStyle } from "./styles/GlobalStyle"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Container >
				<Routes /> 
			</Container>
		</BrowserRouter>
	)
}

export default App
