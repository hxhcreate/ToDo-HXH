<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="grey--text">
        <span class="font-weight-light text-uppercase ">Todo</span>
        <span>XuHao</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <!--drop down menu-->
      <v-menu color="grey">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" text v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="75" class="center">
            <img src="/avatar-1.png">
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">
            The Net XuHao
          </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  name: "Navbar",
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'dashboard', text: 'Dashboard', route: '/'},
        {icon: 'folder', text: 'My Projects', route: '/projects'},
        {icon: 'person', text: 'Team', route: '/team'},
      ],
    }
  }
}
</script>

<style scoped>

</style>