import Board from '../../components/board/Board';
import { useState } from 'react';

export default function tabuleiro(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(1);

    return (
        <div className='container'
        onClick={() => setCount(count + 1)}>
        
        <Board 
            numberOfTiles={count}
        />
        </div>
    )    
    
}