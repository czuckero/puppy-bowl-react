import { fetchSinglePlayer } from "../API"
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const response = await fetchSinglePlayer(id);
        console.log(response.data.player);
        setPlayer(response.data.player)
      } catch (error) {
        setError(error.message)
      }
    }
    getSinglePlayer()
  }, [id]);
  
  return (
    <div>
      <h2>Single Player {id}</h2>
      {player && <h2>{player.name}</h2>}
      <button onClick={() => navigate('/')}>Back to Players</button>
    </div>
  )
}