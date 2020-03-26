<template>
  <v-app>
     <v-navigation-drawer temporary
      v-model="sideNav"
      app dark class="blue lighten-1">
      <v-list dense>
        <v-list-item link v-for="item in menuItems" :key="item.title" :to="item.Link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="blue lighten-1" >
      <v-app-bar-nav-icon @click.stop="sideNav =!sideNav" />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"> MEETUP</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" justify="space-around">
        <v-btn depressed color="blue lighten-1"  v-for="item in menuItems" :key="item.title" :to="item.Link">
          <v-icon left>{{item.icon}}</v-icon>{{item.title}}
        </v-btn>
        </v-row>
    </v-app-bar>
       <v-content>
         <v-container>
      <router-view></router-view>
    </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      sideNav: null,
      menuItems: [
        { icon: 'mdi-account-supervisor-outline', title: 'VIEW MEETUPS', Link: '/meetups' },
        { icon: 'mdi-account-multiple-plus-outline', title: 'ORGANIZE MEETUP', Link: '/meetup/new' },
        { icon: 'mdi-face-profile', title: 'PROFILE', Link: '/profile' },
        { icon: 'mdi-login', title: 'SIGN-IN', Link: '/signin' },
        { icon: 'mdi-account-check-outline', title: 'SIGN-UP', Link: '/signup' }
      ]
    }
  }
}
</script>
