const game = {
    lives: 3,
    coins: 0,

    get points() {
        return this.coins * 10
    },

    playerDies() {
        if(this.lives > 0) {
            return this.lives--
        }
    },

    newGame() {
        this.lives = 3
        this.coins = 0
    }
}

console.log(`Lives: ${game.lives}`);
console.log(`Coins: ${game.coins}`);
console.log(`Points: ${game.points}`);

game.coins = 2
console.log(`points: ${game.points}`);