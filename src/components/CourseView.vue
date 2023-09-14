<script>
    import {ref, onMounted} from 'vue'
    import courseServices from '../services/courseServices';


    export default {
    props: {
        course: Object,
    },
        emits: ['cancel']
    }
</script>


<template>
    <div>
        <v-container>
                <v-card elevation="5" rounded="lg" class="pa-10">
                    <v-card-title>{{ course.course_number }} {{ course.course_name }}</v-card-title>
                    <v-card-text class="pa-4">Hours: {{ course.credit_hours }}</v-card-text>
                    <v-card-text class="pa-4">{{ course.description }}</v-card-text>
                    <v-btn @click="$emit('cancel')" rounded="lg" elevation="2" class="float-right" color="#D5DFE7">
                        <div class="v-button_content">Close</div>
                    </v-btn>
                </v-card>
        </v-container>
    </div>
</template>