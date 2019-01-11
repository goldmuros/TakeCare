<template>
  <v-flex md3>
    <v-layout row class="scroll-patients">
      <v-flex md12>
        <v-card class='ma-3 pl-3 text-xs-left elevation-5 lighten-1 cursor'>
          <v-list>
            <!-- reveer como mostrar los que no tienen grupo o eliminar los grupos -->
            <v-list-tile v-for="patient in patients" :key="patient.groupId">
              <v-list-tile-content>
                <v-list-tile-title>{{ patient.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  computed: {
    patients () {
      return this.$store.getters.getPatients
    }
  }
}
</script>

<style>
  .scroll-patients {
    padding-top: 0px;
    overflow-y: auto;
  }

  .cursor {
    pointer-events: auto;
  }
</style>