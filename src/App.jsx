import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './components/Movies'
import NavigationBar from './components/NavigationBar'
import { Route, Router ,Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavigationBar/>

      <Routes>
        <Route path="/films" element={<Movies/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App
