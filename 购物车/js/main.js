const app = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id:1,
        name:"《数据结构》",
        date:"2008-9",
        price:88.00,
        count:1
      },
      {
        id:2,
        name:"《编程艺术》",
        date:"2010-8",
        price:128.00,
        count:1
      },
      {
        id:3,
        name:"《计算机原理》",
        date:"2011-6",
        price:88.00,
        count:1
      },
      {
        id:4,
        name:"《高等数学》",
        date:"2001-9",
        price:88.00,
        count:1
      },
    ]
  },
  methods: {
    /* getFinalPrice(price){
      return '￥' + price.toFixed(2);
    } */
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice() {
      let totalPrice = 0
      /* //1.普通的for循环
      for (var i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price*this.books[i].count
      }
      
      //2.（let i in this.books)
      for (let i in this.books) {
        totalPrice += this.books[i].price*this.books[i].count
      } */
      
      /* //3.(let i of this.boosk)
      for (let item of this.books) {
        totalPrice += item.price*item.count
      }
      return totalPrice */
      //4.reduce函数
      return this.books.reduce(function(preValue,book){
        return preValue + book.price*book.count
      },0)
    }
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  }
})