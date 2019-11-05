<template>
    <div>
    <form action="#" @submit.prevent="addBook">
        <input type="text" ref="name">
        <input type="number" ref="price">
        <input type="number" ref="count">
        <button >添加</button>
    </form>


    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "BookAdder",
        store,
        methods:{
            addBook(){
                let name=this.$refs.name.value;
                let price=this.$refs.price.value;
                let count=this.$refs.count.value;
                let book={name,price,count}
                this.$store.dispatch('addBook',book)
            }
        }
    }
</script>

<style scoped>

</style>