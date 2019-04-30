function Game() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.audio1 = document.getElementById('audio1');
    this.audio2 = document.getElementById('audio2');
    this.audio3 = document.getElementById('audio3');
    this.audio4 = document.getElementById('audio4');
    // console.log(this.audio2);
    // console.log(this.audio2);
    this.audio1.load();
    this.audio1.play();
    // this.zhuangtai = flase;
    this.R = {
        plant1: '01.png',
        plant2: '02.png',
        plant3: '03.png',
        plant4: '04.png',
        plant5: '05.png',
        plant6: '06.png',
        plant7: '07.png',
        plant8: '08.png',
        plant9: '09.png',
        plant10: '010.png',
        plant11: '011.png',
        plant12: '012.png',
        plant13: '013.png',
        plant14: '014.png',
        plant15: '015.png',
        zidan: 'zidan.png',
        jiangsi1: '1.png',
        jiangsi2: '2.png',
        jiangsi3: '3.png',
        jiangsi4: '4.png',
        jiangsi5: '5.png',
        jiangsi6: '6.png',
        jiangsi7: '7.png',
        jiangsi8: '8.png',
        jiangsi9: '9.png',
        jiangsi10: '10.png',
        jiangsi11: '11.png',
        wandou: 'dou.gif',
        tou1: 'tou1.png',
        tou2: 'tou2.png',
        tou3: 'tou3.png',
        tou4: 'tou4.png',
        tou5: 'tou5.png',
        tou6: 'tou6.png',
        tou7: 'tou7.png',
        tou8: 'tou8.png',
        tou9: 'tou9.png',
        tou10: 'tou10.png',
        dao0: 'dao0.png',
        dao1: 'dao1.png',
        dao2: 'dao2.png',
        dao3: 'dao3.png',
        dao4: 'dao4.png',
        dao5: 'dao5.png',
        dao6: 'dao6.png',
        dao7: 'dao7.png',
        chi1: 'chi1.png',
        chi2: 'chi2.png',
        chi3: 'chi3.png',
        chi4: 'chi4.png',
        chi5: 'chi5.png',
        chi6: 'chi6.png',
        chi7: 'chi7.png',
        chi8: 'chi8.png',
        chi9: 'chi9.png',
        chi10: 'chi10.png'
    };
    // 统计里边所有的图片的数量
    var zutu = Object.keys(this.R).length;
    // 计数器
    var self = this;
    var count = 0;
    // 遍历数组的项 加载里边的图片
    for (k in this.R) {
        (function(k) {
            // 实例化图片对象
            var img = new Image();
            // 设置图片路劲
            img.src = 'imges1/' + self.R[k];
            img.onload = function() {
                self.R[k] = img;
                count++;
                if (count == zutu) {
                    self.start();
                    self.event();
                }
            };
        })(k);
    }
}
Game.prototype.start = function() {
    var self = this;
    // this.audio.play();
    this.f = 0;
    this.plant = new plant(this);
    this.zidanarr = [];
    this.jsarr = [];

    // new zidan(this, 320, 260);
    var a = setInterval(() => {
        self.ctx.clearRect(0, 0, 1400, 600);
        self.f++;
        self.ctx.fillStyle = 'black';
        self.ctx.fillText(self.f, 20, 20);
        self.plant.update();
        // console.log('self' + self.f);
        // 如果帧率<=80的时候 植物渲染，反之清除定时器 游戏结束

        // if (self.f % 5 == 0) {
        //     new zidan(self, 320, 260);
        // }
        // 每十帧产生一个僵尸
        if (self.f % 10 == 0) {
            new jiangshi(self);
        }
        // 遍历子弹数组，子弹进行更新，渲染
        for (var i = 0; i < self.zidanarr.length; i++) {
            self.zidanarr[i].update();
            self.zidanarr[i] && self.zidanarr[i].rander();
        }
        // 遍历僵尸的数组 僵尸进行更细 渲染
        for (var i = 0; i < self.jsarr.length; i++) {
            self.jsarr[i].update();
            self.jsarr[i] && self.jsarr[i].rander();
            if (!(self.jsarr[i].x - self.plant.x <= 1)) {
                if (self.plant.xie > 0) {
                    self.plant.rander();
                }
                if (self.plant.killsum == 5) {
                    clearInterval(a);
                    $('.box').slideDown();
                    // $('div:eq(1)').slideup();
                }
            } else {
                if (self.plant.xie < 0) {
                    clearInterval(a);
                    $('.box1').slideDown();
                }
                // clearInterval(a);
            }
        }
        // if (!(self.plant.x == self.jiangshi.x)) {
        //     self.plant.rander();
        //     self.plant.xie -= 2;
        // } else {
        //     if (self.plant.xie == 0) {
        //         clearInterval(a);
        //         $('div').slideDown();
        //     }
        //     // audio.pause();
        //     self.audio2.load();
        //     self.audio2.play();
        //     self.audio1.pause();
        //     // clearInterval(a);
        // }
    }, 300);
};
// 鼠标按键事件 空格键发射子弹
Game.prototype.event = function(e) {
    // 备份this；
    var self = this;
    document.onkeydown = function(e) {
        if (e.keyCode == 32) {
            new zidan(self, 320, 260);
            self.audio4.load();
            self.audio4.play();
        }
    };
};
// console.log(this.event());
