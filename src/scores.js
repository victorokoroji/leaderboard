const scores = `
  <li>Name 100</li>
  <li>Name 20</li>
  <li>Name 50</li>
  <li>Name 78</li>
  <li>Name 125</li>
  <li>Name 77</li>
  <li>Name 42</li>
`;

const leaderBoard = () => {
  document.querySelector('.leaderboard').innerHTML = scores;
};

export default leaderBoard;