import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import "../Firebase"

const App = () => {  
    
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header greeting1="Santiago"/>
                <Main/>
                <Footer type="footer"/> 
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App