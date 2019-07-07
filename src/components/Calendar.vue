<template>
    <div>
        <h1 class="h1 text-center m-3 mb-5">Календар подій</h1>
        <div class="row">
            <div class="col-3">
                <event-form></event-form>
            </div>
            <div class="col-9">
                <full-calendar @day-click="te" :events="events" :config="config" @event-selected="show"></full-calendar>
            </div>
        </div>

        <event-modal @destroy="destroyAction" :event="selectedEvent"></event-modal>
    </div>
</template>

<script>
    import 'fullcalendar/dist/fullcalendar.css'
    import 'fullcalendar/dist/locale/uk'
    import EventForm from "./EventForm";
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import EventModal from "./EventModal";
    import Events from './../store/events'

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
                    title: null,
                    start: null,
                    data: {
                        media: {}
                    }
                }
            }
        },
        methods: {
            ...mapActions('events', ['getMonthEvents', 'getEvent', 'destroy', 'create', 'destroy']),
            ...mapMutations('events', ['setEvents']),
            async show(e) {
                this.selectedEvent = e
                await this.getEvent(e.id)
                this.$bvModal.show('eventInfoModal')
            },
            te(view, element) {
                console.log(view, element)
            },
            destroyAction(eventId) {
                this.destroy(eventId)
                    .then((response) => {
                        if (response.status === 200) {
                            this.$bvModal.hide('eventInfoModal')
                            this.setEvents(
                                _.remove(this.events, (o) => {
                                    return o.id !== eventId;
                                })
                            )
                        }
                    })
            }
        },
        computed: {
            ...mapGetters('events', ['events'])
        },
        created() {
            this.$store.registerModule('events', Events)
            this.getMonthEvents()
        },
        beforeDestroy() {
            this.$store.unregisterModule('events')
        },
    }
</script>

<style scoped>

</style>