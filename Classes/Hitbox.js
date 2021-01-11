class Hitbox {
    constructor (x,y,w,h, parent) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.width = h;
        this.parent = parent;

        this.type = 'hitBox';
    }
    
    update = function () {
        this.x = this.parent.x;
        this.y = this.parent.y;
    }
    handleContact = function (entity) {
        this.parent.contact(entity);
    }
}