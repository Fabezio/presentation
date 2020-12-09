<script>
  export let tag = "";
  export let mode = "";
  export let url = "#";
  export let icon;
</script>

<style>
  :root {
    --lightblue: #2962ff;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    /* clear: both; */
  }

  .right {
    /* float: right; */
    padding: 4px;
  }

  .panel {
    min-height: 70vh;
  }
  .menu {
    display: grid;
    text-align: center;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    padding: 2rem;
  }
  .rounded {
    border-radius: 50%;
  }
  .bg-blue {
    background: var(--lightblue);
  }

  .txt-lg {
    font-size: 1.1rem;
  }

  .blue {
    color: var(--lightblue);
  }
  .white {
    color: white;
  }
  .icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: chrome;
  }
  .thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    /* padding: 5px; */
    background: rgba(237, 201, 207, 0.4);
    border-radius: 3px;
  }
  .bold {
    font-weight: bold;
  }

  .left-align {
    text-align: left;
  }

  .hidden {
    display: none;
  }

  .tag {
    /* display: inline; */
    position: relative;

    top: -5rem;
    right: 10px;
    font-family: serif;
    background-color: green;
    float: right;
    /* z-index: 0; */
    color: white;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 600;
    min-height: 2rem;
    min-width: 2rem;
  }
  .box {
    height: 80px;
  }
</style>

<div class="box ">
  <div class="thumbnail">
    <a href={url}> <i class="icon {mode} {icon} fa-fw fa-3x " /> </a>
  </div>
  <div
    class="flex self-item-top text-right rounded-pill badge bg-success  float-right {tag > 0 ? '' : 'hidden'}">
    <span class="text-center ">{tag}</span>
  </div>
</div>
