import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HeadTail from './pages/HeadTail'
import Layout from './components/layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="head-tail" element={<HeadTail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
