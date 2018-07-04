/*const baristar = {
  order(request) {
    console.log(request.name + '을 주문 받음');
    return this.createCoffee(request);
  },
  createCoffee(request) {
    console.log(request.name + '를 만드는중');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const coffee = {
          name: request.name,
          contents: [{
            name: 'espresso',
            cnt: 2
          }, {
            name: 'milk',
            cnt: 1
          }]
        };
        console.log(request.name + '를 만들었다');
        resolve(coffee);
      }, 2000);
    });
  }
};*/

const baristar = (function(){
  function order(request) {
    console.log(request.name + '을 주문 받음');
    return createCoffee(request);
  }
  function createCoffee(request) {
    console.log(request.name + '를 만드는중');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const coffee = {
          name: request.name,
          contents: [{
            name: 'espresso',
            cnt: 2
          }, {
            name: 'milk',
            cnt: 1
          }]
        };
        console.log(request.name + '를 만들었다');
        resolve(coffee);
      }, 2000);
    });
  }
  return {
    order: order
  };
})();

/****************** *********************/
const Iwill = {
  drink(beverage) {
    console.log(beverage.name + '를 마신다');
    return beverage;
  },
  shit(food) {
    console.log(food.contents[1].name + '먹고 배탈남. 싼다 똥');
  },
  angry(reason) {
    console.error(reason + '???? 미쳤냐???내 커피!!!');
  }
};
baristar.order({
  name: 'ice latte',
  money: 5000
}).then(Iwill.drink)
  .then(Iwill.shit)
  .catch(Iwill.angry);













