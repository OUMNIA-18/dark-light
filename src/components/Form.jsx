import { useTheme } from "../utils/theme";
import Panel from "./panel";
import Button from "./Button";

const Form =()=>{
    const{theme,setTheme} =useTheme();
    return (
        <>
         <Panel title="Bienvenue">
            <Button label="S'inscrire"/>
            <Button label="Se deconnecter"/>
        </Panel>
        <label>
            <input type="checkbox" checked={theme === "dark"} onChange={(e)=>setTheme(e.target.checked ? "dark":"light")}/> 
            Utiliser le mode sombre
        </label>
        </>
       
    )
}

export default Form;