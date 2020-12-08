<script>
  import Topbar from "../components/Topbar.svelte";
  let email = "";
  let password = "";
</script>

<style>
  .brand {
    color: #2962ff;
    font-weight: bold;
  }
  input {
    width: 100%;
    /* margin: 1rem; */
    padding: 1rem;
  }
  .bg-blue {
    width: 100%;
    /* margin: 1rem; */
    padding: 1rem;
    background-color: #2962ff;
    color: white;
  }
</style>

<Topbar>
  <div class="brand">Projet</div>
  <div>X</div>
</Topbar>
<div class="panel">
  <h1>S'identifier</h1>
  <p>ou <a href="#">s'inscrire sur <span class="brand">Projet</span></a></p>
  <form action="">
    <input type="email" bind:value={email} placeholder="E-mail" />
    <input type="password" bind:value={password} placeholder="Mot de passe" />
    <button class="bg-blue" type="submit">S'identifier</button>
  </form>
  <a href="#">Mot de passe oublié?</a>
  <button class="bg-blue">S'identifier avec l'empreinte digitale</button>
</div>
