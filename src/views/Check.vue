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
                <b-card class="mt-3" :header="$t('CHECK.Res_Info')" header-bg-variant="default" header-text-variant="white">
                    <b-card-text>

                      {{ $t('CHECK.ResInfo_Note_1') }}
                      <b-link href="/HappyClick#/reserve">Reservation</b-link>{{ $t('CHECK.ResInfo_Note_2') }}

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
                          {{ $t('CHECK.Del_Success') }}{{ dismissCountDown }} 
                        </b-alert>
                        <b-button @click="myconfirm" variant="info" class="m-1" v-if= "this.items[0].vaccine_type!=null">
                          {{ $t('CHECK.Del_Button') }}
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
      // console.log(localStorage.id)
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/checkReserve', {params:{"id": localStorage.id}})
          .then(res => {
            // console.log(res.data);
            if(res.data.vaccine_type) this.items[0].employeeID = localStorage.id;
            this.items[0].vaccine_type = res.data.vaccine_type;
            this.items[0].date = res.data.date;
          })
          .catch( (error) => {
            // console.log(error)
          });
    },
    methods: {
      myconfirm () {
        if(confirm(this.$t('CHECK.Confirm'))==true){
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
          .catch( (error) => {
            // console.log(error)
            alert('Remove reservation failed!')
          });
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
    }
  }
</script>