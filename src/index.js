import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

/*Provider来自于react-redux, 这是react-redux提供的一个核心的API
*  Provider的意思是，我这个提供器连接了store，那么我这个Provider里面的所有的组件，就都有能力获取到store里的内容了，所以<App>组件在这个<Provider>组件的里面，所以<App>也有能力获取store里面的数据了。
*  <Provider store={store}>中 store属性的值等于store这个变量
* */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
