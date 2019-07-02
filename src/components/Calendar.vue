<template>
    <div>
        <h1 class="h1 text-center m-3 mb-5">Календар подій</h1>
        <div class="row">
            <div class="col-3">
                <event-form></event-form>
            </div>
            <div class="col-9">
                <full-calendar :events="events" :config="config" @event-selected="show"></full-calendar>
            </div>
        </div>

        <event-modal :event="selectedEvent"></event-modal>
    </div>
</template>

<script>
  import 'fullcalendar/dist/fullcalendar.css'
  import 'fullcalendar/dist/locale/uk'
  import EventForm from "./EventForm";
  import { mapState } from 'vuex'
  import EventModal from "./EventModal";
  export default {
    name: "Calendar",
    components: {EventModal, EventForm},
    data() {
      return {
        config: {
          defaultView: 'month',
          selectHelper: false,
        },
        selectedEvent: {
          title  : null,
          start  : null,
          data: {
            media: {}
          }
        }
      }
    },
    methods: {
      show(e) {
        this.selectedEvent = e
        this.$bvModal.show('eventInfoModal')
      }
    },
    computed: {
      ...mapState('global', ['events'])
    }
  }
</script>

<style scoped>

</style>