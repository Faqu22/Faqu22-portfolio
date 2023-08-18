import './App.css';
import Header from "./components/Header";
import Home from "./components/Home.jsx";


export default function App() {
    return (
        <div className='bg-custom-color min-h-screen'>
            <Header />
            <Home />
        </div>
    )
  }
