import { getData } from './services'

 const renderScore = async scores => {
 scores.forEach(({ user, score }) => {

 document.querySelector('.leaderboard').innerHTML = `
   <li>${user}  ${score}</li>
   `
		})
}

	
export const refreshData = async () => {
  let userDatas = await getData()
	userDatas.sort((playerOne, playerTwo) => playerTwo.score - playerOne.score)
	renderScore(userDatas)
}

