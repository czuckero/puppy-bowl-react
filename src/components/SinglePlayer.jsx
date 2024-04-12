import { fetchSinglePlayer } from "../API"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePlayer() {
  const [player, setPlayer] = useState(null)
  const [error, setError] = useState(null)
  const { id } = useParams()

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
      
    </div>
  )
}