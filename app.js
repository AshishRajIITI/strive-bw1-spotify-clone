// shared component
import { routes, currentRoute } from './routes.js'
import { footer } from './components/footer.js'
import { sidenav } from './components/sidenav.js'
import { CardList } from './components/CardList.js'

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
  ],
  data: [
    {
      artist: 'INXS 1',
      album: 'Kick 30',
      imgURL: 'https://i.scdn.co/image/ab67616d0000b2733584b98b7cad9e21e79e1719'
    },
    {
      artist: 'INXS 2',
      album: 'Kick 30',
      imgURL: 'https://i.scdn.co/image/ab67616d0000b2733584b98b7cad9e21e79e1719'
    },
    {
      artist: 'INXS 3',
      album: 'Kick 30',
      imgURL: 'https://i.scdn.co/image/ab67616d0000b2733584b98b7cad9e21e79e1719'
    }
  ]
}

fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/413')
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))

window.onload = function () {
  sidenav('sidenav', routes, currentRoute)
  footer('footer', routes, currentRoute)
  CardList('artistcard', state.data)

  // initialise audio player after ui
  // components have been rendered to window
  // otherwise onclicks won't register in service
  //audioplayer(state.music)
}
