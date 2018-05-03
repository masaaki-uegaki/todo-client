<template>
  <div id="app">
      <!--Navbar-->
      <navbar position="top" className="indigo" name="ToDo" href="/">
        <navbar-collapse>
          <navbar-nav>
            <navbar-item href="/" :active="true">Home</navbar-item>
            <navbar-item href="/about">About</navbar-item>
            <navbar-item href="/tasks">Tasks</navbar-item>
            <!-- Dropdown -->
            <navbar-item-dropdown label="Dropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </navbar-item-dropdown>
            <!-- </ul> -->
            <!-- Links -->
          </navbar-nav>
            <!-- Search form -->
          <form class="form-inline">
            <input class="form-control mr-auto p-2" type="text" placeholder="Search" aria-label="Search">
          </form>
        </navbar-collapse>
          <!-- Collapsible content -->
      </navbar>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import NavbarItem from "@/components/navbar/NavbarItem";
import NavbarItemDropdown from "@/components/navbar/NavbarItemDropdown";
import NavbarNav from "@/components/navbar/NavbarNav";
import NavbarCollapse from "@/components/navbar/NavbarCollapse";

export default {
  components: {
    Navbar,
    NavbarItem,
    NavbarItemDropdown,
    NavbarNav,
    NavbarCollapse
  }
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
