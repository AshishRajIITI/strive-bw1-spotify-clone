function sidenav(elementId, routes, currentRoute) {
  // checks the URL to see if it contains 'pages'
  // runs check
  currentRoute('pages')

  const template = `
     <nav class="d-flex justify-content-between pl-3">
        <div class="container nav-container pl-3 mt-5">
          <div
            class="d-flex flex-column justify-content-between menu-container"
          >
            <div>
              <ul class="list-unstyled">
                <li>
                  <a href="${
                    routes.matchingString
                      ? routes.pageRoutes.home
                      : routes.homeRoutes.home
                  }">
                    <img src="${
                      routes.matchingString
                        ? routes.pageRoutes.logo
                        : routes.homeRoutes.logo
                    }" alt="" />
                  </a>
                </li>
                <li>
                  <i class="bi bi-house-door"></i><a href="/index.html">Home</a>
                </li>
                <li>
                  <i class="fab fa-artstation"></i
                  ><a href="${
                    routes.matchingString
                      ? routes.pageRoutes.artist
                      : routes.homeRoutes.artist
                  }">Artist</a>
                </li>
                <li>
                  <i class="fas fa-compact-disc"></i
                  ><a href="${
                    routes.matchingString
                      ? routes.pageRoutes.album
                      : routes.homeRoutes.album
                  }">Album</a>
                </li>
              </ul>
            </div>
            <div class="d-flex flex-column">
            <a href="${
              routes.matchingString
                ? routes.pageRoutes.signup
                : routes.homeRoutes.signup
            }" class="btn btn-light btn-secondary btn-lg btn-signup mb-3" role="button">Signup</a>
            <a href="${
              routes.matchingString
                ? routes.pageRoutes.signup
                : routes.homeRoutes.signup
            }" class="btn btn-light btn-secondary btn-lg btn-login" role="button">Login</a>
            </div>
          </div>
        </div>
      </nav>
  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template
}

export { sidenav }
