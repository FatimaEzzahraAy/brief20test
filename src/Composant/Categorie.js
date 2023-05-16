import { useState } from "react";
import "../Style/Categorie.css";

function Categorie({setCat,CatListe,setCatListe}) {

    const [NomCat,setNomCat] = useState("");

    function Ajouter(e) {

        e.preventDefault();
        if (NomCat != "") {
            setCatListe([...CatListe,{Categorie : NomCat}]) 
            document.getElementById("formCat").reset();
        }
    }
    return (
        <form className="Cat-form" id="formCat">
            <input type="text"  placeholder="Catégorie" onChange={(e)=>setNomCat(e.target.value)}/>
            <button onClick={Ajouter}>Ajouter</button>
            {<button onClick={()=>setCat("false")}>Fermer</button>  }
        </form>
    );
}
export default Categorie;
