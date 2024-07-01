import { FC } from 'react'
import Square from './Square'

interface BoardProps {
	squares: Array<string | null>
    onClick: (index: number) => void
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
	const renderSquares = (i: number) => {
		return <Square value={squares[i]} onClick={() => onClick(i)} />
	}

	return (
		<div>
			<div>
				{renderSquares(0)}
				{renderSquares(1)}
				{renderSquares(2)}
			</div>
			<div>
				{renderSquares(3)}
				{renderSquares(4)}
				{renderSquares(5)}
			</div>
			<div>
				{renderSquares(6)}
				{renderSquares(7)}
				{renderSquares(8)}
			</div>
		</div>
	)
}

export default Board
