import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from 'react-router-dom'

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState("")
  console.log(searchParams);

  async function getAllPlayers() {
    try {
      const response = await fetchAllPlayers();
      console.log(response.data.players);
      setPlayers(response.data.players);
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParams 
    ? players.filter((player) => player.name.toLowerCase().includes(searchParams)) 
    : players;

  return (
    <>
      <div className="all-players-container">
        <h3>Currently Registered Players</h3>
          <label>
            Search:
            <input 
              type="text" 
              placeholder="Search" 
              onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
            />
          </label>
      {playersToDisplay.map((player) => {
        return (
          <button onClick={() => navigate(`/players/${player.id}`)} key={player.id}>{player.name}</button>
        )
      })}
      </div>

    </>
  )
}