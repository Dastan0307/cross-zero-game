const Board = ({ squares, onClick }) => {
	const renderSquares = i => {
		return <Square value={squares[i]} onClick={() => onClick(i)} />
	}

	return <div>
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
}

export default Board
