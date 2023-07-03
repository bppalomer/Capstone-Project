/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Index from './Pages/Index'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])


  return (
    <>
      {loading ? (
          <div className='loader'></div>
      ) : <Index />}
    </>

  )
}

export default App