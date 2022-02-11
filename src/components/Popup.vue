<template>
  <v-dialog max-width="600px">
    <template  v-slot:activator="{on, attrs}">
      <v-btn text class="success" v-bind="attrs" v-on="on">
        Add new Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add new Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">

          <v-text-field label="Title"
                        v-model="title"
                        prepend-icon="folder"
                        :rules="inputRules"
          ></v-text-field>
          <v-textarea label="Info"
                      v-model="content"
                      prepend-icon="edit"
                      :rules="inputRules"></v-textarea>

        <!--          date pick-->
          <v-menu :close-on-content-click="true"
                  v-model="date_picker"
                  max-width="290">
            <template v-slot:activator="{on, attrs}">
              <v-text-field
                  label="Due date"
                  prepend-icon="date_range"
                  v-bind="attrs" v-on="on"
                  :value="formattedDate"
                  clearable
                  readonly
                  @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date"
              @click="date_picker = false"
            ></v-date-picker>
          </v-menu>

          <v-btn text class="success mx-0 mt-3" @click="submit">add project</v-btn>

        </v-form>
      </v-card-text>
    </v-card>

  </v-dialog>
</template>

<script>
import {format, parseISO} from 'date-fns'
export default {
  name: "Popup",
  data() {
    return {
      title: '',
      content: '',
      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      date_picker: false,
      //表单验证的写法
      inputRules: [
          v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()){
        console.log(this.title, this.content)
      }
    }
  },
  computed: {
    formattedDate() {
      return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
    }
  }
}
</script>

<style scoped>

</style>