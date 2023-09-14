<script setup>
import { ref, onMounted } from "vue";
import CourseServices from "../services/courseServices";

import Utils from "../config/utils.js";
import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);
const course = ref({
  creditHours:null,
  courseName: null,
  description: null,
  department: null,
  courseNumber: null,
  courseLevel:null,
});
const message = ref("Enter data and click save");


const savecourse = () => {
  
  const level = course.value.courseNumber.split("-");
  console.log(level[1])
  console.log(level[0])
  console.log(parseInt(Math.floor(level[1]/1000)))
  const data = {
    department: course.value.department,
    course_number: course.value.courseNumber,
    course_level: parseInt(level[1].charAt(0)),
    credit_hours:course.value.creditHours,
    course_name: course.value.courseName,
    description: course.value.description,

    //published: true,
    //userId: user.userId,
    
  };
  
  
  
  console.log("department " + data.department)
  console.log("course number " + data.department)
  console.log("credit_hours " + data.course_name)
  console.log("course_level " + data.course_level)
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
        <v-toolbar-title>Course Add</v-toolbar-title>
      </v-toolbar>

      <br />
      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <p>Credit hours (0-4)</p>
        <v-text-field
          v-model="course.creditHours"></v-text-field>
        <p>Department (ABCD)</p>
        <v-text-field
          v-model="course.department"
          id="department"
          :counter="4"
          required
        ></v-text-field>
        <p>Course number (DEPT-1234)</p>
        <v-text-field
          v-model="course.courseNumber"
          id="courseNumber"
          :counter="50"
          
          
          required
        ></v-text-field>
        <p>Course Name</p>
        <v-text-field
          v-model="course.courseName"
          id="courseName"
          :counter="255"
          required 
          ></v-text-field>
        <p>Course description</p>
        <v-text-field
          v-model="course.description"
          id="courseDescription"
          :counter="255"
          required></v-text-field>
        
        

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
