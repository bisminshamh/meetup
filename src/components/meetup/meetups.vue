<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="info" v-for="meetup in meetups" :key="meetup.id">
          <v-container fluid mb-5>
            <v-layout >
              <v-flex xs3>
                <v-img
      height="150px"
     :src="meetup.imageUrl">
    </v-img>
              </v-flex>
              <v-flex>
                <v-card-title>
                  <div>
                  <h1 class="white--text">{{meetup.title}}</h1>
                  <h5 class="white--text">{{meetup.date}}</h5>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat :to="'/meetups/'+ meetup.id"><v-icon left>mdi-arrow-right</v-icon>view Meetup </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.meetups
    }
  }
}
</script>
