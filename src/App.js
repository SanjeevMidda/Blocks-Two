import Block from './components/Block';
import './index.css';

function App() {

  return (
    <div className="App" >
      <Block width={100} height={100} title="A" color="linear-gradient(green, blue)"/>
      <Block width={200} height={200} title="B" color="linear-gradient(pink, yellow)"/>
      <Block width={300} height={300} title="C" color="linear-gradient(purple, grey)"/>
      <Block width={400} height={400} title="D" color="linear-gradient(orange, red)"/>
      {/* <Block width={500} height={500} className={status? "block" : "moveBlock"}/> */}
    </div>
  );
}

export default App;
