import { useState } from "react";
import "../Style/App.css";
import Operation from "./Operation";
import Menu from "./Menu";
import Categorie from "./Categorie";
import Historique from "./Historique";
import SoldeActuel from "./SoldeActuel";

function App() {
  const [Op,setOp] = useState("false");
  const [Cat,setCat] = useState("false");
  const [CatListe,setCatListe] = useState([]);
  const [TableOp,setTableOp] = useState([{}]);
  const [SRevenu,setSRevenu] = useState([]);
  const [SDepense,setSDepense] = useState([]);

  return (
    <html>
     <header className="App-header">
     < Menu setOp={setOp} setCat={setCat} />
      </header> 
     <main className="App-main">
     <div className="App-parent">
     <div className="App-enfant1">
      <SoldeActuel SRevenu={SRevenu} SDepense={SDepense}/>
      </div>
      {(Op === "true") &&
        <div className="App-enfant2">
          <Operation setOp={setOp} CatListe={CatListe} TableOp={TableOp} setTableOp={setTableOp} SRevenu={SRevenu} setSRevenu={setSRevenu} SDepense={SDepense} setSDepense={setSDepense}/>
      </div>}
      {(Op === "false") &&
        <div className="App-enfant2">
      </div>}
      {(Cat==="true") &&<div className="App-enfant3">
        <Categorie setCat={setCat} CatListe={CatListe} setCatListe={setCatListe} />
      </div>}
      {(Cat==="false") &&<div className="App-enfant3">
      </div>}
      </div>
      <div className="App-H"><Historique TableOp={TableOp}/></div>
     </main>
    </html>
  );
}

export default App;
