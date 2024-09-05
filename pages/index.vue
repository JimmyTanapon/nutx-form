<template>
  <div class="mx-auto">
    <p class="text-h4 text--primary light-blue pa-5">
      สมัคร อะไรสักอย่าง
    </p>
    <div class="text--primary  pa-5 ">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">
                {{ ' ' }}
              </th>
              <th class="text-left">
                ลำดับ
              </th>
              <th class="text-left">
                ตำเเหน่ง
              </th>
              <th class="text-left">
                คุณสมบัติเฉพาะตำแหน่ง
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in joblist" :key="item.name">
              <td class="pa-6">
                <v-btn type="submit" color="warning" @click="handelOnClick">
                  สมัคร
                </v-btn>
              </td>
              <td>{{ item.number }}</td>
              <td>{{ item.role }}</td>
              <td>
                <ul>
                  <li v-for="text in item.description" :key="text.number">
                    {{ text.text }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {

  name: 'IndexPage',
  data () {
    return {
      joblist: [{
        number: 1,
        role: 'นักสังคมสงเคราะห์ปฏิบัติการ',
        description: [{
          number: 1,
          text: ' ได้รับปริญญาตรีหรือคุณวุฒิอย่างอื่นที่เทียบได้ในระดับเดียวกัน ในสาขาวิชาสังคมสงเคราะห์ศาสตร์'
        },
        {
          number: 2,
          text: ' เป็นผู้สอบผ่านการวัดความรู้ความสามารถทั่วไป ของสำนักงาน ก.พ. ระดับปริญญาตรี หรือสูงกว่า'
        }]
      },
      {
        number: 2,
        role: 'นักสังคมสงเคราะห์ปฏิบัติการ',
        description: [{
          number: 1,
          text: ' ได้รับปริญญาตรีหรือคุณวุฒิอย่างอื่นที่เทียบได้ในระดับเดียวกัน ในสาขาวิชาสังคมสงเคราะห์ศาสตร์'
        },
        {
          number: 2,
          text: ' เป็นผู้สอบผ่านการวัดความรู้ความสามารถทั่วไป ของสำนักงาน ก.พ. ระดับปริญญาตรี หรือสูงกว่า'
        }]
      },
      {
        number: 3,
        role: 'นักสังคมสงเคราะห์ปฏิบัติการ',
        description: [{
          number: 1,
          text: ' ได้รับปริญญาตรีหรือคุณวุฒิอย่างอื่นที่เทียบได้ในระดับเดียวกัน ในสาขาวิชาสังคมสงเคราะห์ศาสตร์'
        },
        {
          number: 2,
          text: ' เป็นผู้สอบผ่านการวัดความรู้ความสามารถทั่วไป ของสำนักงาน ก.พ. ระดับปริญญาตรี หรือสูงกว่า'
        }]
      }
      ]
    }
  },
  methods: {
    async handelOnClick () {
      const result = await Swal.fire({
        position: 'top',
        title: 'ผู้สมัครโปรดทราบ',
        text: `คำแนะนำสำหรับการสมัคร ผู้สมัครโปรดทราบ
กรุณาอ่านประกาศให้ละเอียดและมีความรอบคอบก่อนที่จะทำการสมัคร
ได้ที่เว็บไซต์ https://m-society.thaijobjob.com

ทั้งนี้ให้ตรวจสอบคุณวุฒิการศึกษาของท่านก่อนสมัคร
ได้ที่เว็บไซต์ https://services.thaijobjob.com/ocsc.php`,
        confirmButtonText: 'ข้าพระเจ้ายินยอม',
        confirmButtonColor: 'success',
        showCancelButton: true,
        cancelButtonText: 'ยกเลิก',
        cancelButtonColor: '#d33'
      })
      if (result.isConfirmed) {
        this.$router.push('/form')
      }
    }
  }

}
</script>
