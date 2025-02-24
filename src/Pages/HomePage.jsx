import './HomePage.css'
import Filter from '../components/Filter'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'


function App() {
  

  return (
    <>
     <NavBar />
     <SearchBar />
     <div className="main">
        <Filter />
        <Card />
     </div>
    </>
  )
}

export default App