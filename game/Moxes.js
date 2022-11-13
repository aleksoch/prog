class Moxes extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.energy = 10;
      
    }
    mult() {
      
      var empty = random(this.chooseCell(0));
  
      
  
      if (empty && this.energy > 15) {
        
        let newX = empty[0];
        let newY = empty[1];
        matrix[newY][newX] = 3;
        let xt = new Moxes(newX, newY);
        moxesArr.push(xt);
      }
  
      
    }
  
    move() {
      var empty = random(this.chooseCell(0));
  
      if (empty) {
        
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
  
        this.x = newX;
        this.y = newY;
      }
  
  
      
    }
  
    eat() {
      var food = random(this.chooseCell(1));
      var food1 = random(this.chooseCell(2));
  
      if (food) {
        var newX = food[0];
        var newY = food[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
  
        for (var i in xotakerArr) {
          if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
            xotakerArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy += 3;
  
      } else if (food1) {
        var newX = food1[0];
        var newY = food1[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0
        for (var i in grassArr) {
          if (grassArr[i].x == newX && grassArr[i].y == newY) {
            grassArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy++;
  
      } else {
        this.move();
        this.energy--;
        if (this.energy <= 2) {
          this.die();
        }
      }
    }
  
    die() {
      matrix[this.y][this.x] = 0;
      for (var i in moxesArr) {
        if (moxesArr[i].x == this.x && moxesArr[i].y == this.y) {
          moxesArr.splice(i, 1);
        }
      }
    }
  }
  