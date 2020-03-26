<template>
  <v-container>
    <v-layout row wrap class="text-center" mb-2>
      <v-flex>
        <v-btn large router to="/meetups" color="primary">Explore Meetup</v-btn>
      </v-flex>
      <v-flex class="text-center">
        <v-btn large router to="/meetup/new" color="primary"
          >Organize Meetups</v-btn
        >
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-carousel>
        <v-carousel-item
          v-for=" meetup in meetups"
          :key="meetup.id"
          :src="meetup.imageUrl"
          style="cursor: pointer"
          @click="onLoadMeetup(meetup.id)">
          <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.meetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/', +id)
    }
  }
}
</script>
<style scoped>
.title{
position: absolute;
 bottom: 5Opx;
background-color: rgba(0,0,0,0.5);
color: white;
font-size: 2em;
padding: 30px;
}
</style>
