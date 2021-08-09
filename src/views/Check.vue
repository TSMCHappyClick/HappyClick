<template>
    <div>
        
        <div class="header pb-2 pt-5 pt-lg-6 d-flex align-items-center">
        <b-container fluid>
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <b-container fluid class="d-flex align-items-center">
            <b-row >
                <b-col lg="15" md="12">
                <h1 class="display-3 text-white">Reservation Information</h1>
                <p class="text-white mt-0 mb-5">Please check your vaccine Reservation information.
                  <br>If you want to modify the information,
                  please delete the current revervation and make a reservation again.</p>
                
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        </div>
            
            <b-card-group deck>
                <b-card class="mt-3" header="疫苗預約資訊" header-bg-variant="default" header-text-variant="white">
                    <b-card-text>
                      提醒您，請確認您的預約接種時間是否正確，若需修改請先按下方"刪除預約資料"再至
                      <b-link href="/reserve#/reserve">Reservation頁面</b-link>新增一筆預約
                    </b-card-text>

                    <b-card-text>
                        <b-table striped hover :items="items" :fields="fields"></b-table>
                        <br>
                        <!--alert and button https://bootstrap-vue.org/docs/components/alert-->
                        <b-alert
                          :show="dismissCountDown"
                          dismissible
                          variant="warning"
                          @dismissed="dismissCountDown=0"
                          @dismiss-count-down="countDownChanged"
                        >
                          您的預約資料已刪除，請重新預約! {{ dismissCountDown }} 
                        </b-alert>
                        <b-button @click="myconfirm" variant="info" class="m-1" v-if= "this.items[0].vaccine_type!=null">
                          刪除預約資料
                        </b-button>
                    </b-card-text>

                </b-card>

            </b-card-group>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        fields: ['employeeID', 'vaccine_type','date'],
        items:[
            {employeeID: null ,vaccine_type: null, date:null}],
        dismissSecs: 3,
        dismissCountDown: 0
      }
    },
    created() {
      console.log(localStorage.id)
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/checkReserve', {params:{"id": localStorage.id}})
          .then(res => {
            // console.log(res.data);
            if(res.data.vaccine_type) this.items[0].employeeID = localStorage.id;
            this.items[0].vaccine_type = res.data.vaccine_type;
            this.items[0].date = res.data.date;
          })
          .catch( (error) => console.log(error));
    },
    methods: {
      myconfirm () {
        if(confirm('確定要刪除嗎? 刪除後不可恢復 只能重新預約~')==true){
          this.handleDelete()
        }
      },
      handleDelete() {
        const reservedData = {"id": localStorage.id, "date": this.items[0].date, 
                              "vaccine_type": this.items[0].vaccine_type};
        console.log(reservedData);
        axios
          .post('https://happyclick-healthcenter.herokuapp.com/removeReserve', reservedData)
          .then(res => {
            alert(res.data.msg);
            this.$router.push('/reserve');
          })
          .catch( (error) => console.log(error));
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
    }
  }
</script>