<template>
  <nav
    :class="`navbar navbar-expand-lg navbar-${color} bg-${backgroundColor} p-0 ${classes}`"
    aria-label="Site navigation bar"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="index.html"
      ><slot>{{ title }}</slot></a>
      <Button
        classes="navbar-toggler"
        toggle="collapse"
        target=".navbar-collapse"
        aria-controls=".navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation links"
      >
        <span class="navbar-toggler-icon" />
      </Button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li
            v-for="(link, index) in processLinks"
            :key="index"
            class="nav-item"
          >
            <a
              v-if="link.active"
              class="nav-link active"
              :href="link.url"
            >
              {{ link.title }}
              <span class="visually-hidden">(current)</span>
            </a>
            <a
              v-else
              class="nav-link"
              :href="link.url"
            >{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap';
import Button from './Button.vue'

export default {
  name: 'Navbar',
  components: {
    Button
  },
  props: {
    title: {
      type:String,
      default: ''
    },
    color: {
      type:String,
      default: 'dark'
    },
    backgroundColor: {
      type:String,
      default: 'primary'
    },
    classes: {
      type:String,
      default: ''
    },
    filename: {
      type:String,
      default: ''
    },
    links: {
      type:Array,
      required: true
    },
  },
  computed: {
    processLinks() {
      for (let l of this.links) {
        if (l.url === this.filename) {
          l.active = true;
        }
        else {
          l.active = false;
        }
      }
      return this.links;
    }
  }
}
</script>

<style scoped>
.navbar-collapse.show, .navbar-collapse.collapsing {
  /* Compensate for the burger menu border */
  margin-top: 0.25rem;
}

.nav-item .nav-link {
  border-top: 1px solid rgba(255,255,255,.1);
  border-left: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid rgba(0,0,0,.2);
  border-right: 1px solid rgba(0,0,0,.2);

  /* Use the same text padding in the collapsed menu as the full menu */
  padding-left: 0.5rem;
}

.nav-link:focus, .nav-link:hover {
  background-color: rgba(255,255,255,.1);
  color: #fff;
}

.nav-link.active {
  background-color: rgba(0,0,0,.5);
}
</style>
