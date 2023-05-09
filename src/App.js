import './App.css';
import {Footer} from "./components";
import {Header} from "./components";
import {AddTask} from "./components";



function App() {
  return (
    <div className="App">
      
      <Header/>
      <AddTask/>
      <Footer/>
    </div>
  );
}

export default App;
