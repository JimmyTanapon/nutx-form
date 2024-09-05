<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-row>
          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="houseNumber" rules="required">
              <v-text-field
                v-model="form.houseNumber"
                label="บ้านเลขที่"
                placeholder="กรอก บ้านเลขที่"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="village" rules="required">
              <v-text-field
                v-model="form.village"
                label="หมู่บ้าน/อาคาร"
                placeholder="กรอก หมู่บ้าน/อาคาร"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="villageNo" rules="required">
              <v-text-field v-model="form.villageNo" label="หมู่ที่" placeholder="กรอก หมู่ที่" :error-messages="errors" />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="alley" rules="required">
              <v-text-field
                v-model="form.alley"
                label="ตรอก/ซอย"
                placeholder="กรอก ตรอก/ซอย"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="road" rules="required">
              <v-text-field
                v-model="form.road"
                label="ถนน"
                placeholder="กรอก ถนน"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="subDistrict" rules="required">
              <v-text-field
                v-model="form.subDistrict"
                label="ตำบล/แขวง"
                placeholder="กรอก ตำบล/แขวง"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="district" rules="required">
              <v-text-field
                v-model="form.district"
                label="อำเภอ/เขต"
                placeholder="กรอก อำเภอ/เขต"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="province" rules="required">
              <v-text-field
                v-model="form.province"
                label="จังหวัด"
                placeholder="กรอก จังหวัด"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="postalCode" rules="required|numeric">
              <v-text-field
                v-model="form.postalCode"
                label="รหัสไปรษณีย์"
                placeholder="กรอก รหัสไปรษณีย์"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="postalCode" rules="required|numeric">
              <v-text-field
                v-model="form.homePhone"
                label="โทรศัพท์บ้าน"
                placeholder="กรอก โทรศัพท์บ้าน"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="mobilePhone"
              rules="required|numeric"
            >
              <v-text-field
                v-model="form.mobilePhone"
                label="โทรศัพท์มือถือ"
                placeholder="กรอก โทรศัพท์มือถือ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="email" rules="required">
              <v-text-field
                v-model="form.email"
                label="อีเมล"
                placeholder="example@mail.com"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="12">
            <v-btn type="submit" color="primary">
              Submit
            </v-btn>
            <v-btn color="warning" @click="onReset">
              Reset
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
      form: {
        houseNumber: this.$store.state.address ? this.$store.state.address?.houseNumber : '',
        village: this.$store.state.address ? this.$store.state.address?.village : '',
        villageNo: this.$store.state.address ? this.$store.state.address?.villageNo : '',
        alley: this.$store.state.address ? this.$store.state.address?.alley : '',
        road: this.$store.state.address ? this.$store.state.address?.road : '',
        subDistrict: this.$store.state.address ? this.$store.state.address?.subDistrict : '',
        district: this.$store.state.address ? this.$store.state.address?.district : '',
        province: this.$store.state.address ? this.$store.state.address?.province : '',
        postalCode: this.$store.state.address ? this.$store.state.address?.postalCode : '',
        homePhone: this.$store.state.address ? this.$store.state.address?.homePhone : '',
        mobilePhone: this.$store.state.address ? this.$store.state.address?.mobilePhone : '',
        email: this.$store.state.address ? this.$store.state.address?.email : ''
      }

      // form: {
      //   firstname: this.$store.state.user
      //     ? this.$store.state.user.firstname
      //     : '',
      //   lastname: this.$store.state.user ? this.$store.state.user.lastname : '',
      //   age: this.$store.state.user ? this.$store.state.user.age : ''
      // }
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit('addressData', this.form)
      this.$router.push('/view')
    },
    onReset () {
      this.$refs.observer.reset()
    }
  }
}
</script>
