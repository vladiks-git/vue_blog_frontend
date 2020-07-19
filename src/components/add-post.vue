<template>
    <div class="post_form">
        <form @submit.prevent="sendPost">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="title"
                        @blur="$v.title.$touch()"
                        :class="{'is-invalid' : $v.title.$error}"
                >
                <small
                        v-if="!$v.title.required"
                        class="invalid-feedback">Please enter title.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Text</label>
                <textarea
                        id="exampleInputPassword1"
                        class="form-control text-textarea"
                        aria-label="With textarea"
                        v-model="text"
                        @blur="$v.text.$touch()"
                        :class="{'is-invalid' : $v.text.$error}"
                ></textarea>
                <small
                        v-if="!$v.text.required"
                        class="invalid-feedback">Please add some text.
                </small>
            </div>
            <button type="submit"
                    class="btn btn-primary"
                    :disabled="$v.$invalid"
            >Submit</button>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import { required } from 'vuelidate/lib/validators'

    export default {
        data(){
            return{
                title: '',
                text: '',
                isButtonDisable: true
            }
        },
        methods: {
            ...mapActions(['addPost']),
            sendPost() {
                if (this.title.trim() && this.text.trim()) {
                    this.addPost({
                        title: this.title,
                        text: this.text
                    })
                    this.title = this.text = ''
                    this.$router.push('/')
                }
            }
        },
        validations: {
            title: {
                required
            },
            text: {
                required
            }
        }
    }
</script>

<style scoped>
    .post_form{
        max-width: 50rem;
        margin-left: 10rem;
        margin-top: 10rem;
    }
    .text-textarea{
        height: 20rem;
    }
</style>