function zidan(game) {
    this.x = 320;
    this.game = game;
    this.y = 260;
    this.step = 20;
    game.zidanarr.push(this);
    // 1表示正常子弹
    // 2表示碎裂的
    this.type = 1;
    // 开始碎的帧编号
    this.startsui = 0;
    // 自己有没有脏
    this.zang = false;
}
// 子弹的更新方式
zidan.prototype.update = function() {
    this.x += this.step;
    if (this.type == 2) {
        // console.log(this.game.f - this.startsui);
        // 判断子弹状态保持多少帧
        if (this.game.f - this.startsui > 1) {
            // 然后在消失
            this.qusi();
        }
    }
};
// 子弹的渲染方式
zidan.prototype.rander = function() {
    // 当是第一种类型的时候.渲染子弹图
    if (this.type == 1) {
        this.game.ctx.drawImage(this.game.R.zidan, this.x, this.y);
        // 当是第二种类型的时候,渲染子弹碎的图
    } else if (this.type == 2) {
        this.game.ctx.drawImage(this.game.R.wandou, this.x, this.y);
    }
};
// 子弹变碎
zidan.prototype.biansui = function() {
    if (this.zang != true) {
        this.type = 2;
        // 它的变碎等于帧率
        this.startsui = this.game.f;
        // 变脏
        this.zang = true;
    }
};
// 子弹去死
zidan.prototype.qusi = function() {
    for (var i = 0; i < this.game.zidanarr.length; i++) {
        if (this.game.zidanarr[i] == this) {
            this.game.zidanarr.splice(i, 1);
        }
    }
};
