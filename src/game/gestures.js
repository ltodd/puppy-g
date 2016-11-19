/**
* gesture engine
* draws and interprets user input
*
* author: ltodd
*/


class GesturesEngine {
    constructor(game, numNodes, numGestures){
        this.canvas;
        this.numNodes = numNodes;
        this.numGestures = numGestures;
        this.gestures = Array();
        for(var i=0; i<numGestures; i++){
            this.gestures[i] = Array();
            for(var j=0; j<numNodes; j++){
                this.gestures[i][j] = {x:0, y:0};
            }
            //ios has a 6 finger gesture according to https://phaser.io/examples/v2/input/multi-touch :(
            if(i>0 && i<6){
                game.input.addPointer();
            }
        }
    }
    
    setCanvas(canvas){
        this.canvas = canvas;
    }
    
    update(game){
        this.canvas.clear();
        for(var gIndex=0; gIndex<this.gestures.length; gIndex++){
            var color = (0x0000ff << (gIndex%3) * 8);
            this.canvas.lineStyle(4,color,1)
            var headX = game.input.pointers[gIndex].x;
            var headY = game.input.pointers[gIndex].y;
            var nodes = this.gestures[gIndex];
            for(var i=nodes.length-1; i > 0; i--){
                nodes[i].x = nodes[i-1].x;
                nodes[i].y = nodes[i-1].y;
                //tailmost node
                if(i == nodes.length-1){
                    this.canvas.moveTo(headX,headY);
                } else {
                    this.canvas.lineTo(nodes[i].x, nodes[i].y);
                }
            }
            nodes[0] = {x:headX, y:headY};
            this.canvas.lineTo(nodes[0].x, nodes[0].y);
        }
        
    }
}

