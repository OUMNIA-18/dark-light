import { useTheme } from "../utils/theme";

const Panel =({title,children})=>{
    const {theme}=useTheme();
    const className="panel-"+theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

export default Panel;