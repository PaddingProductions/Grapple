
const MapCollision = (Initx,Inity,w,h) => {

    let floorx = Math.floor(Initx/50);
    let floory = Math.floor(Inity/50);

    let ceilx = Math.ceil(Initx/50);
    let ceily = Math.ceil(Inity/50);

    for (let y = 0; y < h/Game.block_size; y++) {
        for (let x = 0; x < w/Game.block_size; x++) {
            
            // assuming 0 is the only passable block
            if (Map.map[floory +y][floorx +x]) return true;
            if (Map.map[ceily +y][floorx +x]) return true;
            if (Map.map[floory +y][ceilx +x]) return true;
            if (Map.map[ceily +y][ceilx +x]) return true;
        }
    }
    return false;
}









const TemporaryEntityCollision = function (entity1, entity2) {
    const disX = Math.abs(entity1.x - entity2.x);
    const disY = Math.abs(entity1.y - entity2.y);

    if (disX > Math.min(entity1.w*50, entity2.w*50)) return false;
    if (disY > Math.min(entity1.h*50, entity2.h*50)) return false;

    return true;
    
}











const PositionUpdate = function(O) { 


    O.veloy ++;
    O.y += O.veloy;
    
    if (MapCollision(O.x, O.y + O.veloy+1, O.width, O.height)) {
        const negative = (O.veloy > 0) - (O.veloy < 0);

        if (negative == 1)       O.y = Math.floor((O.y + O.veloy) / 50) *50;
        else if (negative == -1) O.y = Math.ceil ((O.y + O.veloy) / 50) *50;

        O.veloy = 0;
    }
    
        



    //     ----------slow down---------
    

    O.x += O.velox;
    O.velox -= (O.velox > 0) - (O.velox < 0);

    if (MapCollision(O.x + O.velox - (O.velox > 0) - (O.velox < 0), O.y, O.height,  O.width)) {
        const negative = (O.velox > 0) - (O.velox< 0);

        if (negative == 1)        O.x = Math.floor((O.x + O.velox) / 50) *50;
        else if (negative == -1)  O.x = Math.ceil ((O.x + O.velox) / 50) *50;

        O.velox = 0;
    }
}