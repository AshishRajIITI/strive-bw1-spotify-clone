function CardList(elementId, data) {
  const template = /*html*/ `
  ${data.map((card) => {
    return `
    <div class="col">
  <div class="tile">
    <div class="tile-content">
      <div class="card bg-dark text-white">
        <img
          class="card-img"
          src="${card.imgURL}"
          alt="Card image"
        />
        <!-- <div class="card-img-overlay"><img src="../assets/play.png" style="width: 16px;" alt="Play"></div> -->
      <div class="btn-play-wrapper"><div class="btn-play"><img src="../assets/play.png" style="width: 20px; height: 20px;" alt="Play"></div></div>
      </div>
      <div class="tile-body">
        <p>${card.artist}</p>
        <p>${card.album}</p>
      </div>
    </div>
  </div>
</div>
    `
  })}

  `

  const selected = document.getElementById(elementId)
  console.log(selected)
  selected.innerHTML = template
}

export { CardList }
