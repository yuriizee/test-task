<template>
    <div>
        <div class="form-group">
            <label for="event-name">Назва події</label>
            <input type="text" data-vv-as="Назва" v-validate="'required|min:7'" name="eventName" v-model="name"
                   class="form-control" id="event-name" placeholder="введіть назву події">
            <small class="text-danger">{{ errors.first('eventName') }}</small>
        </div>

        <div class="form-group grouped">
            <p class="h6 pb-1">Початок</p>
            <div class="form">
                <div class="form-group">
                    <label for="event-start-date">Дата</label>
                    <b-form-input v-validate="'required|date_format:yyyy-mm-dd'" id="event-start-date"
                                  name="eventStartDate" data-vv-as="Дата"
                                  v-model="startDay" :type="'date'"></b-form-input>
                    <small class="text-danger">{{ errors.first('eventStartDate') }}</small>
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
                    <b-form-input v-validate="'required|date_format:yyyy-mm-dd'" id="event-end-date" name="eventEndDate"
                                  data-vv-as="Дата" v-model="endDay" :type="'date'"></b-form-input>
                    <small class="text-danger">{{ errors.first('eventEndDate') }}</small>
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

        <b-form-file class="p-3"
                v-model="media.image"
                accept="image/*"
                placeholder="Виберіть зображення..."
                drop-placeholder="Перетягніть зображення сюди..."
        ></b-form-file>
        <b-form-file class="mt-3 p-3"
                v-model="media.audio"
                accept="audio/*"
                placeholder="Виберіть запис..."
                drop-placeholder="Перетягніть запис сюди..."
        ></b-form-file>

        <button @click.prevent="save" type="submit" class="btn btn-success">Зберегти</button>
    </div>
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
        startTime: '00:00',
        endDay: null,
        endTime: '23:59',
        informDay: null,
        informTime: null,
        media: {
          image: null,
          audio: null
        }
      }
    },
    methods: {
      ...mapMutations('global', ['addEvent']),
      save() {
        this.$validator.validate().then(valid => {
          if (valid) {
            this.addEvent({
              title: this.name,
              start: this.startDay + (!_.isNull(this.startTime) ? 'T' + this.startTime : ''),
              end: this.endDay + (!_.isNull(this.endTime) ? 'T' + this.endTime : ''),
              allDay: false,
              data: {
                inform: this.inform,
                informDay: this.informDay,
                informTime: this.informTime,
                media: this.media
              }
            })
          }
        });
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