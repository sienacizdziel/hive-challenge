import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div style={{margin: "50px"}}>
      <p>single dropdown</p>
      <Dropdown 
        label="favorite food" 
        options={["hot pot", "pizza", "ramen", "tacos", "spaghetti", "fried rice", "salad"]}
        onSelectClick={(val) => { console.log(val) }}
      />

      <div style={{height: "150px"}} />


      <p>multiple dropdown</p>
      <Dropdown 
        label="vacation list" 
        options={["tokyo", "sydney", "cape town", "rio de janeiro", "london", "new york city"]}
        multiple={true}
        onSelectClick={(val) => { console.log(val) }}
      />
    </div>
  );
}

export default App;
