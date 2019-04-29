function jiangshi(game) {
    this.x = 1000;
    this.y = 200;
    this.game = game;
    // 速度
    this.step = 20;
    // 图片切换的信号量
    this.sum = 1;
    this.b = 0;
    this.str = 1;
    // this.sudu = 0;
    // 0 正常
    // 1 掉头
    // 2 倒地
    // 3 吃植物
    this.zhuangtai = 0;
    //图片切换信号量
    this.steep = 1;

    // 僵尸的血量
    this.a = 4;
    this.bianhao = 0;
    // 把僵尸放入数组
    this.game.jsarr.push(this);
}
// 僵尸的更新方式
jiangshi.prototype.update = function() {
    this.sum++;
    this.steep++;
    this.b++;
    this.str++;
    // 图片的切换判断
    if (this.str >= 10) {
        this.str = 1;
        // this.x -= this.step;
    }
    // 如果僵尸的血量等于4 并且僵尸走到200米位置的时候。僵尸变为第三种状态
    if (this.a == 4 && this.x == 200) {
        this.zhuangtai = 3;
        this.game.audio3.load();
        this.game.audio3.play();
    } else {
        // 反之x继续运动
        this.x -= this.step;
        // console.log('this.a=' + this.a);
        // console.log('this.zhuangtai=' + this.zhuangtai);
    }
    // 图片信号量判断
    if (this.sum >= 11) {
        this.sum = 1;
    }
    // 图片信号量判断
    if (this.steep >= 10) {
        this.steep = 1;
        // this.x -= this.step;
    }
    // 图片信号量判断
    if (this.b > 7) {
        this.b = 7;
    }
    // 如果血量等于三的时候。状态等于掉头
    if (this.a == 3) {
        this.zhuangtai = 1;
    }
    // 如果血量等于2的时候。状态等于倒地
    if (this.a == 2) {
        this.zhuangtai = 2;
    }
    // 如果血量等于1的时候。清除僵尸
    if (this.a == 1) {
        this.qusi();
    }
    // 每个僵尸都要遍历子弹
    for (var i = 0; i < this.game.zidanarr.length; i++) {
        if (this.x < this.game.zidanarr[i].x && this.game.zidanarr[i].zang == false) {
            // 中弹了
            this.game.zidanarr[i].biansui();
            //血量进行减减
            this.a--;
        }
    }
};
// 僵尸的渲染方式
jiangshi.prototype.rander = function() {
    // 当状态等于0 的时候 僵尸渲染正常走路的图
    if (this.zhuangtai == 0) {
        this.game.ctx.drawImage(this.game.R['jiangsi' + this.sum], this.x, this.y);
        // 当状态等于1的时候，渲染僵尸掉头的图
    } else if (this.zhuangtai == 1) {
        this.game.ctx.drawImage(this.game.R['tou' + this.steep], this.x, this.y);
        // 当状态等于2 的时候。渲染僵尸倒地的图
    } else if (this.zhuangtai == 2) {
        this.game.ctx.drawImage(this.game.R['dao' + this.b], this.x, this.y);
        // 当状态等于3的时候 渲染僵尸吃的图
        // console.log(this.zhuangtai);
    } else if (this.zhuangtai == 3) {
        this.game.ctx.drawImage(this.game.R['chi' + this.str], this.x, this.y);
    }
};
// 僵尸去死的方法
jiangshi.prototype.qusi = function() {
    for (var i = 0; i < this.game.jsarr.length; i++) {
        if (this.game.jsarr[i] == this) {
            this.game.jsarr.splice(i, 1);
        }
    }
};
