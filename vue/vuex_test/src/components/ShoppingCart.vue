<template>
    <div>
        <div v-if="books.length">
            <table class="cart">
                <thead>
                    <tr>
                        <th>书籍名称</th>
                        <th>出版日期</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>库存</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(item, index) in books" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.price | showPrice }}</td>
                        <td>
                            <button
                                @click="reduce(index)"
                                :disabled="item.buyCount <= 1"
                            >
                                -
                            </button>
                            {{ item.buyCount }}
                            <button
                                @click="increase(index)"
                                :disabled="item.buyCount >= item.count"
                            >
                                +
                            </button>
                        </td>
                        <td>{{ item.count }}</td>
                        <td>
                            <button @click="removeList(index)">移除</button>
                        </td>
                    </tr>
                    总计：{{ totalPrice | showPrice }}
                </thead>
            </table>
        </div>
        <h2 v-else>购物车为空</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: "老人与海",
                    date: "2006-1",
                    price: 60.0,
                    count: 22,
                    buyCount: 1,
                },
                {
                    id: 2,
                    name: "时间",
                    date: "2007-3",
                    price: 23.0,
                    count: 5,
                    buyCount: 1,
                },
                {
                    id: 3,
                    name: "JAVA",
                    date: "1993-1",
                    price: 90.0,
                    count: 2,
                    buyCount: 1,
                },
                {
                    id: 4,
                    name: "HTTP",
                    date: "2021-1",
                    price: 90.0,
                    count: 12,
                    buyCount: 1,
                },
            ],
        };
    },
    methods: {
        increase(index) {
            this.books[index].buyCount++;
        },
        reduce(index) {
            this.books[index].buyCount--;
        },
        removeList(index) {
            this.books.splice(index, 1);
        },
    },
    computed: {
        totalPrice(){
            // let total = 0;
            // for(let i of this.books){
            //     total += i.price * i.buyCount
            // }
            // return total

            return this.books.reduce(function (preValue, book) {  
                return preValue + book.price * book.buyCount
            },0)
        }
    },
    filters: {
        showPrice(price) {
            return "¥" + price.toFixed(2);
        },
    },
};
</script>
<style>
.cart {
    border: 1px solid black;
}
</style>