<template>
  <v-dialog max-width="600px" v-model="isDialog">
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
          <v-menu :close-on-content-click="false"
                  v-model="date_picker"
                  max-width="290">
            <template v-slot:activator="{on, attrs}">
              <v-text-field
                  :value="formattedDate"
                  label="Due date"
                  prepend-icon="date_range"
                  v-bind="attrs"
                  v-on="on"
                  clearable
                  readonly
                  @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date"
              @change="date_picker = false"
            ></v-date-picker>
          </v-menu>

          <v-btn text class="success mx-0 mt-3" @click="submit"
                 :loading="isLoading"
          >add project
            <v-icon right dark>upload</v-icon>
          </v-btn>

        </v-form>
      </v-card-text>
    </v-card>

  </v-dialog>
</template>

<script>
import {format, parseISO} from 'date-fns'

//firestore database
import db from "@/fb"
import {collection, addDoc} from "firebase/firestore"
export default {
  name: "Popup",
  data() {
    return {
      title: '',
      content: '',
      date: null,
      date_picker: false,
      //表单验证的写法
      inputRules: [
          v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      //按钮加载
      isLoading: false,
      //会话窗口自动关闭
      isDialog: false
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        try {
          const docRef = await addDoc(collection(db, "projects"), {
            title: this.title,
            content: this.content,
            due: format(parseISO(this.date), 'do MMM yyyy'),
            person: 'XuHao',
            status: 'ongoing'
          })
          console.log("Document written with ID: ", docRef.id)
          this.isLoading = false
          this.isDialog = false
          this.$emit('projectAdded')
        } catch (e) {
          console.error(e)
        }

      }
    }
  },
  computed: {
    formattedDate() {
      return this.date ? format(parseISO(this.date), 'do MMM yyyy') : ''
    }
  }
}
</script>

<style scoped>

</style>
