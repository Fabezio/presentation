<script>
  import successkid from "images/successkid.jpg";
  import { space } from "svelte/internal";
  import Box from "../../components/Box.svelte";
  import Topbar from "../../components/Topbar.svelte";
  const name = "Jean";
  const surname = "Dupont";
  const date = new Date();
  // export let user;
  const formatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    // second: "2-digit",
  });
  const users = [
    {
      name: "John",
      surname: "Doe",
      email: "john-doe@foo.com",
      avatar: "john doe.jpeg",
    },
    {
      name: "Jane",
      surname: "Doe",
      email: "jane-doe@foo.com",
      avatar: "jane doe.png",
    },
    {
      name: "Svelte",
      surname: "JS",
      email: "sveltejs@dev.io",
      avatar: "logo-512.png",
    },
  ];
  export let user = users[1];
</script>

<style>
  :root {
    --lightblue: #2962ff;
  }

  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  figure {
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  #home-logo {
    /* padding: 8px; */
    border-radius: 3px;
    color: white;
    /* background: var(--lightblue); */
    height: auto;
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
    padding: 2rem;
  }

  .txt-lg {
    font-size: 1.1rem;
  }

  .blue {
    color: var(--lightblue);
  }

  .bold {
    font-weight: bold;
  }
  .left-align {
    text-align: left;
  }
  /* footer {
    display: block;
    position: absolute;
    bottom: O;
    height: 2.5rem;
  } */
  footer p {
    /* display: block; */
    /* text-align: left; */
    padding: 0 2rem;
  }
</style>

<svelte:head>
  <title>Projet / accueil</title>
</svelte:head>

<Topbar>
  <li class="nav-item">
    <i id="home-logo" class="text-center bg-primary fas fa-home fa-fw fa-3x" />
  </li>
  <li>
    <figure class="">
      <img src={user.avatar} alt="photo id" width="48" />
      <figcaption>{user.name} {user.surname}</figcaption>
    </figure>
  </li>
  <!-- <slot /> -->
</Topbar>
<!-- <Topbar>
</Topbar> -->
<div class="panel">
  <p id="welcome">
    Bienvenue
    <span class="name">{user.name}</span>, pense à tes avis pour notre futur.
    Belle journée!
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
    <Box url="." icon="fas fa-power-off" />
  </div>
</div>

<!-- <h1>Projet</h1> -->
<div class="" />
<footer class="sticky-bottom">
  <p>
    dernière connexion:
    {formatter.format(date)}<br />
    <span class="blue bold txt-lg left-align indent">projet</span>
  </p>
</footer>
