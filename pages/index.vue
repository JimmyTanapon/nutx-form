<template>
  <div>
    <validation-observer
      ref="observer"
      v-slot="{handleSubmit}"
    >
      <v-form @submit.prevent="handleSubmit( onSubmit)">
        <v-row class="flex-column">
          <v-col md="4">
            <validation-provider
              v-slot="{errors}"
              name="firstName"
              rules="required"
            >
              <v-text-field
                v-model="firstname"
                label="ชื่อ"
                placeholder="กรอกชื่อ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{errors}"
              name="lastname"
              rules="required"
            >
              <v-text-field
                v-model="lastname"
                label="นามสกุล"
                placeholder="นามสกุล"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{errors}"
              name="age"
              rules="required||numeric"
            >
              <v-text-field
                v-model="age"
                label="อายุ"
                placeholder="กรอกอายุ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="12">
            <v-btn
              type="submit"
              color="primary"
            >
              Submit
            </v-btn>
            <v-btn
              type="submit"
              color="warning"
              @click="onReset"
            >
              reset
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      firstname: '',
      lastname: '',
      age: ''
    }
  },
  methods: {
    onSubmit () {
      console.log(this.firstname + this.lastname + this.age)
    },
    onReset () {
      this.$refs.observer.reset()
      this.firstname = ''
      this.lastname = ''
      this.age = ''
    }
  }

}
</script>
