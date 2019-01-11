<template>
  <div mt-0>
    <v-container fluid class="grid-list-md text-xs-center" v-if="!isMobile">
      <v-layout row wrap>
        <list-patients></list-patients>
      </v-layout>
    </v-container>

    <v-container fluid class="grid-list-xs grid-list-sm text-xs-center" v-if="isMobile">
      <v-layout row wrap>
        Mobile browser
      </v-layout>
    </v-container>
  </div>  
</template>

<script>
import ListPatients from '@/components/Desktop/Patient/ListPatients.vue'

export default {
  components: {
    ListPatients
  },
  data () {
    return {
      isMobile: false
    }
  },
  created () {
    let mediaQuery = window.matchMedia('(max-width: 959px)')

    if (mediaQuery.matches) {
      this.isMobile = true
    }
  }  
}
</script>
