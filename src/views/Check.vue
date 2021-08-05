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
                        <!--alert and button https://bootstrap-vue.org/docs/components/alert-->
                        <b-alert
                          :show="dismissCountDown"
                          dismissible
                          variant="warning"
                          @dismissed="dismissCountDown=0"
                          @dismiss-count-down="countDownChanged"
                        >
                          您的預約資料已刪除 {{ dismissCountDown }} 
                        </b-alert>
                        <b-button @click="showAlert" variant="info" class="m-1" >
                          刪除預約資料
                        </b-button>
                    </b-card-text>


                    <b-table striped hover :items="items" :fields="fields"></b-table>

                </b-card>

            </b-card-group>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['employeeID', 'name', 'department','vaccine','date'],
        items:[
            {employeeID: '120332' ,name: 'Anson',department: 'TSID',vaccine: 'AstraZeneca',
            date:'2021-08-05'},],
        dismissSecs: 2,
        dismissCountDown: 0
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }

  }


</script>