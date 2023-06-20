/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    return (
        <>
        <Outlet />

        
        </>
    )
}

export default Home;