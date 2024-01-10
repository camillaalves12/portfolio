import { Header } from "./components/Header"
import './app.css'
import { Projects } from "./components/Projects/Projects"
function App() {

  return (
    <>
      <Header />
      <div className='divProjects'>
      <Projects />
      <Projects />
      <Projects />
      </div>
    </>
  )
}

export default App
