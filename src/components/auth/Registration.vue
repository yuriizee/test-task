<template>
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Реєстрація</h5>
                    <form class="form-signin">
                        <div class="form-label-group">
                            <label for="inputName">Ім'я</label>
                            <input type="text" id="inputName" class="form-control" placeholder="Ім'я"
                                   required autofocus>
                        </div>
                        <div class="form-label-group">
                            <label for="inputEmail">Email</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email"
                                   required>
                        </div>
                        <div class="form-label-group mb-3">
                            <label for="inputPassword">Пароль</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Пароль"
                                   required>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Зареєструвати
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Registration"
  }
</script>

<style scoped>

</style>