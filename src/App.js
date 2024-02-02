
import './App.css';
import { useState } from "react";

function App() {


  let [val, setVal] = useState('');
  let [val1, setVal1] = useState('');
  let [ans, setAns] = useState('');

  const getdata = (value) => {
    setVal((prevVal) => prevVal + value);
  }

  const cal = (n) => {
    if (!val || !val1) {
      setAns('Error');
      return;
    }


    if (isNaN(val) || isNaN(val1)) {
      setAns('Error');
      return;
    }

    switch (n) {
      case 0:
        setAns(parseFloat(val) + parseFloat(val1));
        break;
      case 1:
        setAns(parseFloat(val) - parseFloat(val1));
        break;
      case 2:
        setAns(parseFloat(val) * parseFloat(val1));
        break;
      case 3:
        setAns(parseFloat(val) /  parseFloat(val1));
        break;
      default:
        setAns('Error');
    }
  }


  return (
    <div className="App">

      <div class="main_div">
        <div class="text">
          <input type='text' value={val} readOnly />
          {/* <input type='text' onChange={(e)=>{setval(e.target.value)}}></input><br/> */}
        </div>
        <div class="six">
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
          <input type="button" name="" value={"MR"}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"%"}></input>
          <input type="button" name="" value={"CE"}></input>
          <input type="button" name="" value={"C"}></input>
          <input type="button" name="" value={"Del"}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"1/x"}></input>
          <input type="button" name="" value={"x2"}></input>
          <input type="button" name="" value={"1/x"}></input>
          <input type="button" name="" value={"/"} onClick={()=>getdata('/')}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"7"} class="h7"onClick={()=>getdata(7)}></input>
          <input type="button" name="" value={"8"} onClick={()=>getdata(8)}></input>
          <input type="button" name="" value={"9"} onClick={()=>getdata(9)}></input>
          <input type="button" name="" value={"*"} onClick={()=>getdata('*')}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"4"} onClick={()=>getdata(4)}></input>
          <input type="button" name="" value={"5"} onClick={()=>getdata(5)}></input>
          <input type="button" name="" value={"6"} onClick={()=>getdata(6)}></input>
          <input type="button" name="" value={"-"} onClick={()=>getdata('-')}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"1"} onClick={()=>getdata(1)}></input>
          <input type="button" name="" value={"2"} onClick={()=>getdata(2)}></input>
          <input type="button" name="" value={"3"} onClick={()=>getdata(3)}></input>
          <input type="button" name="" value={"+"} onClick={()=>getdata('+')}></input>
        </div>
        <div class="btn">
          <input type="button" name="" value={"+"} onClick={()=>getdata('+')}></input>
          <input type="button" name="" value={"0"} onClick={()=>getdata(0)}></input>
          <input type="button" name="" value={"."} onClick={()=>getdata('.')}></input>
          <input type="button" name="" value={"="} onClick={() => cal()}></input>

        </div>

        
		</div>

        
    </div>
  );
}

export default App;



