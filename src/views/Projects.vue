<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
<!--      <v-expansion-panels>-->
<!--        <v-expansion-panel v-for="project in myProjects" :key="project.title">-->
<!--          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>-->
<!--          <v-expansion-panel-content >-->
<!--            <v-card flat>-->
<!--              <v-card-text class="px-4 grey&#45;&#45;text">-->
<!--                <div class="font-weight-bold">due by {{project.due}}</div>-->
<!--                <div>{{project.content}}</div>-->
<!--              </v-card-text>-->
<!--            </v-card>-->
<!--          </v-expansion-panel-content>-->
<!--        </v-expansion-panel>-->
<!--      </v-expansion-panels>-->

    </v-container>

  </div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
    }
  },
  created()
  {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
