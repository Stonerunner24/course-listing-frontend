<script setup>
    import {ref, onMounted} from 'vue'
    import courseServices from '../services/courseServices';

    const course = ({
        department: "",
        number: "",
        level: "",
        hours: "",
        name: "",
        description:""
    })

    const id = ref(null)

    onMounted(() => {
        courseServices.get(id.value)
            .then((response) => {
                 course.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    })
</script>

<template>
    <div>
        <v-container>
            <v-card elevation="5">
                <v-card-title>course number{{ course.number }} course name{{ course.name }}</v-card-title>
                <v-card-text>description{{ course.description }}</v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

