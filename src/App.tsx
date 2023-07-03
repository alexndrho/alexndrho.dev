import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@components/Header';
import About from '@components/About';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import '@styles/App.css';

const App = () => {
  return (
    <>
      <ToastContainer />

      <Header />

      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
