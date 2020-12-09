<script>
  import SignupForm from "./../components/SignupForm.svelte";
  // import Topbar from "../components/Topbar.svelte";
  import CloseApp from "../components/CloseApp.svelte";
  //   import SignupForm from "../components/SignupForm.svelte";

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
  let display = "login";
  function closeApp() {
    display = "close";
  }
</script>

<style>
</style>

{#if display == 'close'}
  <CloseApp />
{:else if display == 'login'}
  <SignupForm on:closeApp={closeApp} />
{/if}
