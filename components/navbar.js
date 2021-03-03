function navbar(elementId) {
  let state = {
    pageRoutes: {
      home: '../index.html',
      artist: '/artist.html',
      album: '/album.html',
      logo: '../assets/Logo2.png'
    },
    homeRoutes: {
      home: 'index.html',
      artist: '/pages/artist.html',
      album: '/pages/artist.html',
      logo: '../assets/Logo2.png'
    },
    isPages: false
  }

  // checks the URL to see if it contains 'pages'
  function pageDirCheck() {
    if (window.location.href.indexOf('pages') > 0) {
      state.isPages = !state.isPages
    }
  }

  // test
  pageDirCheck()
  console.log(state.isPages)

  const template = `
     <nav class="d-flex flex-column justify-content-between pl-3">
        <div class="container pl-3 mt-5">
          <div
            class="d-flex flex-column justify-content-between menu-container"
          >
            <div>
              <ul class="list-unstyled">
                <li>
                  <a href="${
                    state.isPages
                      ? state.pageRoutes.home
                      : state.homeRoutes.home
                  }">
                    <img style="width: 150px" src="${
                      state.isPages
                        ? state.pageRoutes.logo
                        : state.homeRoutes.logo
                    }" alt="" />
                  </a>
                </li>
                <li>
                  <i class="bi bi-house-door"></i><a href="/index.html">Home</a>
                </li>
                <li>
                  <i class="fab fa-artstation"></i
                  ><a href=""${
                    state.isPages
                      ? state.pageRoutes.artist
                      : state.homeRoutes.artist
                  }">Artist</a>
                </li>
                <li>
                  <i class="fas fa-compact-disc"></i
                  ><a href="${
                    state.isPages
                      ? state.pageRoutes.album
                      : state.homeRoutes.album
                  }">Album</a>
                </li>
              </ul>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <button type="button" class="btn btn-light btn-signup mb-3">
                <a href="./pages/signup.html">SIGN UP</a>
              </button>
              <button type="button" class="btn btn-light btn-login mb-3">
                <a href="./pages/signup.html">LOGIN</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
  `

  const selected = document.getElementById(elementId)
  console.log(selected)
  selected.innerHTML = template
}

export { navbar }
