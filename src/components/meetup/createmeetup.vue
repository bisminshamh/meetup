<template>
<v-container>
    <v-layout row>
      <v-flex  >
        <h1 class="red--text">CREATE YOUR MEETUP</h1>
      </v-flex>
    </v-layout>
    <v-form @submit.prevent="oncreateMeetup">
      <v-flex  xs12 sm6 offset-sm3>
        <v-text-field
            label="Title"
            name="title"
            id="title"
            v-model="title">
        </v-text-field>
        <v-text-field
            label="Location"
            name="location"
            id="location"
            prepend-inner-icon="mdi-map-marker"
             v-model="location">
        </v-text-field>
        <v-text-field
            label="image URL"
            name="imageUrl"
            id="image-url"
            prepend-inner-icon="mdi-image"
             v-model="imageUrl">
        </v-text-field>
      <v-flex>
        <img :src="imageUrl" height="200">
      </v-flex>
        <v-textarea
          name="description"
          label="Description"
          id="description"
           v-model="description"
        ></v-textarea>
        <v-btn class="primary" :disabled="!formIsValid" type="form">CREATE</v-btn>

</v-flex>
  </v-form>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.description !== '' &&
      this.imageUrl !== ''
    }
  },
  methods: {
    oncreateMeetup () {
      const meetupData = {
        title: this.title,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
