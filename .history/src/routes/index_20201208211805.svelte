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
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
    border-radius: 3px;
    border: 1px dotted darkslateblue;
  }
  input:focus,
  input:hover,
  input:selected {
    border: 1px solid darkslateblue;
  }
  .bg-blue {
    width: 100%;
    background-color: #2962ff;
    color: white;
  }
  button {
    display: block;
    border: none;
    padding: 1rem;
    margin: 1rem 0;
  }
  button[type="submit"] {
  }
</style>

<Topbar>
  <div class="brand">Projet</div>
  <div class="close">&times;</div>
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
  <button type="submit" class="bg-blue">S'identifier avec l'empreinte digitale</button>
</div>
