import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="#">◯</a>
      <ul class="nav-links">
        <li><a href="#">Store</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero dark">
      <p class="eyebrow">New</p>
      <h1>ProPhone 16</h1>
      <p class="subtitle">Built for speed. Designed for everyone.</p>
      <div class="actions">
        <a href="#" class="btn btn-light">Learn more</a>
        <a href="#" class="btn btn-outline-light">Buy</a>
      </div>
    </section>

    <section class="hero light">
      <p class="eyebrow">Now available</p>
      <h2>UltraPad Air</h2>
      <p class="subtitle">Thin. Bright. Ready for anything.</p>
      <div class="actions">
        <a href="#" class="btn btn-dark">Learn more</a>
        <a href="#" class="btn btn-outline-dark">Buy</a>
      </div>
    </section>

    <section class="grid">
      <article class="card">
        <h3>SmartWatch X</h3>
        <p>Your day, at a glance.</p>
        <a href="#">Explore &gt;</a>
      </article>
      <article class="card">
        <h3>AudioPods Pro</h3>
        <p>Silence the noise. Feel the music.</p>
        <a href="#">Explore &gt;</a>
      </article>
      <article class="card">
        <h3>Trade In</h3>
        <p>Upgrade and save with device trade-in.</p>
        <a href="#">Learn more &gt;</a>
      </article>
      <article class="card">
        <h3>Services+</h3>
        <p>Music, TV, cloud and more in one plan.</p>
        <a href="#">Learn more &gt;</a>
      </article>
    </section>
  </main>
`
