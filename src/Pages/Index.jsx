import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Login from './Login'
import NotFound from './NotFound'



function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;