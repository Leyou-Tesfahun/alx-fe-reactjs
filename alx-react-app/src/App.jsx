// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
    return (
        <>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

export default App;
