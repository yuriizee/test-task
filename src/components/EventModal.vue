<template>
    <div>
        <b-modal id="eventInfoModal" centered hide-footer :title="info.title">
            <div class="d-block text-left">

                <div class="text-center">
                    <b-badge variant="success">{{ info.start }}</b-badge>
                    -
                    <b-badge variant="danger">{{ info.end }}</b-badge>
                </div>

                <p>{{ info.message }}</p>

                <b-img v-if="!!info.media && info.media.image" center thumbnail fluid :src="info.media.image"
                       alt="image"></b-img>

                <audio v-if="!!info.media && info.media.audio" controls>
                    <source :src="info.media.audio" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>

            </div>
            <b-button class="mt-3" @click="$emit('destroy', event.id)" variant="outline-danger" block>Видалити
            </b-button>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'EventModal',
        props: {
            event: Object
        },
        computed: {
            ...mapGetters('events', {'info': 'event'})
        }
    }
</script>
