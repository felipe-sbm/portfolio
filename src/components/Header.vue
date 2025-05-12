<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about">about me</router-link></li>
        <li><router-link to="/ai">ai</router-link></li>
        <li><router-link to="/projects">projects</router-link></li>
        <li><router-link to="/guestbook">guestbook</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../style.scss" as *;

header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  nav {
    background-color: #1e1e1e;
    padding: 0rem 1.5rem;
    border-radius: 2rem;
    box-shadow: 0 0 2.5rem #1A1A1A;

    ul {
      padding: 0rem;
      li {
        list-style: none;
        display: inline-block;
        margin: 0 1rem 0 1rem;
      }
    }
  }
  router-link {
    color: $text-dark;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondary;
      font-weight: 500;
    }
  }
  #gallery router-link:focus {
      list-style: url("../assets/select.gif");
  }
}
</style>
