<template>
    <form>
        <div class="form-group">
            <label for="event-name">Назва події</label>
            <input type="text" v-model="name" class="form-control" id="event-name" placeholder="введіть назву події">
        </div>

        <div class="form-group grouped">
            <p class="h6 pb-1">Початок</p>
            <div class="form">
                <div class="form-group">
                    <label for="event-start-date">Дата</label>
                    <b-form-input id="event-start-date" v-model="startDay" :type="'date'"></b-form-input>
                </div>
                <div class="form-group">
                    <label for="event-start-time">Час</label>
                    <b-form-input id="event-start-time" v-model="startTime" :type="'time'"></b-form-input>
                </div>
            </div>
        </div>

        <div class="form-group grouped">
            <p class="h6 pb-1">Закінчення</p>
            <div class="form">
                <div class="form-group">
                    <label for="event-end-date">Дата</label>
                    <b-form-input id="event-end-date" v-model="endDay" :type="'date'"></b-form-input>
                </div>
                <div class="form-group">
                    <label for="event-end-time">Час</label>
                    <b-form-input id="event-end-time" v-model="endTime" :type="'time'"></b-form-input>
                </div>
            </div>
        </div>

        <div class="form-check mb-3">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="inform">
                Сповістити
            </label>
        </div>

        <div v-if="inform" class="form-group grouped">
            <p class="h6 pb-1">Сповістити</p>
            <div class="form">
                <div class="form-group">
                    <label for="event-inform">Дата</label>
                    <b-form-input id="event-inform" v-model="informDay" :type="'date'"></b-form-input>
                </div>
                <div class="form-group">
                    <label for="event-inform">Час</label>
                    <b-form-input id="event-inform" v-model="informTime" :type="'time'"></b-form-input>
                </div>
            </div>
        </div>

        <button @click.prevent="save" type="submit" class="btn btn-success">Зберегти</button>
    </form>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "EventForm",
    data() {
      return {
        name: null,
        inform: false,
        startDay: null,
        startTime: null,
        endDay: null,
        endTime: null,
        informDay: null,
        informTime: null,
        media: []
      }
    },
    methods: {
      ...mapMutations('global', ['addEvent']),
      save() {
        this.addEvent({
          title: this.name,
          start: this.startDay + (!_.isNull(this.startTime) ? 'T' + this.startTime : ''),
          end: this.endDay + (!isNull(this.endTime) ? 'T' + this.endTime : ''),
          allDay: false,
          data: {
            inform: this.inform,
            informDay: this.informDay,
            informTime: this.informTime,
            media: this.media
          }
        })
      }
    }
  }
</script>

<style scoped>
    .grouped {
        background: #f9f9f9;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 15px;
    }
</style>