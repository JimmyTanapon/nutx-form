<template>
  <div>
    <p class="text-h4 text--primary light-blue pa-5">
      สมัคร อะไรสักอย่าง
    </p>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <v-form class="pa-5" @submit.prevent="handleSubmit(onSubmit)">
        <v-row>
          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="บ้านเลขที่" rules="required">
              <v-text-field
                v-model="form.houseNumber"
                label="บ้านเลขที่"
                placeholder="กรอก บ้านเลขที่"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="หมู่บ้าน/อาคาร" rules="required">
              <v-text-field
                v-model="form.village"
                label="หมู่บ้าน/อาคาร"
                placeholder="กรอก หมู่บ้าน/อาคาร"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="หมู่ที่" rules="required">
              <v-text-field v-model="form.villageNo" label="หมู่ที่" placeholder="กรอก หมู่ที่" :error-messages="errors" />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="ตรอก/ซอย" rules="required">
              <v-text-field
                v-model="form.alley"
                label="ตรอก/ซอย"
                placeholder="กรอก ตรอก/ซอย"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="ถนน" rules="required">
              <v-text-field
                v-model="form.road"
                label="ถนน"
                placeholder="กรอก ถนน"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="ตำบล/แขวง" rules="required">
              <v-text-field
                v-model="form.subDistrict"
                label="ตำบล/แขวง"
                placeholder="กรอก ตำบล/แขวง"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="อำเภอ/เขต" rules="required">
              <v-text-field
                v-model="form.district"
                label="อำเภอ/เขต"
                placeholder="กรอก อำเภอ/เขต"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="จังหวัด" rules="required">
              <v-text-field
                v-model="form.province"
                label="จังหวัด"
                placeholder="กรอก จังหวัด"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="รหัสไปรษณีย์" rules="required|numeric|postalCodelength:4">
              <v-text-field
                v-model="form.postalCode"
                label="รหัสไปรษณีย์"
                placeholder="กรอก รหัสไปรษณีย์"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider v-slot="{ errors }" name="โทรศัพท์บ้าน" rules="required|numeric|length:10">
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
              name="โทรศัพท์มือถือ"
              rules="required|numeric|length:10"
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
            <validation-provider v-slot="{ errors }" name="email" rules="required|email">
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
        houseNumber: this.$store.state.address ? this.$store.state.address?.houseNumber : 'test',
        village: this.$store.state.address ? this.$store.state.address?.village : 'test',
        villageNo: this.$store.state.address ? this.$store.state.address?.villageNo : 'test',
        alley: this.$store.state.address ? this.$store.state.address?.alley : 'test',
        road: this.$store.state.address ? this.$store.state.address?.road : 'test',
        subDistrict: this.$store.state.address ? this.$store.state.address?.subDistrict : 'test',
        district: this.$store.state.address ? this.$store.state.address?.district : 'test',
        province: this.$store.state.address ? this.$store.state.address?.province : 'test',
        postalCode: this.$store.state.address ? this.$store.state.address?.postalCode : '1234',
        homePhone: this.$store.state.address ? this.$store.state.address?.homePhone : '1213123123',
        mobilePhone: this.$store.state.address ? this.$store.state.address?.mobilePhone : '1213123123',
        email: this.$store.state.address ? this.$store.state.address?.email : 'test@t.com'
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
