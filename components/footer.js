function footer(elementId, routes, currentRoute) {
  // checks the URL to see if it contains 'pages'
  // runs check
  currentRoute('pages')

  const template = `
  <div id="desktop-footer-container">
  <!-- PLAYBAR DESKTOP VIEW CODE -->
  <table class="container-fluid">
    <tr>
      <td class="player text-white" width="90px">
        <img src="/assets/queen-thumbnail.jpg" width="90px" />
      </td>
      <td class="player text-white mt-4" width="33%">
        Father to Son
        <i class="fas fa-heart mx-4"></i>
        <br />
        <span class="text-muted" style="font-size: smaller">Queen</span>
      </td>

      <!-- player buttons -->
      <td
        class="player text-white"
        width="40%"
        style="text-align: center"
      >
        <ion-icon class="mx-4" name="shuffle-outline"></ion-icon>
        <ion-icon
          class="mx-4"
          name="play-skip-back-circle-outline"
        ></ion-icon>

        <ion-icon
          class="mx-2"
          size="large"
          name="pause-circle-outline"
        ></ion-icon>

        <ion-icon
          class="mx-4"
          name="play-skip-forward-circle-outline"
        ></ion-icon>
        <ion-icon class="mx-3" name="repeat-outline"></ion-icon>
        <input
          type="range"
          min="1"
          max="100"
          value="30"
          class="slider mx-3"
          id="myRange-musicPlay"
        />
      </td>
      <td
        class="player text-white"
        width="33%"
        style="text-align: center"
      >
        <ion-icon style="margin: 0 20px" name="albums-outline"></ion-icon>
        <ion-icon name="volume-high-outline"></ion-icon>
        <input style="font-size: 60px; vertical-align: super" type="range"
        min="1" max="100" value="50" class="slider mx-2"
        id="myRange-volume"
      </td>
    </tr>
  </table>
</div>

<div id="mobile-footer-container">
  <div id="mobile-playbar">
    <div
      class="row pt-1 justify-content-around align-items-center pl-4 pr-5"
    >
      <div class="col-2 text-left">
        <ion-icon
          size="large"
          class="mx-2"
          name="heart-outline"
        ></ion-icon>
      </div>
      <div class="col-8 pb-1 text-center">Queen another...</div>
      <div class="col-2 text-right">
        <ion-icon
          size="large"
          class="mx-2"
          name="pause-circle-outline"
        ></ion-icon>
      </div>
    </div>
  </div>

  <div id="mobile-navbar">
    <div class="d-flex justify-content-around align-items-baseline">
      <div class="d-flex flex-column align-items-center">
        <a class="text-center" href="${
          routes.matchingString
            ? routes.pageRoutes.home
            : routes.homeRoutes.home
        }">
          <i class="bi bi-house-door"></i><br />Home</a
        >
      </div>
      <div class="d-flex flex-column align-items-center">
        <a class="text-center" href="#">
          <i class="bi bi-search"></i><br />Search</a
        >
      </div>
      <div class="d-flex flex-column align-items-center">
        <a class="text-center" href="${
          routes.matchingString
            ? routes.pageRoutes.artist
            : routes.homeRoutes.artist
        }">
          <i class="fab fa-artstation"></i><br />
          Artist</a
        >
      </div>
      <div class="d-flex flex-column align-items-center">
        <a class="text-center" href="${
          routes.matchingString
            ? routes.pageRoutes.album
            : routes.homeRoutes.album
        }">
          <i class="fas fa-compact-disc"></i><br />
          Album</a
        >
      </div>
    </div>
  </div>
</div>

  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template

  return selected
}

export { footer }
