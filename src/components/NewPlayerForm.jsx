import { useState } from 'react'
import { addNewPlayer } from '../API'

export default function NewPlayerForm() {
  const [playerName, setPlayerName] = useState('')
  const [breed, setBreed] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      name: playerName,
      breed: breed,
      imageUrl: imageUrl
    };

    try {
      const response = await addNewPlayer(formData)
      const result = response.json()
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className="new-player-form-container">
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name:
          <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} /><br>
          </br>
        </label>
        <label>
          Breed:
          <input value={breed} onChange={(e) => setBreed(e.target.value)} /><br>
          </br>
        </label>
        <label>
          Image URL:
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /><br>
          </br>
        </label>
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}