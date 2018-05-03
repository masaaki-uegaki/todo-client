<template>
  <li :is="tag" :class="[className, {'ripple-parent': waves}]" @click="wave">
    <router-link :to="to" class="nav-link" :exact="exact"><slot></slot></router-link>
  </li>
</template>

<script>
//
//
//
//
//
//

import classNames from "classnames";
import waves from "./mixins/waves";

export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: "#"
    },
    waves: {
      type: Boolean,
      default: true
    },
    wavesFixed: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames("nav-item", this.active ? "active" : "")
    };
  },
  mixins: [waves]
};
</script>

<style scoped>
.navbar.navbar-dark .breadcrumb .nav-item > .nav-link.router-link-active,
.navbar.navbar-dark .navbar-nav .nav-item > .nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
