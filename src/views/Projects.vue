<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content >
            <v-card flat>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">due by {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>
import db from "@/fb";
import { collection, query, onSnapshot } from "firebase/firestore";
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {title: 'Design a new website', person: 'XuHao', due: '1st Feb 2022', status: 'ongoing',content:'lorem jadfihu j fdih uhjoa jfdj ' },
        {title: 'Learn javascript', person: 'Ke', due: '21th Jan 2022', status: 'complete',content: 'lorem' },
        {title: 'Have a lunch with professor', person: 'XuHao', due: '1st Jan 2022', status: 'overdue',content: 'lorem' },
        {title: 'get to gym', person: 'Ke', due: '1st Jan 2022', status: 'overdue',content: 'lorem' },
      ]
    }
  },
  created()
  {
    const q = query(collection(db, 'projects'))
    onSnapshot(q , (snapShop) => {
      snapShop.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data()
          })
        }
      })
    })
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'XuHao'
      })
    }
  }
}
</script>

<style scoped>

</style>
