function game() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.audio = document.querySelector('audio');
    // this.audio.load();
    // this.audio.play();
    // this.zhuangtai = flase;s
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
        dao7: 'dao7.png'
    };
    // 统计里边所有的图片的数量
    var zutu = Object.keys(this.R).length;
    // 计数器
    var self = this;
    var sum = 0;
    // 遍历数组的项 加载里边的图片
    for (k in this.R) {
        (function(k) {
            // 实例化图片对象
            var img = new Image();
            // 设置图片路劲
            img.src = 'imges1/' + self.R[k];
            img.onload = function() {
                self.R[k] = img;
                sum++;
                if (sum == zutu) {
                    self.start();
                }
            };
        })(k);
    }
}
game.prototype.start = function() {
    var self = this;
    // this.audio.play();
    this.f = 0;
    this.plant = new plant(this);
    this.zidanarr = [];
    new zidan(this);
    this.jiangshi = new jiangshi(this);
    var a = setInterval(() => {
        self.ctx.clearRect(0, 0, 1400, 600);
        self.f++;
        self.ctx.fillStyle = 'pink';
        self.ctx.fillText(self.f, 20, 20);
        self.plant.update();
        self.plant.rander();
        self.jiangshi.update();
        self.jiangshi.rander();
        if (self.f % 5 == 0) {
            new zidan(this, 320, 260);
        }
        // 遍历子弹数组
        for (var i = 0; i < self.zidanarr.length; i++) {
            self.zidanarr[i].update();
            self.zidanarr[i] && self.zidanarr[i].rander();
        }
        // console.log(self.jiangshi.x);
        if (self.jiangshi.x == 80) {
            // self.canvas.style.backgroundImage = url(./imges1/naozi.png);
            // alert('僵尸吃掉了你的脑子');
            clearInterval(a);
        }
        // console.log(self.zidanarr);
        for (var i = 0; i < self.zidanarr.length; i++) {
            if (self.zidanarr[i].x == self.jiangshi.x) {
                self.zidanarr[i].sum++;
                console.log(self.zidanarr[i].sum);
                if (self.zidanarr[i].sum == 0) {
                    console.log(self.jiangshi);
                    self.jiangshi.rander();
                } else if (self.zidanarr[i].sum == 2) {
                    self.jiangshi.rander1();
                }
            }
        }
    }, 600);
};
