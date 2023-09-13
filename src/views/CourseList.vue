<script setup>
import CourseServices from "../services/courseServices";
import Utils from "../config/utils.js";
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const courses = ref([]);
const message = ref("View, edit, or delete courses.");
const headers = [
  {
    text: 'Course Number',
    align: 'left',
    sortable: false, 
    value: 'course_number'
  },
  {text: 'Name', value: 'course_name'}
]

const editCourse = (course) => {
  router.push({ name: "edit", params: { id: course.course_number } });
};

const deleteCourse = (course) => {
  console.log('attempting deletion');
  CourseServices.delete(course.course_number)
    .then(() => {
      console.log('deletion successful');
      retrieveCourses();
    })
    .catch((e) => {
      console.log('deletion failed');
      message.value = e.response.data.message;
    });
};

const retrieveCourses = () => {
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();

// const data = () => {
//   return{
//     headers: [
//       {
//         text: 'Course Number',
//         align: 'left',
//         sortable: false,
//         value: 'course_number',
//       },
//       {text: 'Name', value: 'course_name'}
//     ]
//   };
// };


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
            <!-- <v-data-table
              :headers="headers"
              :items="courses"
              :items-per-page="5"
            >
            <template v-slot:items="props">
              <td>{{ props.item.course_number }}</td>
              <td>{{ props.item.course_name }}</td>



            </template>
            
          </v-data-table> -->

            <tr v-for="(item, index) in courses" :key="item.title" style="border: 5px solid transparent">
              <td>{{ item.course_name }}</td>
              <td>{{ item.course_number }}</td>
              <td>
                <v-icon small class="mx-4" @click="editCourse(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small class="mx-4" @click="viewCourse(item)">
                  mdi-format-list-bulleted-type
                </v-icon>
                <v-icon small class="mx-4" @click="deleteCourse(item)">
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
