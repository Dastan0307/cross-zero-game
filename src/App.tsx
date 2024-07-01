import { useState } from 'react'

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a]
		}
	}
	return null
}

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)

	const handleClick = (index: number) => {
		const newSquares = squares.slice()

		if (calculateWinner(newSquares) || newSquares[index]) {
			return
		}

		newSquares[index] = xIsNext ? 'X' : 'O'
		setSquares(newSquares)
		setXIsNext(!xIsNext)
	}

	const winner = calculateWinner(squares)
	let status
	if (winner) {
		status = 'Winner' + winner
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
	}

	const resetGame = () => {
		setSquares(Array(9).fill(null))
		setXIsNext(true)
	}

	return <>Hello</>
}

export default App
