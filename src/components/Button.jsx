import { useTheme } from "../utils/theme";

const Button =({label})=>{
    const {theme}=useTheme();
    const className="button-"+theme;
    return(
       <button className={className}>
        {label}
       </button>
    );
}

export default Button;