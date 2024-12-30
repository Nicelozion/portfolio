import './App.css'
import Hello from './components/Hello/Hello.jsx'

function App() {

  return (
    <>
      <div className="navbar">
          <div className="navbar-links">
            <ul>
              <li href="#">Обо мне</li>
              <li href="#">Хакатоны</li>
              <li href="#">Планы</li>
            </ul>
          </div>
      </div>

      <Hello />
    </>
  )
}

export default App
