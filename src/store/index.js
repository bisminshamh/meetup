import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        id: '1',
        title: 'INDIA',
        date: '2017-07-2016'
      },

      {
        imageUrl: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/Article-Images-2020/New-York/BBT-Night-Article-IMG-1-Ferry.jpg',
        id: '2',
        title: 'NEWYORK',
        date: '2017-07-2017'
      },

      {
        imageUrl: 'https://i.ytimg.com/vi/VJOLtWzbNHo/maxresdefault.jpg',
        id: '3',
        title: 'LA',
        date: '2017-07-2018'
      },

      {
        imageUrl: 'https://s3.amazonaws.com/captainkimo/wp-content/uploads/2017/08/17214532/Toronto-City-Hall-Night-Lights-Downtown-Ontario-Canada.jpg',
        id: '4',
        title: 'CANADA',
        date: '2017-07-2019'
      }
    ],
    user: {
      id: 'sds',
      registeredMeetups: ['1']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.meetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imageUrl: payload.imageUrl,
        date: payload.date,
        id: '5'
      }
      commit('createMeetup', meetup)
    }
  },
  modules: {
  },
  getters: {
    meetups (state) {
      return state.meetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    meetup (state) {
      return (meetupId) => {
        return state.meetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
