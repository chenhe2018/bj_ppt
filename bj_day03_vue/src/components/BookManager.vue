<template>
    <div>
        <h1>{{$store.state.title}}</h1>

        <book-adder></book-adder>

        <div>
            <table>
                <tr :key="book.id" v-for="book of $store.state.books">
                    <td>{{book._id}}</td>
                    <td>{{book.name}}</td>
                    <td>{{book.price}}</td>
                    <td>{{book.count}}</td>
                    <td><button @click="delBook(book)">del</button></td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import store from '../store'
    import BookAdder from "./BookAdder";
    export default {
        name: "BookManager",
        store,
        created(){
            this.$store.dispatch('loadBooks')
        },
        methods:{
            delBook(book){
                this.$store.dispatch("delBook",book);
            }
        },
        components:{'book-adder':BookAdder}
    }
</script>

<style scoped>

</style>