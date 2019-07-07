<template>
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Вхід у систему</h5>
                    <form class="form-signin">
                        <div class="form-label-group">
                            <label for="inputEmail">Email</label>
                            <input v-model="email" type="email" id="inputEmail" class="form-control"
                                   :class="{ 'is-invalid': !!loginErrors.email }" placeholder="Email"
                                   required autofocus>
                            <div v-if="!!loginErrors.email" class="invalid-feedback">
                                <p v-for="(error, i) in loginErrors.email" :key="`ee`+i">{{ error }}</p>
                            </div>
                        </div>

                        <div class="form-label-group mb-3">
                            <label for="inputPassword">Пароль</label>
                            <input v-model="password" type="password" id="inputPassword" class="form-control"
                                   :class="{ 'is-invalid': !!loginErrors.password }"
                                   placeholder="Пароль"
                                   required>
                            <div v-if="!!loginErrors.password" class="invalid-feedback">
                                <p v-for="(error, i) in loginErrors.password" :key="`ep1`+i">{{ error }}</p>
                            </div>
                        </div>
                        <button @click.prevent="auth" class="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit">Вхід
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            ...mapActions('global', ['login']),
            auth() {
                this.login({
                    email: this.email,
                    password: this.password
                })
            }
        },
        computed: {
            ...mapState('global', ['loginErrors'])
        }
    }
</script>
