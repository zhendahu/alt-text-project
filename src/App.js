
import './App.css';
import BlockList from './components/BlockList.js';


function App() {
  return (
   <div>
     <h1 className = "header-class">ALT-TEXT AND ACCESSIBILITY</h1>
     <h2 className = "header2-class">
       Zhenda Hu and Anakin Trotter
     </h2>
    <div className = "block">
      <BlockList />
    </div>
   </div>
  );
}

export default App;
