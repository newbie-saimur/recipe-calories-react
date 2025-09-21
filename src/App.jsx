import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import RecipeContainer from './components/RecipeContainer/RecipeContainer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <RecipeContainer />
      <ToastContainer />
    </>
  )
}

export default App
 