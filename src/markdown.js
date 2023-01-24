function generateCard(data) {
  return(
  `<article>
  <section class="title">
    <h2 class="name">${data.name}</h1>
    <h3 class="job">${data.job}</h2>
  </section>
  <section class="info">
    <div class="id">${data.id}</div>
    <div class="email">Email: <a href="" class="link">${data.link}</a></div>
    <div class="detail">${data.detail}</div>
  </section>
</article>`)
}

module.exports = generateCard