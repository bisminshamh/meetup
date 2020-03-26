<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card v-for="meetup in meetups" :key="meetup.id">
          <v-card-title>
            <h5 class="error--text">{{meetup.title}}</h5>
          </v-card-title>
          <v-img
      height="150px"
      :src="meetup.imageUrl">
    </v-img>
    <v-card-text>
    <div class="info--text">{{meetup.date}}where it takes place</div>
    <div>ksnfsilfhlwenlsiflskdfjlisufhisufhiwfuhiuuiluhefuhffuhuifhsfhsdfsdfsdfjsiodfjsdiofjsdiofjsdjfojsdoijfisj</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="red">Register</v-btn>
        </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    meetups () {
      return this.$store.getters.meetup(this.id)
    }

  }
}
</script>
