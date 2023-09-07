<script setup>
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("View, edit, or delete courses.");

const editTutorial = (tutorial) => {
  router.push({ name: "edit", params: { id: tutorial.id } });
};

const viewTutorial = (tutorial) => {
  router.push({ name: "view", params: { id: tutorial.id } });
};

const deleteTutorial = (tutorial) => {
  CourseServices.delete(tutorial.id)
    .then(() => {
      retrieveTutorials();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveTutorials = () => {
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveTutorials();
</script>

<template>
  <div>
    <v-container>
      <br /><br />
      <v-card>
        <v-card-title> Courses </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <v-table>
          <!-- <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Description</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead> -->
          <tbody>
            <tr v-for="(item, index) in courses" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.description }}</td>
              <td>
                <v-icon small class="mx-4" @click="editTutorial(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewTutorial(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteTutorial(item)">
                  mdi-trash-can
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template>
