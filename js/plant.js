// 植物类
function plant(game) {
    this.x = 260;
    this.y = 260;
    // 图片的信号量
    this.game = game;
    this.sum = 1;
}
plant.prototype.update = function() {
    this.sum++;
    if (this.sum >= 15) {
        this.sum = 1;
    }
};
plant.prototype.rander = function() {
    this.game.ctx.drawImage(this.game.R['plant' + this.sum], this.x, this.y);
};
