import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single.jsx';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            {/* <Single /> */}
        </div>
    )
};

export default App;