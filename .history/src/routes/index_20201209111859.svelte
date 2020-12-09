<script>
  import Topbar from "../components/Topbar.svelte";
  let email = "";
  let password = "";
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
  let user = {};
  function checkUser() {
    for (let u in users) {
      if (email == u.email) {
        user = { ...u };
        console.table(user);
      } else {
        console.log("utilisateur non reconnu");
      }
    }
    return user;
  }
</script>

<style>
  .brand {
    color: #2962ff;
    font-weight: bold;
  }

  input {
    /* display: block;
    width: 100%;
    padding: 1rem 0; */
    margin: 1rem 0;
    /* border-radius: 3px; */
    border: 1px dotted darkslateblue;
  }
  input:focus,
  input:hover,
  input:selected {
    border: 1px solid darkslateblue;
  }
  .bg-blue {
    background-color: #2962ff;
    color: white;
  }

  a,
  button,
  input {
    width: 100%;
    display: block;
    padding: 1rem 0;
  }
  a {
    text-align: center;
    text-transform: uppercase;
    border: none;
  }
  button {
    border: none;
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem 0;
    font-weight: 600;
    font-size: 1.05rem;
    line-height: 1.75rem;
  }
  a[type="submit"] {
    border-radius: 5px;
  }
  a #forgotten-password {
    text-transform: initial !important;
  }
</style>

<ul class="nav justify-content-between">
  <li class="nav-item brand">Projet</li>
  <li type="button" class=" nav-item btn-close" aria-label="Close" />
  <!-- <slot /> -->
</ul>
<!-- <Topbar>
  <div class="close">&times;</div>
</Topbar> -->
<div class="panel">
  <h1>S'identifier</h1>
  <p>ou <a href="#">s'inscrire sur <span class="brand">Projet</span></a></p>
  <form action="">
    <input
      class="form-control"
      type="email"
      bind:value={email}
      placeholder="E-mail" />
    <input
      class="px-2"
      type="password"
      bind:value={password}
      placeholder="Mot de passe" />
    <a href="users" class="bg-blue" type="submit">S'identifier</a>
  </form>
  <a id="forgotten-password" href="#">Mot de passe oublié?</a>
  <button type="submit" on:click={checkUser} class="bg-blue">S'identifier avec
    l'empreinte digitale</button>
</div>
