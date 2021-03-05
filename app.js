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

window.onload = function () {
  sidenav('sidenav', routes, currentRoute)
  footer('footer', routes, currentRoute)

  // initialise audio player after ui
  // components have been rendered to window
  // otherwise onclicks won't register in service
  audioplayer()
}
