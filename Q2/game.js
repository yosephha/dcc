class Game{
    constructor(player1, player2){
        this.board = new Board();

        this.p1 = player1;
        this.p2 = player2;
        this.p1.mark = "X";
        this.p2.mark = "O";

        this.current = this.randStart();
        this.winner = null;

        this.startGame = this.startGame.bind(this);
        this.markPosition = this.markPosition.bind(this);
    }

    setInfo(info){
        document.getElementById("information").innerText = info;
    }

    startGame(){
        this.board.clearBoard();
        this.current = this.randStart();
        this.winner = null;

        this.setInfo("Starting player is " + this.current.name + " [" + this.current.mark +"]");
    }

    markPosition(pos){
        if (this.winner !== null) {
            this.setInfo("Game already over, restart for a new game");
            return;
        }

        if (this.board.emptyBox(pos.target)) {
            pos.target.innerText = this.current.mark;

            if (this.won(this.current.mark)) {
                this.setInfo("Nice move " + this.current.name + ", you WON!");
            } else if (this.board.isFull() && this.winner === null) {
                this.setInfo("Its a Tie!");
            } else {
                this.switchTurn();
            }
        } else {
            this.setInfo("Invalid move!");
        }
    }

    switchTurn() {
        if (this.current.mark === "X") {
            this.current = this.p2;
        } else {
            this.current = this.p1;
        }

        this.setInfo("Current player is " + this.current.name + " [" + this.current.mark +"]");
    }

    won(mark){
        let ct = this.board.checkTripple;

        if (ct(1, 2, 3, mark) || //rows
            ct(4, 5, 6, mark) ||
            ct(7, 8, 9, mark) ||

            ct(1, 4, 7, mark) || //cols
            ct(2, 5, 8, mark) ||
            ct(3, 6, 9, mark) ||

            ct(1, 5, 9, mark) || //diagonals
            ct(7, 5, 3, mark)) {

            if(mark === "X")
                this.winner = this.p1;
            else 
                this.winner = this.p2;

            return true
        }

        return false;
    }

    randStart() {
        let cur = this.p1;
        if (Math.random() < 0.5) {
            cur = this.p2;
        }

        return cur;
    }
}
