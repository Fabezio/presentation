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

  .topbar {
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
  <i class="left fas fa-home fa-8x" />
  <figure class="right">
    <img src="john doe.jpeg" alt="photo id" width="72" />
    <figcaption>{name} {surname}</figcaption>
  </figure>
</div>

<h1>Projet</h1>
