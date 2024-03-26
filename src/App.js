import logo from './logo.svg';
import './App.css';
import Main from './components/page';
import Page from './components/main';
import About from './components/about';
import Domain from './components/domain';
import Diff from './components/diff';
import Footer from './components/footer';

const App = () =>{
  return (
   <>
   <Main/>
   <Page/>
   <About/>
   <Domain/>
   <Diff/>
   <Footer/>
   </>
  );
}

export default App;
