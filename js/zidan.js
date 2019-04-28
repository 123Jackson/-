function zidan(game) {
    this.x = 320;
    this.game = game;
    this.y = 260;
    this.step = 20;
    game.zidanarr.push(this);
    // 子弹两种状态
    this.zhuangtai = 0;
    // 子弹的数量
    this.sum = 0;
}
zidan.prototype.update = function() {
    this.x += this.step;
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
