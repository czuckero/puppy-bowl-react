const COHORT = "2401-FTB-ET-WEB-AM";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSinglePlayer(playerID) {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players/${playerID}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}