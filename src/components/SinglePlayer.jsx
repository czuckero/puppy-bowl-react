import { fetchSinglePlayer, deletePlayer } from "../API"
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

  async function removePlayer() {
    try {
      const response = await deletePlayer(id)
      const result = response.json();
      console.log(result);
    } catch (error) {
      setError(error.message)
    }
    navigate('/');
  }
  
  return (
    <div>
      {/* <h2>Single Player {id}</h2> */}
      {
        player && 
          <div>
            <h2>{player.name}</h2>
            <h3>ID: #{player.id}</h3>
            <p>Breed: {player.breed}</p>
            <img src={player.imageUrl}></img>
          </div>
      }
      <button onClick={() => removePlayer()}>Remove Player</button>
      <button onClick={() => navigate('/')}>Back to Players</button>
    </div>
  )
}