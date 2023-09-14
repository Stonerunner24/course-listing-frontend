<script setup>
import { ref, onMounted } from "vue";
import CourseServices from "../services/courseServices";

import Utils from "../config/utils.js";
import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);
const course = ref({
  creditHours: 0,
  courseName: "",
  description: "",
  department: "",
  courseNumber: "",
  courseLevel:0,
});
const message = ref("Enter data and click save");


const savecourse = () => {
  const data = {
    department: course.value.department,
    course_number: course.value.department + '-' + course.value.courseNumber,
    coures_level: Math.floor(course.value.courseNumber/1000),
    credit_hours:course.value.creditHours,
    course_name: course.value.courseName,
    description: course.value.description,

    //published: true,
    //userId: user.userId,
    
  };
  
  console.log("department " + data.department)
  console.log("course number ")
  CourseServices.create(data)
    .then((response) => {
      course.value.id = response.data.id;
      console.log("add " + response.data);
      router.push({ name: "courses" });
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const cancel = () => {
  router.push({ name: "courses" });
};

onMounted(() => {
 
});


</script>

<template>
  <div>
    <v-container>
      <v-toolbar>
        <v-toolbar-title>course Add</v-toolbar-title>
      </v-toolbar>

      <br />
      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <p>credit hours</p>
        <v-text-field
          v-model="course.creditHours"></v-text-field>
        <p>department</p>
        <v-text-field
          v-model="course.department"
          id="department"
          :counter="4"
          required
        ></v-text-field>
        <p>course number</p>
        <v-text-field
          v-model="course.courseNumber"
          id="courseNumber"
          :counter="50"
          
          
          required
        ></v-text-field>
        <p>course Name</p>
        <v-text-field
          v-model="course.courseName"
          id="courseName"
          required 
          ></v-text-field>
        <p>course description</p>
        <v-text-field
          v-model="course.description"></v-text-field>
        
        

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="savecourse()"
        >
          Save
        </v-btn>

        <v-btn color="error" class="mr-4" @click="cancel()">Cancel</v-btn>
      </v-form>
      
      
    </v-container>
  </div>
</template>
