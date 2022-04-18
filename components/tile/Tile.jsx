import Styles from "./tile.module.css";

export default function Tile(props){

    const width = props.width + "vw";
   

    const color = props.color == 1 ? '#FFF' : '#000';
    Styles

    return (     
        <div style={{backgroundColor: color,
                    width: width,
                    height: width,
                    }}>
        </div>       
    )
}