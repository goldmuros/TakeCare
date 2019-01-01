<template>
  <div mt-0>
    <v-container fluid class="grid-list-md text-xs-center" v-if="!isMobile">
      <v-layout row wrap>
        
      </v-layout>
    </v-container>

    <v-container fluid class="grid-list-xs grid-list-sm text-xs-center" v-if="isMobile">
      <v-layout row wrap>
        
      </v-layout>
    </v-container>
  </div>  
</template>

<script>
export default {
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

<style>

</style>
