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
    text-transform: uppercase;
    padding: 1rem 0;
  }
  a {
    text-align: center;
    border: none;
  }
  button {
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    font-weight: 600;
    font-size: 1.05rem;
    line-height: 1.75rem;
  }
  a[type="submit"] {
    border-radius: 5px;
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
    <a href="users" class="bg-blue" type="submit">S'identifier</a>
  </form>
  <a href="#">Mot de passe oublié?</a>
  <button type="submit" class="bg-blue">S'identifier avec l'empreinte digitale</button>
</div>
