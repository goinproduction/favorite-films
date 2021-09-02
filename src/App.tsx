import './App.css';
import Navbar from './components/Navbar';
import ProgressContextProvider from './contexts/ProgressContext';
function App() {
    return (
        <ProgressContextProvider>
            <Navbar />
        </ProgressContextProvider>
    );
}

export default App;
