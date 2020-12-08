<script>
  import successkid from "images/successkid.jpg";
  const name = "jean";
  const surname = "dupont";
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

  #home {
    padding: 8px;
    border-radius: 3px;
    color: white;
    background: blue;
  }
  .topbar {
    display: block;
    clear: both;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  figcaption {
    text-transform: capitalize;
  }
</style>

<svelte:head>
  <title>Projet / accueil</title>
</svelte:head>
<div class="topbar">
  <i id="home" class="left fas fa-home fa-3x" />
  <figure class="right">
    <img src="john doe.jpeg" alt="photo id" width="48" />
    <figcaption>{name} {surname}</figcaption>
  </figure>
</div>

<h1>Projet</h1>
