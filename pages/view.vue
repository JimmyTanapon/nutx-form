<template>
  <div>
    <v-row>
      <v-col md="4">
        บ้านเลขที่ : {{ form.houseNumber }}
      </v-col>
      <v-col md="4">
        หมู่บ้าน : {{ form.village }}
      </v-col>
      <v-col md="4">
        หมู่ที่ : {{ form.villageNo }}
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        ตรอก/ซอย : {{ form.alley }}
      </v-col>
      <v-col md="4">
        ถนน : {{ form.road }}
      </v-col>
      <v-col md="4">
        ตำบล : {{ form.subDistrict }}
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        อำเภอ : {{ form.district }}
      </v-col>
      <v-col md="4">
        จังหวัด : {{ form.province }}
      </v-col>
      <v-col md="4">
        รหัสไปรษณีย์ : {{ form.postalCode }}
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        โทรศัพท์บ้าน : {{ form.homePhone }}
      </v-col>
      <v-col md="6">
        โทรศัพท์มือถือ : {{ form.mobilePhone }}
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        อีเมล : {{ form.email }}
      </v-col>
    </v-row>

    <v-btn
      type="submit"
      color="warning"
      @click="onEdit"
    >
      Edit
    </v-btn>
  </div>
</template>

<script>
export default {
  // middleware: 'middlewareUser',
  data () {
    return {
      form: {
        houseNumber: this.$store.state.address?.houseNumber,
        village: this.$store.state.address?.village,
        villageNo: this.$store.state.address?.villageNo,
        alley: this.$store.state.address?.alley,
        road: this.$store.state.address?.road,
        subDistrict: this.$store.state.address?.subDistrict,
        district: this.$store.state.address?.district,
        province: this.$store.state.address?.province,
        postalCode: this.$store.state.address?.postalCode,
        homePhone: this.$store.state.address?.homePhone,
        mobilePhone: this.$store.state.address?.mobilePhone,
        email: this.$store.state.address?.email
      }
    }
  },
  methods: {
    onEdit () {
      this.$router.push('/form')
    }
  }
}
</script>
