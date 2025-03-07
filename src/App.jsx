import { useState } from 'react'
import Navbar from './components/navbar'
import Manager from './components/manager'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        <div className="absolute inset-0 -z-10 h-[] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] text-black"></div>
        
        <div className="flex-grow">
          <Manager />
        </div>
        
        {/* Footer will stay at the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default App
