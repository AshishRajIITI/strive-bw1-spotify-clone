console.log('app.js connected')
import { navbar } from './components/navbar.js'

const state = {
  user: {
    uui: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
}

window.onload = function () {
  navbar('navbar-injector')
}
