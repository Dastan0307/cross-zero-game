import { FC } from 'react'

interface GameInfoProps {
	status: boolean
	onReset: () => void;	
}

const GameInfo: FC<GameInfoProps> = ({ status, onReset }) => {
  return (
	<div className='game-info'>
		<div>{status}</div>

		<button onClick={onReset}></button>
	</div>
  )
}

export default GameInfo