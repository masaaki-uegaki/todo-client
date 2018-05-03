<template>
  <div id="app">
    <!--Navbar-->
    <navbar position="top" class="indigo navbar-dark" name="ToDo" to="/" scrolling>
      <navbar-collapse>
        <navbar-nav>
          <navbar-item to="/" exact waves-fixed>Home</navbar-item>
          <navbar-item to="/about" waves-fixed>About</navbar-item>
          <navbar-item to="/tasks" waves-fixed>Tasks</navbar-item>
          <!-- Dropdown -->
          <dropdown tag="li" class="nav-item">
            <dropdown-toggle tag="a" navLink color="indigo" waves-fixed>Dropdown</dropdown-toggle>
            <dropdown-menu>
              <dropdown-item>Action</dropdown-item>
              <dropdown-item>Another action</dropdown-item>
              <dropdown-item>Something else here</dropdown-item>
            </dropdown-menu>
          </dropdown>
        </navbar-nav>
          <!-- Search form -->
        <form class="form-inline">
          <mdinput type="text" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/mdbootstrap/Navbar.vue";
import NavbarItem from "@/components/mdbootstrap/NavbarItem.vue";
import NavbarNav from "@/components/mdbootstrap/NavbarNav.vue";
import NavbarCollapse from "@/components/mdbootstrap/NavbarCollapse.vue";
import Container from "@/components/mdbootstrap/Container.vue";
import Dropdown from "@/components/mdbootstrap/Dropdown.vue";
import DropdownItem from "@/components/mdbootstrap/DropdownItem.vue";
import DropdownMenu from "@/components/mdbootstrap/DropdownMenu.vue";
import DropdownToggle from "@/components/mdbootstrap/DropdownToggle.vue";
import drop from "@/components/mdbootstrap/mixins/drop";
import Mdinput from "@/components/mdbootstrap/MdInput.vue";

export default {
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Mdinput
  },
  mixins: [drop]
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.fixed-top {
  position: sticky;
}
</style>
