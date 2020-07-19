<template>
    <div class="div-reg">
        <div class="form-reg">
            <h2>Регистрация</h2>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                            v-model="email"
                            @blur="$v.email.$touch()"
                            :class="{'is-invalid' : $v.email.$error}"
                            type="email" class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    <small
                            v-if="!$v.email.required"
                            class="invalid-feedback">Email is required.
                    </small>
                    <small
                            v-if="!$v.email.email"
                            class="invalid-feedback">This field should be an email.
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                            @blur="$v.password.$touch()"
                            :class="{'is-invalid' : $v.password.$error}"
                            v-model="password"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1">
                    <small
                            v-if="!$v.password.minLength"
                            class="invalid-feedback">Minlength is 6.
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">Confirm password</label>
                    <input
                            @blur="$v.confirmPassword.$touch()"
                            :class="{'is-invalid' : $v.confirmPassword.$error}"
                            v-model="confirmPassword"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword2">
                    <small
                            v-if="!$v.confirmPassword.sameAs"
                            class="invalid-feedback">Passwords should be match.
                    </small>
                </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs('password')
            }
        }
    }
</script>

<style scoped>
    .form-reg {
        width: 900px;
        margin-top: 10px;
    }
    .div-reg{
        display: flex;
        justify-content: center;
    }
</style>