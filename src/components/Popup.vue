<template>
  <v-dialog mat-width="600px">
    <template  v-slot:activator="{on, attrs}">
      <v-btn flat class="success" v-bind="attrs" v-on="on">
        Add new Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add new Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Popup"
}
</script>

<style scoped>

</style>