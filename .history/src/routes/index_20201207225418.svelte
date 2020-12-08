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
    font-size: 1.25rem;
  }
  #welcome .name {
    font-weight: 600;
    color: #007;
  }
  .menu {
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    margin: 0 2rem;
  }
  .rounded {
    border-radius: 50%;
  }
  .blue {
    background: cyan;
  }
  .icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumbnail {
	  padding: 10px;
	  background: pink;
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
  <span class="name">{name}</span>, pense à tes avis pour notre futur. Belle
  journée!
</p>
< class="menu">
  <i class="icon rounded blue far fa-calendar-alt fa-3x " />
  <i class="icon rounded blue far fa-bell fa-3x" />
  <i class="icon rounded blue fas fa-chart-line fa-3x" />
  <i class="icon fas fa-qrcode fa-3x" />
  <i class="icon fas fa-search fa-3x" />
  <i class="icon fas fa-pen-nib fa-3x" />
  <i class="icon fas fa-key fa-3x" />
  <i class="icon far fa-user fa-3x" />
  <i class="icon fas fa-power-off fa-3x" />
</div>
