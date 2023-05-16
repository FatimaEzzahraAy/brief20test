import "../Style/SoldeActuel.css";

function SoldeActuel({SRevenu,SDepense}) {
    var revenu = SRevenu.reduce((acc, val) => acc + + val.Mntant,0);
    var depense= SDepense.reduce((acc,val) => acc + + val.Mntant,0);
    var total = revenu - depense;

    return (
        <div className="SA-enfant">
                <div className="SA-E1">Revenu <div>{revenu} Dhs</div></div> 
                <div className="SA-E2">Dépense <div>{depense} Dhs</div></div>  
                <div className="SA-E3">Total <div>{total} Dhs</div></div>   
        </div>
    );
}
export default SoldeActuel;         