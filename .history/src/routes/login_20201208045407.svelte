<script>
  let email = "";
  let password = "";
</script>

<style>
  .topbar {
    display: flex;
    justify-content: space-between;
    padding: 2px;
  }
  .brand {
    color: #2962ff;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin: 1rem;
  }
</style>

<div class="topbar">
  <div class="brand">Projet</div>
  <div>X</div>
</div>

<h1>S'identifier</h1>
<p>ou <a href="#">s'inscrire sur <span class="brand">Projet</span></a></p>
<form action="">
  <input type="email" bind:value={email} placeholder="E-mail" />
  <input type="password" bind:value={password} placeholder="Mot de passe" />
  <button type="submit">S'identifier</button>
</form>
<a href="#">Mot de passe oublié?</a>
<button>S'identifier avec l'empreinte digitale</button>
