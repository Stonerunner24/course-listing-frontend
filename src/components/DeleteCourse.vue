<template>
    <div>
        <v-container>
            <b-overlay :show="show" rounded="sm">
                <v-card elevation="5" rounded="lg" class="pa-10">
                    <v-card-title>Delete {{ id }}?</v-card-title>
                    <v-card-text>This action is permanent. Are you sure you want to delete {{ id }}?</v-card-text>
                    <v-card-actions>
                        <v-btn color="red" raised>
                            Delete
                        </v-btn>
                        <v-btn flat>
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </b-overlay>
        </v-container>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    props: {
        id: String // The course number of the course to be deleted, passed in from parent
    }
}
</script>