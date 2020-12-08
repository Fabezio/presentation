<script>
  import successkid from "images/successkid.jpg";
  import { space } from "svelte/internal";
  import Box from "../components/Box.svelte";
  const name = "Jean";
  const surname = "Dupont";
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    // second: "2-digit",
  });
</script>

<style>
  :root {
    --lightblue: #2962ff;
  }

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
    background: var(--lightblue);
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
  .panel {
    min-height: 70vh;
  }
  .menu {
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    padding: 2rem;
  }
  .rounded {
    border-radius: 50%;
  }
  .bg-blue {
    background: var(--lightblue);
  }

  .txt-lg {
    font-size: 1.1rem;
  }

  .blue {
    color: var(--lightblue);
  }
  .white {
    color: white;
  }
  .icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: chrome;
  }
  .thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    /* padding: 5px; */
    background: rgba(237, 201, 207, 0.4);
    border-radius: 3px;
  }
  .bold {
    font-weight: bold;
  }
  .left-align {
    text-align: left;
  }
  footer {
    display: block;
    position: fixed;
    bottom: O;
    /* height: 2.5rem; */
  }
  footer p {
    /* display: block; */
    /* text-align: left; */
    padding: 0 2rem;
  }
  .indent {
    /* text-indent: 3rem; */
  }
  .tag {
    /* display: inline; */
    position: relative;

    top: -5rem;
    right: 10px;
    font-family: serif;
    background-color: green;
    float: right;
    /* z-index: 0; */
    color: white;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 600;
    min-height: 2rem;
    min-width: 2rem;
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
<div class="panel">
  <p id="welcome">
    Bienvenue
    <span class="name">{name}</span>, pense à tes avis pour notre futur. Belle
    journée!
  </p>
  <div class="menu">
    <Box
      tag="3"
      mode="rounded bg-blue white"
      url="#"
      icon="far fa-calendar-alt" />

    <Box tag="7" mode="rounded bg-blue white" url="#" icon="far fa-bell" />
    <Box mode="rounded" url="#" icon="fas fa-chart-line" />
    <Box url="#" icon="fas fa-qrcode" />
    <Box url="#" icon="fas fa-search" />
    <Box url="#" icon="fas fa-pen-nib" />
    <Box url="#" icon="fas fa-lock" />
    <Box url="#" icon="far fa-user" />
    <Box url="#" icon="fas fa-power-off" />
  </div>
</div>

<!-- <h1>Projet</h1> -->
<footer>
  <p>
    dernière connexion:
    {formatter.format(date)}<br />
    <span class="blue bold txt-lg left-align indent">projet</span>
  </p>
</footer>
