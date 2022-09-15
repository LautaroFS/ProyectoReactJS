import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import "../Firebase"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {  
    
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header greeting1="Santiago"/>
                <Main/>
                <ToastContainer/>
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App