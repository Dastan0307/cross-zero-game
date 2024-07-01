import { FC } from 'react'

interface SquareProps {
	value: string | null;
	onClick: () => void;
  }

const Square: FC<SquareProps> = ({ value, onClick }) => {
	return (
		<button onClick={onClick}>
			{value}
		</button>
	)
}

export default Square
