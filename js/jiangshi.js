function jiangshi(game, x) {
    this.x = 1000;
    this.y = 200;
    this.game = game;
    // 运动的速度
    this.step = 20;
    this.sum = 1;
    this.zhuangtai = 0;
    //图片切换信号量
    this.steep = 1;
    // 倒地图的切换图的信号量
    this.b = 0;
}
jiangshi.prototype.update = function() {
    this.sum++;
    this.x -= this.step;
    if (this.sum >= 11) {
        this.sum = 1;
    }
    if (this.steep >= 10) {
        this.steep = 1;
        this.x -= this.step;
    }
};
jiangshi.prototype.rander = function() {
    this.game.ctx.drawImage(this.game.R['jiangsi' + this.sum], this.x, this.y);
};
jiangshi.prototype.rander1 = function() {
    this.game.ctx.drawImage(this.game.R['tou' + this.steep], this.x, this.y);
};
jiangshi.prototype.rander2 = function() {
    this.game.ctx.drawImage(this.game.R['dao' + this.b], this.x, this.y);
};
