import React from "react"
import { BrowserRouter } from "react-router-dom"
// @ts-ignore
import MessengerCustomerChat from "react-messenger-customer-chat"
import Container from "./Components/ContainerSrolll"
import Routes from "./config/router"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Container>
                <Routes />
            </Container>
            <div>
                <MessengerCustomerChat
                    pageId={process.env.REACT_APP_FACEBOOK_PAGE_ID}
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    language="pt_PT"
                    themeColor="#124D9E"
                />
            </div>
        </BrowserRouter>
    )
}
export default App
