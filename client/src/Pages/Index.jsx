import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Login from './Login'
import Apply from './Apply'
import ContactUs from './ContactUs'
import NotFound from './NotFound'
import Recruiter from "./Recruiter"



function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Apply" element={<Apply />} />
                    <Route path="/Recruiter" element={<Recruiter/>} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;