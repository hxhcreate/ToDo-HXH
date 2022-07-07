<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">

<!--      <v-layout row class="mb-3">-->
<!--        <v-tooltip top>-->
<!--          <template v-slot:activator="{on, attrs}">-->
<!--            <v-btn small text clor="grey" @click="sortBy('title')"-->
<!--             v-bind="attrs" v-on="on"-->
<!--            >-->
<!--              <v-icon light>folder</v-icon>-->
<!--              <span class="caption text-lowercase">By project name</span>-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <span>Sort projects by project name</span>-->
<!--        </v-tooltip>-->

<!--        <v-tooltip top>-->
<!--          <template v-slot:activator="{on, attrs}">-->
<!--            <v-btn small text clor="grey" @click="sortBy('person')"-->
<!--                   v-bind="attrs" v-on="on"-->
<!--            >-->
<!--              <v-icon light>person</v-icon>-->
<!--              <span class="caption text-lowercase">By person name</span>-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <span>Sort projects by project name</span>-->
<!--        </v-tooltip>-->
<!--      </v-layout>-->

<!--      <v-card flat v-for="project in projects" :key="project.title">-->
<!--        <v-layout row wrap :class="`pa-3 project ${project.status}`">-->
<!--          <v-flex xs12 md6>-->
<!--            <div class="caption grey&#45;&#45;text">Project title</div>-->
<!--            <div>{{project.title}}</div>-->
<!--          </v-flex>-->
<!--          <v-flex xs6 sm4 md2>-->
<!--            <div class="caption grey&#45;&#45;text">Person</div>-->
<!--            <div>{{project.person}}</div>-->
<!--          </v-flex>-->
<!--          <v-flex xs6 sm4 md2>-->
<!--            <div class="caption grey&#45;&#45;text">Due by</div>-->
<!--            <div>{{project.due}}</div>-->
<!--          </v-flex>-->
<!--          <v-flex xs2 sm4 md2>-->
<!--            <div class="text-right">-->
<!--              <v-chip :class="`${project.status} white&#45;&#45;text caption`">{{project.status}}</v-chip>-->
<!--            </div>-->
<!--          </v-flex>-->
<!--        </v-layout>-->
<!--      </v-card>-->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
