import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Form from './Pages/Form'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />}/>
        <Route path="/FormValidation" element={<Form />}/>
      </Routes>
    </Router>
  );
}

export default App;