// function sentence(quantity,fruit,price){
//     let total=quantity*price    
//     return `${quantity},${fruit} for ksh ${total}`

// }
class KioskCalc {
    constructor(fruit,quantity) {
      this.fruit= fruit;
      this.quantity=quantity
      this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
      this.getTotalCost=function(){
        return `${quantity} ${fruit} for KES ${quantity* this.fruitsPriceList.avocado}`
      }
    }
   
  }

  var kioskCalc = new KioskCalc("avacado", 2);
  console.log(kioskCalc.getTotalCost())