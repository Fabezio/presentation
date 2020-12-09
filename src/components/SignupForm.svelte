<script>
  import { createEventDispatcher } from "svelte";
  import Topbar from "./Topbar.svelte";
  const dispatch = createEventDispatcher();
  let name = "";
  let surname = "";
  let avatar = "";
  let email = "";
  let password = "";
  let repeat_password = "";
</script>

<style>
  a,
  button {
    text-transform: uppercase;
  }
</style>

<Topbar class="nav justify-content-between">
  <li class="nav-item brand text-primary">Projet</li>
  <li
    type="button"
    class=" nav-item btn-close"
    on:click={() => dispatch('closeApp')}
    aria-label="Close" />
  <!-- <slot /> -->
</Topbar>
<!-- <Topbar>
  <div class="close">&times;</div>
</Topbar> -->
<div class="container">
  <h1>S'inscrire</h1>
  <p>ou <a href=".">se connecter sur <span class="brand">Projet</span></a></p>
  <form action="">
    <input
      class="form-control mb-2"
      type="text"
      bind:value={name}
      placeholder="Prénom" />
    <input
      class="form-control mb-2"
      type="text"
      bind:value={surname}
      placeholder="nom" />
    <input
      class="form-control mb-2"
      type="email"
      bind:value={email}
      placeholder="E-mail" />
    <input
      class="form-control mb-2 px-2"
      type="password"
      bind:value={password}
      placeholder="Mot de passe" />
    <input
      class="form-control px-2"
      type="password"
      bind:value={repeat_password}
      placeholder="Répétez mot de passe" />
    <a
      href="users"
      class="btn-lg btn-primary d-block text-center my-2"
      type="submit">S'inscrire</a>
  </form>
  <a id="forgotten-password" href="#">Mot de passe oublié?</a>
  <button
    type="submit"
    on:click={checkUser}
    class="btn-lg btn-primary d-block my-2">S'identifier avec l'empreinte
    digitale</button>
</div>
