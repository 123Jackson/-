// 植物类
function plant(game) {
    this.x = 260;
    this.y = 260;
    // 图片的信号量
    this.game = game;
    this.sum = 1;
    // 植物的血量
    this.xie = 1000;
    //击杀量
    // 因为只有一个植物 所以在这里定义变量的时候 变量不会受到影响
    this.killsum = 0;
}
// 植物的更新方式
plant.prototype.update = function() {
    this.sum++;
    if (this.sum >= 15) {
        this.sum = 1;
    }
};
// 植物的渲染方式
plant.prototype.rander = function() {
    this.game.ctx.drawImage(this.game.R['plant' + this.sum], this.x, this.y);
};
