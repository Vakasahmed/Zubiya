import React, { useState } from "react";
import z3 from '../Images/z3.jpeg';
import z1 from '../Images/z1.jpeg';
import z2 from '../Images/z2.jpeg';

function Main() {
  const [data, setData] = useState("");
  const [dash, setDash] = useState("");
//   const [will, setWill] = useState("");

  const handle = () =>{
    setDash(<div className="p">
//       <p> tum shayad mujhe do din se janti ho but me tumhe kai salo se janta hun...tum bhot time se mere dil❤️ ki gallery me ho</p>
      <img src={z1} alt='z1' />
//       <p>har mahine shopping bhi karwauga maanjao plz</p>
      <img src={z2} alt='z2' />
    </div>);
  }

  const zubi = () => {
    setData(<div className="p">
      <p>The most beautiful person in the galaxy🌍  not only from the face but also from the heart❤️</p>
      <img className="z3" src={z3} alt='z3'/>
      {alert("HEY ZUBI💃 GOOGLE IS ALSO WAITING FOR YOU")}
    </div>
    );
  }

//   const love = () =>{
//     setWill(
//     <div>
//         <p>will you marry❤️ me?</p>
//         <p>(Take your time and then answer me plz)</p>
//         <p>I know this is very awkward</p>
//         <p>(Agar tumhara answer nhi hai...to mujhko msg kardo & block kardo fir me tumhe kabhi msg ya call ya contact nhi karuga...past samajh kar aage badh jauga)</p>
//     </div>
//     )
//   }
    return (
      <div className="main">
        <div>
          <h2>Welcome Zubi</h2>
        </div>
        <div>
          <button onClick={zubi}>Click here</button>
        </div>
        <div>{data}</div>
        <div>
          <button onClick={handle}>Click here</button>
        </div>
        <div>{dash}</div>
//         <div>
//           <button onClick={love}>Click here</button>
//           <h2>{will}</h2>
//         </div>
      </div>
    );
};
export default Main;
