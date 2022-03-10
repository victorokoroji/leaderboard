import { getData } from './services.js';

const renderScore = async (scores) => {
  scores.forEach(({ user, score }) => {
    document.querySelector('.leaderboard').innerHTML = `
   <li>${user}  ${score}</li>
   `;
  });
};

const refreshData = async () => {
  const userDatas = await getData();
  userDatas.sort((playerOne, playerTwo) => playerTwo.score - playerOne.score);
  renderScore(userDatas);
};

export default refreshData;