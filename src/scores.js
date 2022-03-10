import { getData } from './services'

 const renderScore = async scores => {
	document.querySelector('.leaderboard').innerHTML = scores
		.map(({ user, score }) => {
			return `
   <li>${user}  ${score}</li>
   `
		})
		.join('')
}


export const refreshData = async () => {
  let userDatas = await getData()
	userDatas.sort((playerOne, playerTwo) => playerTwo.score - playerOne.score)
	renderScore(userDatas)
}

