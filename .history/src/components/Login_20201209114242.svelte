<script>
  import { createEventDispatcher } from "svelte";
  import TopBar from "./Topbar.svelte";
  const dispatch = createEventDispatcher();
  let email = "";
  let password = "";
</script>

<Topbar class="nav justify-content-between">
  <li class="nav-item brand">Projet</li>
  <li
    type="button"
    class=" nav-item btn-close"
    on:click={() => dispatch('closeapp')}
    aria-label="Close" />
  <!-- <slot /> -->
</Topbar>
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
