// shared component imports
import { sidenav } from './components/sidenav.js'

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
  sidenav('sidenav')
}
