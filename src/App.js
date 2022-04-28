import './App.css';
import Navbar  from './Components/Navbar';
import TextForm from './Components/TextFrom'

function App() {
  return (
    <>
     <Navbar  title="TextUtiles" homeTitle="Home_Page" aboutTitle="About_Us" />
     <div className='container'>
      <TextForm heading="Enter text here.."/>
     </div>
 
    </>
  );
}

export default App;
