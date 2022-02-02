import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nft from './components/Nft';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
