<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn small text clor="grey" @click="sortBy('title')"
             v-bind="attrs" v-on="on"
            >
              <v-icon light>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn small text clor="grey" @click="sortBy('person')"
                   v-bind="attrs" v-on="on"
            >
              <v-icon light>person</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-right">
              <v-chip :class="`${project.status} white--text caption`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb"
import {collection, onSnapshot, query} from "firebase/firestore";

export default {
  name: "Dashboard",

  data() {
    return {
      projects: [{title: 'Design a new website', person: 'Xuhao', due: '1st Feb 2022', status: 'ongoing'},
        {title: 'Learn javascript', person: 'Ke', due: '21th Jan 2022', status: 'complete'},
        {title: 'Have a lunch with professor', person: 'Xuhao', due: '1st Jan 2022', status: 'overdue'},
        {title: 'get to gym', person: 'Ke', due: '1st Jan 2022', status: 'overdue'},
      ]
    }
  },
  created() {
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
  methods: {
    sortBy(prop){
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1: 1)
    }
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 5px solid lightskyblue;
}
.project.ongoing {
  border-left: 5px solid orange;
}
.project.overdue {
  border-left: 5px solid indianred;
}
.v-chip.ongoing{
  background-color:orange!important;
}
.v-chip.complete{
  background-color: lightskyblue!important;
}
.v-chip.overdue{
  background-color:indianred!important;
}
</style>
