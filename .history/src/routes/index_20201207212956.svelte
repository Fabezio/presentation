<script>
  import successkid from "images/successkid.jpg";
  const name = "yvan";
  const surname = "leroy";
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
  <i class="left">home</i>
  <figure class="right">
    <img src="logo-192.png" alt="photo id" width="72" />
    <figcaption>prénom nom</figcaption>
  </figure>
</div>

<h1>Projet</h1>
