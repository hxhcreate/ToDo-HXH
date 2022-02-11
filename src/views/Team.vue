<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3 text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avtar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-2">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-action >
              <v-btn small flat color="grey lighten-2" class="">
                <v-icon left small>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {name: 'The Net XuH', role: 'Web developer',avtar:'avatar-1.png'},
        {name: 'Ke', role: 'Graphic designer',avtar:'avatar-2.png'},
        {name: 'Chun Li', role: 'Web developer',avtar:'avatar-3.png'},
        {name: 'Lct', role: 'Social media maverick',avtar:'avatar-4.png'},
        {name: 'Yoshi', role: 'Sales gury',avtar:'avatar-5.png'},
      ]
    }
  }
}
</script>

<style scoped>

</style>