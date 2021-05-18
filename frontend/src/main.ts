import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'

const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
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
).mount('#app')