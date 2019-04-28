function zidan(game) {
    this.x = 320;
    this.game = game;
    this.y = 260;
    this.step = 20;
    game.zidanarr.push(this);
    this.move = true;
}
zidan.prototype.update = function() {
    if (this.move) {
        this.x += this.step;
    }
};
zidan.prototype.rander = function() {
    this.game.ctx.drawImage(this.game.R.zidan, this.x, this.y);
};
zidan.prototype.randers = function() {
    this.game.ctx.drawImage(this.game.R.wandou, this.x, this.y);
};
zidan.prototype.qusi = function() {
    for (var i = 0; i < this.game.zidanarr.length; i++) {
        if (this.game.zidanarr[i] == this) {
            this.game.zidanarr.splice(i, 1);
        }
    }
};
