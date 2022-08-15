import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"


const App = () => {  
    
    return (
        <BrowserRouter>
            <Header greeting1="Santiago"/>
            <Main/>
            <Footer type="footer"/> 
        </BrowserRouter>
    )
}

export default App