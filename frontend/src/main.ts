import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { HttpLink } from 'apollo-link-http'
import App from './App.vue'
import '../src/index.css'
import router from './router'

const httpLink = new HttpLink({
  // You should use an absolute URL here
})

const defaultClient = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'graphql' : 'http://localhost:4000/graphql',
  //uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

createApp(
  {
    setup () {
      provide(DefaultApolloClient, defaultClient)
    },
    render() {
      return h(App)
    }
  }
).use(router).mount('#app')