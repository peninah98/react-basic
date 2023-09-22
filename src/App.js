import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Song from './components/Song';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvents';
import ClassEvent from './components/ClassEvent';
import FunctionalComponent from './components/FunctionaCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     {/* <Hello/>
     <Message/>
     <Profile name = 'Olivier Karera' lastname = 'Gasangwa'>
      <h1>This are the children of this man</h1>
      <p>I love God</p>
      <p>Rwanda is a country of thousands hills</p>
     </Profile>
     <Song playList = "I love rock musics" favourites = "Gospel"/> */}
     {/* 
     {/* <Profile name ="Penine" lastname = 'Ngizwenayo'></Profile>
     <Resume category = 'Rwanga'></Resume>
     <FunctionEvent></FunctionEvent>
     <ClassEvent/>
     <FunctionalComponent/> */}
     {/* <Counter></Counter>
     <FunctionalComponent/> */}

     <ConditionalComponent/>
     <Product/>
   
    </div>
  );
}

export default App;
