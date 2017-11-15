class Board{
    constructor(){
        this.checkTripple = this.checkTripple.bind(this);
    }

    emptyBox(target){
        return target.innerText === "";
    }

    getBoxVal(num){
        return document.getElementById("b" + num).innerText;
    }

    checkTripple(x, y, z, mark){
        if (this.getBoxVal(x) === mark && this.getBoxVal(y) === mark && this.getBoxVal(z) === mark) {
            return true;
        } else {
            return false;
        }
    }

    clearBoard(){
        for (let i = 1; i < 10; i++) {
            document.getElementById("b" + i).innerText = "";
        }
    }

    isFull(){
        for (let i = 1; i < 10; i++) {
            if(document.getElementById("b" + i).innerText === ""){
                return false;
            }
        }

        return true;
    }
}