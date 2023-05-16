import "../Style/Menu.css";

function Menu({setOp,setCat}) {
    return (
        <nav className="Menu-nav">
            <button onClick={()=>setOp("true")}> + Operation</button>
            <button onClick={()=>setCat("true")}> + Catégorie</button>
        </nav>
    ); 
}
export default Menu;