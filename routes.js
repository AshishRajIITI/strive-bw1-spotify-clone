// file used to map routes for components for naviation between pages directory and route index.js
// conditionally insert correct route into href depending on where we are in the application
// used for internal app navigation/routing only, external links work fine.

function currentRoute(matchingString) {
  if (window.location.href.indexOf(`${matchingString}`) > 0) {
    routes.matchingString = true
  } else {
    routes.matchingString = false
  }
}

const routes = {
  pageRoutes: {
    home: '../index.html',
    artist: 'artist.html',
    album: 'album.html',
    signup: 'signup.html',
    logo: '../assets/Logo2.png'
  },
  homeRoutes: {
    home: 'index.html',
    artist: './pages/artist.html',
    album: './pages/album.html',
    signup: '/pages/signup.html',
    logo: '../assets/Logo2.png'
  },
  matchingString: false
}

export { routes, currentRoute }
