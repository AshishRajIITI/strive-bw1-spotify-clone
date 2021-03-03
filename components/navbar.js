function navbar(elementId) {
  const state = {
    links: {
      home: '../index.html',
      assets: '../assets/',
      css: '../css/'
    }
  }

  if (window.location.href.indexOf('pages') > 0) {
    console.log('contains pages')
  }

  const template = `
     <nav class="d-flex flex-column justify-content-between pl-3">
        <div class="container pl-3 mt-5">
          <div
            class="d-flex flex-column justify-content-between menu-container"
          >
            <div>
              <ul class="list-unstyled">
                <li>
                  <a href="/index.html">
                    <img style="width: 150px" src="./assets/Logo2.png" alt="" />
                  </a>
                </li>
                <li>
                  <i class="bi bi-house-door"></i><a href="/index.html">Home</a>
                </li>
                <li>
                  <i class="fab fa-artstation"></i
                  ><a href="/pages/artist.html">Artist</a>
                </li>
                <li>
                  <i class="fas fa-compact-disc"></i
                  ><a href="/pages/album.html">Album</a>
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
