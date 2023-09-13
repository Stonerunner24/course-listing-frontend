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
            <b-overlay :show="show" rounded="sm">
                <v-card elevation="5" rounded="lg" class="pa-10">
                    <v-card-title>course number{{ course.number }} course name{{ course.name }}</v-card-title>
                    <v-card-text class="pa-4">Hours: {{ hours }}</v-card-text>
                    <v-card-text class="pa-4">description{{ course.description }}</v-card-text>
                    <v-btn rounded="lg" elevation="2" class="float-right" color="#D5DFE7">
                        <div class="v-button_content">Close</div>
                    </v-btn>
                </v-card>
            </b-overlay>
        </v-container>
    </div>
</template>