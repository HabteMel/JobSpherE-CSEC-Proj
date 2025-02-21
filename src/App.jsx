import './App.css'
import Filter from './components/Filter'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {
  

  return (
    <>
     <NavBar />
     <SearchBar />
     <div className="main">
        <Filter />
     </div>
    </>
  )
}

export default App
