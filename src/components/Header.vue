<template>
  <header>
    <nav>
      <ul>
        <li><router-link class="nav-link" to="/">home</router-link></li>
        <li>
          <router-link class="nav-link" to="/about">about me</router-link>
        </li>
        <li><router-link class="nav-link" to="/ai">ai</router-link></li>
        <li>
          <router-link class="nav-link" to="/projects">projects</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/guestbook">guestbook</router-link>
        </li>
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
    box-shadow: 0 0 2.5rem #1a1a1a;

    ul {
      list-style: none;
      padding: 0rem;
      li {
        list-style: none;
        display: inline-block;
        margin: 0 1rem 0 1rem;
      }
    }
  }
  .nav-link {
    color: $text-dark;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-decoration: none;

    &:hover {
      color: $secondary;
      font-weight: 500;
    }
    &.router-link-active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-left: -1.25rem;
      width: 1rem;
      height: 1rem;
      background-image: url("../assets/select.gif");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
