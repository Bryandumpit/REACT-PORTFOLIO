import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [navbar] = useState([
    {name:'About'}, {name:'Portfolio'}, {name:'Contact me'}, {name:'Resume'}])
  
  const [navbarSelected, setNavbarSelected] = useState(navbar[0]);
  
  return (
    <div>
      <Nav
        navbar={navbar}
        navbarSelected={navbarSelected}
        setNavbarSelected={setNavbarSelected}
      ></Nav>
      <main>
        <div>
          {navbarSelected.name==='About'? (
            <>
              <About></About>
            </>)
            :navbarSelected.name==='Portfolio'?(
              <>
              <Portfolio></Portfolio>
              </>)
            :navbarSelected.name==='Contact me'?(
              <>
              <ContactForm></ContactForm>
              </>)
            :(
              <>
              <Resume></Resume>
              </>
            )
            }
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
