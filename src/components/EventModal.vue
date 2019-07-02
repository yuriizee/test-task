<template>
    <div>
        <b-modal id="eventInfoModal" centered hide-footer :title="event.title">
            <div class="d-block text-left">
                <p><b>Початок:</b>{{ event.start }}</p>
                <p><b>Завершення:</b>{{ event.end }}</p>

                <b-img v-if="event.data.media.image" center thumbnail fluid :src="event.data.media.image" alt="image"></b-img>

                <audio v-if="event.data.media.audio" controls>
                    <source :src="event.data.media.audio" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>

            </div>
            <b-button class="mt-3" variant="outline-danger" block>Видалити</b-button>
        </b-modal>
    </div>
</template>

<script>
  export default {
    name: "EventModal",
    props: {
      event: Object
    },
    data() {
      return {
        audio: null
      }
    }
  }
</script>

<style scoped>

</style>