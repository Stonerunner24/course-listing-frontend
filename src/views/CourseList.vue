<script setup>
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import DeleteCourse from "../components/DeleteCourse.vue"


const router = useRouter();
const courses = ref([]);
const message = ref("View, edit, or delete courses.");
const deleteModal = ref(false);
const selectedCourse = ref(null);
const headers = [
  {
    text: 'Course Number',
    align: 'left',
    sortable: false, 
    value: 'course_number'
  },
  {text: 'Name', value: 'course_name'}
]

const addCourse = () => {
  router.push({ name: 'add'});
}

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.course_number } });
};
const viewCourse = (course) => {
  router.push({name: "view", params: {course}})
}

const handleDelete = (course_number) => {
  console.log(course_number);
  deleteModal.value = false; 
  selectedCourse.value = null;
  deleteCourse(course_number);
}

const deleteCourse = (course_number) => {
  console.log(course_number);
  CourseServices.delete(course_number)
    .then(() => {
      retrieveCourses();
    })
    .catch((e) => {
      console.log('deletion failed');
      message.value = e.response.data.message;
    });
};

const retrieveCourses = () => {
  console.log('retrieving courses');
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();



</script>

<template>
  <div>
    <v-container>
      <br /><br />
      <v-card>
        <v-card-title> Courses </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
          <v-btn 
            class="float-right"
            rounded="lg"
            color="bluebutton"
            variant="elevated"
            @click="addCourse()"
          >
            Add New Course
          </v-btn>
        </v-card-text>
        <v-table>
          <tbody>
            <tr v-for="(item, index) in courses" :key="item.course_number" style="border: 5px solid transparent">
              <td>{{ item.course_name }}</td>
              <td>{{ item.course_number }}</td>
              <td>
                <v-icon small class="mx-4" @click="editCourse(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewCourse(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click.stop="(deleteModal = true), (selectedCourse = item.course_number)">
                  mdi-trash-can
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
    <v-dialog
        v-model="deleteModal"
        activator="parent"
        width="auto"
      >
      <DeleteCourse 
        :id="selectedCourse"
        @delete="handleDelete"
        @cancel="(deleteModal = false), (selectedCourse = null)"/>
      
    </v-dialog>
  </div>
</template>
