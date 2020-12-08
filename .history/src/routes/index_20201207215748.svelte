<script>
  import successkid from "images/successkid.jpg";
  const name = "Jean";
  const surname = "Dupont";
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  /* img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	} */

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  #home-logo {
    padding: 8px;
    border-radius: 3px;
    color: white;
    background: blue;
    max-height: 50px;
    self-item: top;
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    /* clear: both; */
  }
  .left {
    /* float: left; */
  }
  .right {
    /* float: right; */
    padding: 4px;
  }
  figcaption {
    text-transform: capitalize;
  }
  #welcome {
    padding: 0 2rem;
  }
  #welcome.name {
    font-weight: 500;
  }
</style>

<svelte:head>
  <title>Projet / accueil</title>
</svelte:head>
<div class="topbar">
  <i id="home-logo" class="left fas fa-home fa-fw fa-3x" />
  <figure class="right">
    <img src="john doe.jpeg" alt="photo id" width="48" />
    <figcaption>{name} {surname}</figcaption>
  </figure>
</div>

<!-- <h1>Projet</h1> -->
<p id="welcome">
  Bienvenue
  <span class="name">{name}</span>, pense à tes avis pour notre futur. belle
  journée!
</p>
