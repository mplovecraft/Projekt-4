class HiScorePage extends Component {

  constructor() {
    super();
    this.addRoute('/hiScore', 'HiScore', this);
  }

  //mount --> Creating components in the dom 
  mount() {
    const highscore = localStorage.getItem('highscore');
    this.highscoreArray = highscore ? JSON.parse(highscore) : [];
    // Sorting highscore depending on moves 
    this.highscoreArray = this.highscoreArray.slice().sort((a, b) => { return a.moves > b.moves ? 1 : -1; });
    // Setting timeout so the html has been loaded 
    setTimeout(() => {
      this.fillHighscore();
    }, 100);
  }

  fillHighscore() { 
    this.highscoreArray.forEach((highscore, i) => {
      const element = 
      `<tr>
        <td>${i+1}</td>
        <td>${highscore.name}</td>
        <td>${highscore.moves}</td>
    </tr>`
    $('#highScoreList').append(element)
    })
  }
}