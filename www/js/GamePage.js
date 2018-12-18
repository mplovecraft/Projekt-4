class GamePage extends Component {
  constructor() {
    super();
    this.player = 'red';
    this.addRoute('/game', 'Game');
    this.game = new Game();
    this.eventListeners();
    this.addEvents({
      'click .btn-outline-success': 'highScore'
    });
    this.buildHtml();
   
  }

  // TODO: Generate HTML with array
  // Make it more responsive (mobile looka too small. Should be easy)
  // Animation
  // Mouse over animation/shadow (don't know why it doesn't work)
  // remove white showing next to cell/token
  buildHtml(){
    Global.board=`<div class="col-7 container-fluid" id="gamepage">
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="0"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row="0"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="1"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row="1"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="2"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row="2"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="3"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row="3"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="4"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row="4"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="0" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="1" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="2" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="3" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="4" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="5" h-row="5"></div>
        </div>
      </div>
      <div class="coll">
        <div>
          <div class="coll empty" h-coll="6" h-row=""></div>
        </div>
      </div>
    </div>
  </div>
</div>`

}

  highScore() {
    location.href = '/hiScore'
  }
  eventListeners() {
    let that = this;
    let col;
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('empty')) {
        // columns and rows
        col = event.target.getAttribute('h-coll');
        let row = event.target.getAttribute('h-row');

        // find the last cell in the row. For now jquery
        let lastEmptyCell = findLastEmptyCell(col);

        // remove empty and add player color to div
        if (this.player == 'red') {
          lastEmptyCell[0].classList.remove('empty');
          lastEmptyCell[0].classList.add('red');
          this.player = 'yellow';
          document.getElementById("turn").innerHTML = localStorage.getItem('player-1-name') + "'s turn!";

        } else {
          lastEmptyCell[0].classList.remove('empty');
          lastEmptyCell[0].classList.add('yellow');
          this.player = 'red';
          document.getElementById("turn").innerHTML = localStorage.getItem('player-2-name') + "'s turn!";


        }
        
        Global.board = document.getElementById("gamepage").innerHTML;
        that.game.playerMove(col);
      }//if empty

      //jQuery
      function findLastEmptyCell(col) {
        const cells = $(`.coll[h-coll='${col}']`);
        for (let i = cells.length - 1; i >= 0; i--) {
          const $cell = $(cells[i]);
          if ($cell.hasClass('empty')) {
            return $cell;
          }
        }
        return null;
      }
    });//addevent click

  }//metoden eventlistener

}
