// shared component imports
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
  navbar('sidenav')
}
