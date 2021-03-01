function navbar(elementId) {
  const template = `
  <div class="col-2 nav-wrapper container">
  <h1>nav</h1>
  <nav>
    <ul class="d-flex flex-column">
      <a href="../index.html">Home</a>
      <a href="/pages/album.html">Album</a>
      <a href="/pages/artist.html">Artist</a>
      <a href="/pages/signup.html">Signup</a>
    </ul>
  </nav>
</div>
  `

  const selected = document.getElementById(elementId)
  console.log(selected)
  selected.innerHTML = template
}

export { navbar }
