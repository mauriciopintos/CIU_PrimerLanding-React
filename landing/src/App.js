import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {

  return (
    <div className='Clase-De-App-Css'>
      <Header/>
      <Body/>
      <Footer
        redsocial={"@facebook"}
      />    
    </div>
  );
}

export default App;
