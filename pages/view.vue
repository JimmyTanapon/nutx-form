Copy code
<template>
  <div class="pa-5 mx-auto" style="max-width: 70vw">
    <v-card-title class="text-h5">
      ข้อมูลที่อยู่
    </v-card-title>
    <v-divider />
    <v-card-text style="max-width: 100%">
      <v-row>
        <v-col md="6">
          <div>  <strong>บ้านเลขที่:</strong> {{ form.houseNumber }}</div>
        </v-col>
        <v-col md="6">
          <strong>หมู่บ้าน:</strong> {{ form.village }}
        </v-col>
        <v-col md="6">
          <strong>หมู่ที่:</strong> {{ form.villageNo }}
        </v-col>

        <v-col md="6">
          <strong>ตรอก/ซอย:</strong> {{ form.alley }}
        </v-col>
        <v-col md="6">
          <strong>ถนน:</strong> {{ form.road }}
        </v-col>
        <v-col md="6">
          <strong>ตำบล:</strong> {{ form.subDistrict }}
        </v-col>
        <v-col md="6">
          <strong>อำเภอ:</strong> {{ form.district }}
        </v-col>

        <v-col md="6">
          <strong>จังหวัด:</strong> {{ form.province }}
        </v-col>
        <v-col md="6">
          <strong>รหัสไปรษณีย์:</strong> {{ form.postalCode }}
        </v-col>
        <v-col md="6">
          <strong>โทรศัพท์บ้าน:</strong> {{ form.homePhone }}
        </v-col>
        <v-col md="6">
          <strong>โทรศัพท์มือถือ:</strong> {{ form.mobilePhone }}
        </v-col>
        <v-col md="6">
          <strong>อีเมล:</strong> {{ form.email }}
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn type="submit" color="warning" @click="onEdit">
        Edit
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  middleware: 'middlewareAdress',
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
