<script setup>
import { ref, onMounted } from "vue";

import courseServices from "../services/courseServices";

import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);

const course = ref({

});
const message = ref("Enter data and click save");

const props = defineProps({
  id: {
    required: true,

  },
});

const retrieveCourse = async () => {
  
  try {
    const response = await courseServices.get(props.id);
    //console.log(response)
    course.value = response.data;
    console.log("course values: ")
    console.log(course.value)
  } catch (e) {
    

    message.value = e.response.data.message;
  }
};


const updateCourse = async () => {
  const data = {
    department: course.value.department,
    course_number: course.value.course_number,
    course_level: parseInt(Math.floor(course.value.course_number/1000)),
    credit_hours:course.value.credit_hours,
    course_name: course.value.course_name,
    description: course.value.description,
  };
  try {
    const response = await courseServices.update(props.id, data);
    course.value.id = response.data.id;
    router.push({ name: "courses" });

  } catch (e) {
    message.value = e.response.data.message;
  }
};

const cancel = () => {

  router.push({ name: "courses" });
};

onMounted(() => {
  retrieveCourse();

});
</script>

<template>
  <div>
    <v-container>
      <v-toolbar>

        <v-toolbar-title>Course Edit</v-toolbar-title>
      </v-toolbar>

      <br />
      <br />
      <h4>{{ message }}</h4>
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <p>Credit hours (0-4)</p>
        <v-text-field
          v-model="course.credit_hours"></v-text-field>
        <p>Department (ABCD)</p>
        <v-text-field
          v-model="course.department"
          id="department"
          :counter="4"
          required
        ></v-text-field>
        <p>Course number (DEPT-1234)</p>
        <v-text-field
          v-model="course.course_number"
          id="courseNumber"
          :counter="50"
          
          
          required
        ></v-text-field>
        <p>Course Name</p>
        <v-text-field
          v-model="course.course_name"
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

          @click="updateCourse()"

        >
          Save
        </v-btn>


        <v-btn color="error" class="mr-4" @click="cancel()">Cancel</v-btn>
      </v-form>
      
      

    </v-container>
  </div>
</template>
