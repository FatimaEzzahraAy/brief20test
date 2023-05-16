import { useState } from "react";
import "../Style/Operation.css";

function Operation({setOp,CatListe,TableOp,setTableOp,SRevenu,setSRevenu,SDepense,setSDepense}) {
  const [Nom,setNom] = useState('');
  const [Montant,SetMontant] = useState(0);
  const [Type,SetType] = useState('');
  const [Desc,SetDesc] = useState('');
  const [Ctg,SetCtg] = useState('');
  const [DateOp,SetDateOp] = useState('');

  function Valider(e) {
    e.preventDefault();
    setTableOp([...TableOp,{
      nom : Nom,
      montant : Montant,
      type : Type,
      desc : Desc,
      ctg : Ctg,
      dateOp : DateOp
    }])
    if (Type === "Revenu") {
      setSRevenu([...SRevenu,{Mntant : Montant}])
    } else if(Type === "Dépense") {
      setSDepense([...SDepense,{Mntant : Montant}])
    }  
  }


  return (
        <form className="Operation-form">
            <input type="text" placeholder="Nom" onChange={(e)=>setNom(e.target.value)} />
            <input type="number" placeholder="Montant" onChange={(e)=>SetMontant(e.target.value)} />
            <select onChange={(e)=>SetType(e.target.value)}>
                <option>Type</option>
                <option>Dépense</option>
                <option>Revenu</option>
            </select>
            <textarea placeholder="Description" onChange={(e)=>SetDesc(e.target.value)} />
            <select onChange={(e)=>SetCtg(e.target.value)}>
                <option>Catégorie</option>
                <option>Alimentation</option>
                <option>Logement</option>
                <option>Transport</option>
                <option>Loisirs</option>
                {CatListe.map((Categ)=> <option>{Categ.Categorie}</option>)}
            </select>
            <input type="date" placeholder="Date" onChange={(e)=>SetDateOp(e.target.value)} />
            <div className="Operation-divBtn">
              <button onClick={Valider}>Valider</button>
              <button onClick={()=>(setOp("false"))}>Fermer</button>
            </div>
        </form>
    
  );
}

export default Operation;