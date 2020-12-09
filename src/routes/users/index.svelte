<script>
  import { onMount } from "svelte";
  import Box from "../../components/Box.svelte";
  import Topbar from "../../components/Topbar.svelte";
  let state = "loading";
  onMount(() => {
    setTimeout(() => {
      state = "ready";
      return state;
    }, 100);
  });

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
      name: "Diana",
      surname: "Assal",
      email: "test@msg.info",
      avatar: "ethic.png",
    },
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
  export let user = users[0];
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

  footer p {
    /* display: block; */
    /* text-align: left; */
    padding: 0 2rem;
  }
</style>

<svelte:head>
  <title>Projet / accueil</title>
</svelte:head>
{#if state == 'loading'}
  <div class=" d-flex justify-content-center justify-items-center ">
    <div class="spinner-border text-success lead" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
{:else}
  <Topbar>
    <li class="nav-item">
      <i
        id="home-logo"
        class="text-center bg-primary fas fa-home fa-fw fa-3x" />
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
  <div class="container">
    <p id="welcome">
      Bienvenue
      <span class="name">{user.name}</span>, pense à tes avis pour notre futur.
      Belle journée!
    </p>
    <div class="menu">
      <Box
        tag="3"
        mode="rounded-pill bg-primary text-white"
        url="#"
        icon="far fa-calendar-alt" />

      <Box
        tag="7"
        mode="rounded-pill bg-primary text-white"
        url="#"
        icon="far fa-bell" />
      <Box url="#" icon="fas fa-chart-line" />
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
  <footer class="fixed-bottom   ">
    <p>
      dernière connexion:
      {formatter.format(date)}<br />
      <span class="text-primary text-bold text-left ">projet</span>
    </p>
  </footer>
{/if}
