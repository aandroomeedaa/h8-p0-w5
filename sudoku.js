"use strict"

class Sudoku {
  constructor(boardData) {
    this._boardData     = boardData
    this._board         = this.board()
    this._availCoord    = this.getcoord()
  }
  solve() {
    var unknown         = this._availCoord
    let board           = this._board
    // console.log(unknown,board)
    // console.log(board.length)
    for(let i = 0; i < unknown.length; i++){
      for(let j = 0; j <= board.length; j++){

        // unknown[i][0]   = 1
        let prediction  = false
        let checkVert   = this.checkvert(unknown[i][1][0],j)
        let checkhor    = this.checkhor(unknown[i][1][1],j)
        let checkpos    = this.checkgrid(unknown[i][1][0],unknown[i][1][1],j)
        if ( checkVert && checkhor && checkpos){
          // console.log('banyakaja')
          let xthis           = unknown[i][1][0]
          let ythis           = unknown[i][1][1]
          board[xthis][ythis] = j
          unknown[i][0]       = j
          prediction          = true

        }else if(!prediction && j === 9) {
          let xthis = unknown[i][1][0]
          let ythis = unknown[i][1][1]
          board[xthis][ythis] = 0
          i-=2
          console.log('banyak',i,j,unknown[1])
          j = unknown[i][0]-1
        }
      }
      console.log(board)
      console.clear()
      console.log(board)
      this.sleep(1000)
    }
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  // Returns a string representing the current state of the board
  board() {
    let counter = 0
    let result=[]
    for(let i = 0; i < 9; i ++){
      let row=[]
      for(let j = 0; j < 9; j ++){
        row.push(Number(this._boardData[counter]))
        counter++
      }
      result.push(row)
    }
    return result
  }

  getcoord(){
    let row=[]
    for(let i = 0; i < 9; i ++){
      for(let j = 0; j < 9; j ++){
        if(this._board[i][j]===0){
          row.push([this._board[i][j],[i,j]])
        }
      }
    }
    return row
  }

  checkvert (row,check) {
    var board=this._board
    for(let i = 0;i<9;i++){
      if(board[i][row]===check){
        return false
      }
    }
    return true
  }

  checkhor (col,check) {
    var board = this._board
    for(let i = 0;i<9;i++){
      if(board[col][i]===check){
        return false
      }
    }
    return true
  }

  checkgrid(row,col,check){
    let board  =  this._board
    let startX =  row - (row%3)
    let startY =  col - (col%3)
        for(let i = startX; i < startX+2;i++ ){
          for(let j = startY; j < startY+2;j++ ){
            if(board[i][j]===check){
              console.log('hi false')
              console.log(board)
              return false
            }
          }
        }
        console.log('hi false')
        console.log(board)
        return true
    }
}
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()
game.checkgrid(4,4,2)

// console.log(game._board)
// console.log(game.getcoord())
