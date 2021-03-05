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
  },
  music: [
    {
      artist: 'Queen',
      title: 'I Want To Break Free',
      url: './assets/queen-breakfree.mp3'
    },
    {
      artist: 'Phill Collins',
      title: 'Easy Lover',
      url: './assets/phill-collins'
    }
  ]
}

window.onload = function () {
  sidenav('sidenav', routes, currentRoute)
  footer('footer', routes, currentRoute)

  // initialise audio player after ui
  // components have been rendered to window
  // otherwise onclicks won't register in service
  audioplayer(state.music)
}
