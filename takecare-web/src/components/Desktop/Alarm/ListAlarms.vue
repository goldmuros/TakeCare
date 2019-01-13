<template>
  <v-flex md9>
    <v-container fluid class="grid-list-md text-xs-center">
      <v-layout row wrap>
        <v-flex md12 v-for="alarm in alarms" :key="alarm.drug">
          <v-card class='ma-3 pl-3 text-xs-left elevation-5 lighten-1'>
            <v-container>
              <v-layout>
                <v-flex md12>
                  <span>Name: </span>
                  <span v-text="alarm.drug"></span>
                </v-flex>
                <v-flex md12>
                  <span>Dose: </span>
                  <span v-text="alarm.dose"></span>
                </v-flex>
                <v-flex md12>
                  <span>Time: </span>
                  <span v-text="alarm.timeTakePill"></span>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md12>
                  <span>Date Start: </span>
                  <span v-text="alarm.dateStart"></span>
                </v-flex>
                <v-flex md12>
                  <span>Date End: </span>
                  <span v-text="alarm.dateEnd"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  computed: {
    alarms () {
      let patient = this.$store.getters.getPatient

      return patient.alarms
    }
  }
}
</script>
