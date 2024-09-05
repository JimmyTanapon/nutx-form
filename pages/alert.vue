<template>
  <div>
    <v-row>
      <v-col md="4">
        <v-btn
          type="submit"
          color="primary"
          @click="onBasicTime"
        >
          Timer
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn
          type="submit"
          color="primary"
          @click="onComfirmThen"
        >
          Click Me!
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn
          type="submit"
          color="primary"
          @click="onComfirmAwit"
        >
          Click Me! onComfirmAwit
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default ({

  methods: {
    onComfirmThen () {
      Swal.fire({
        title: 'ต้อกการลบ ?',
        text: 'ลบเเน่บ่',
        confirmButtonText: 'ลบไปเลย',
        confirmButtonColor: 'primary',
        showCancelButton: true,
        cancelButtonText: 'เเค่กดผิดน่ะ',
        cancelButtonColor: '#d33'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: 'ลบเเน่บ่เรียบร้อยแล้ว!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })
        } else if (result.dismiss) {
          Swal.fire({
            title: 'ไม่ลบล่ะเคๆ!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          })
        }
      })
    },
    onBasicTime () {
      Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        timer: 1500
      })
    },
    async  onComfirmAwit () {
      const result = await Swal.fire({
        title: 'ต้อกการลบ เเบบ await?',
        text: 'ลบเเน่บ่',
        confirmButtonText: 'ลบไปเลย',
        confirmButtonColor: 'primary',
        showCancelButton: true,
        cancelButtonText: 'เเค่กดผิดน่ะ',
        cancelButtonColor: '#d33'
      })
      if (result.isConfirmed) {
        Swal.fire({
          title: 'ลบเเน่บ่เรียบร้อยแล้ว!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        })
      } else if (result.dismiss) {
        Swal.fire({
          title: 'ไม่ลบล่ะเคๆ!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        })
      }
    }

  }
})
</script>
