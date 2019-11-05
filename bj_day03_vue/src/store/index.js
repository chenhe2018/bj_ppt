import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url:'http://localhost:3000/books',
    title:"this is title",
    books:[]
  },
  mutations: {
    changeTitle(state,payload){
      state.title=payload
    },
    loadBooks(state,books){
      state.books.push(...books)
    },
    addBook(state,book){
      state.books.push(book)
    },
    delBook(state,book){
      let index =state.books.findIndex(b=>b._id==book._id)
      state.books.splice(index,1)
    }
  },
  actions: {
    changeTitle(){
      this.commit('changeTitle',"Hello")
    },
    loadBooks(context){
      fetch(context.state.url,{method:'GET'})
          .then(resp=>resp.json())
          .then(books=>this.commit('loadBooks',books))
    },
    addBook(state,book){
      fetch(this.state.url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(book)
      }).then(resp=>resp.json())
          .then(newBook=>this.commit("addBook",newBook))
    },
    delBook(state,book){
      fetch(this.state.url+"/"+book._id,{method:"DELETE"})
          .then(()=>this.commit("delBook",book))
    }
  },
  modules: {

  }
})
