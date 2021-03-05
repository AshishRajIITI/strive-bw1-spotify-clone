// shared component
import { routes, currentRoute } from './routes.js'
import { footer } from './components/footer.js'
import { sidenav } from './components/sidenav.js'

// services
import { audioplayer } from './services/audioplayer-service.js'

const state = {
  user: {
    uui: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
}

// initialise components and services on window load.
window.onload = function () {
  audioplayer()
  sidenav('sidenav', routes, currentRoute)
  footer('footer', routes, currentRoute)
}
