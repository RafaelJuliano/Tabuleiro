import Tile from "../tile/Tile"
import Styles from "./board.module.css"

export default function Board(props){

    const numberOfTiles = props.numberOfTiles;
    const tiles = [];
    const width = 40 / numberOfTiles;

    for(let h = 0; h < numberOfTiles; h++){
        for(let v = 0; v < numberOfTiles; v++){
            tiles.push(<Tile color={(h % 2) + (v % 2)} width={width}/>);
        }               
    }


    return (
        <div className={Styles.board}
            style={{
                minWidth: '40vw',
                width: '40vw',
            }}>
            {tiles}
        </div>
    )
}