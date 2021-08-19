import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import '../src/index.css'
import router from './router'

const defaultClient = new ApolloClient({
  // KOITA DEPLOYAA TÄÄ TÄLLEEN, VOIS SALEE TOIMII
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : '/graphql',
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