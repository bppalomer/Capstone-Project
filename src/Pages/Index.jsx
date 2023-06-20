import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import About from './About'
<<<<<<< HEAD
import Login from './Login'
=======
import Apply from './Apply'
import ContactUs from './ContactUs'
>>>>>>> main
import NotFound from './NotFound'



function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
<<<<<<< HEAD
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/aboutus" element={<About />} />
=======
                    <Route path="/About" element={<About />} />
                    <Route path="/Apply" element={<Apply />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
>>>>>>> main
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;