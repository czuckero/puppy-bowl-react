import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from 'react-router-dom'

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllPlayers() {
      try {
        const response = await fetchAllPlayers();
        console.log(response.data.players);
        setPlayers(response.data.players);
      } catch (error) {
        setError(error.message)
      }
    }
    getAllPlayers();
  }, []);

  return (
    <>
      <div>
        Search:
        <input></input>
      </div>
      {players.map((player) => {
        return (
          <h3 onClick={() => navigate(`/players/${player.id}`)} key={player.id}>{player.name}</h3>
        )
      })}
    </>
  )
}