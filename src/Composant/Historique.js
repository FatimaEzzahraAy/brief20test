import "../Style/Historique.css";

function Historique({TableOp}) {

    return (
    <table className="tableau">
        <thead>
            <th>Nom</th>
            <th>Montant</th>
            <th>Type</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Date</th>
        </thead>
        <tbody>
        {TableOp.map((Op)=>
        (Op.type==="Dépense")?
        (<tr style={{background:"rgba(211, 69, 69, 0.775)"}} >
        <td >{Op.nom}</td>
        <td>{Op.montant}</td>
        <td>{Op.type}</td>
        <td>{Op.desc}</td>
        <td>{Op.ctg}</td>
        <td>{Op.dateOp}</td>
        </tr>)
        :
        (<tr style={{background:"rgba(1, 49, 1, 0.745)"}} >
        <td>{Op.nom}</td>
        <td>{Op.montant}</td>
        <td>{Op.type}</td>
        <td>{Op.desc}</td>
        <td>{Op.ctg}</td>
        <td>{Op.dateOp}</td>
        </tr>)
        )}
        </tbody>
    </table>);
}
export default Historique;