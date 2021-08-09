<template>
    <div>
        <div class="header pb-2 pt-5 pt-lg-6 d-flex align-items-center">
        <b-container fluid>
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <b-container fluid class="d-flex align-items-center">
            <b-row >
                <b-col lg="12" md="8">
                <h1 class="display-3 text-white">Health Center Page</h1>
                <p class="text-white mt-0 mb-2">This is for Health Center's staff ONLY</p>
                
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        </div>
            <b-card class="mt-3" header="今日預約施打疫苗名單" header-bg-variant="info" header-text-variant="white">
                <b-card-text>
                每天於疫苗施打完畢後 (17:00)，更新已施打疫苗的員工資料。
                </b-card-text>

                <b-card-text>請勾選施打狀態。</b-card-text>


                <b-table striped hover :items="items" :fields="fields">
                    <template v-slot:cell(status)="row">
                        <base-button size="sm" @click="myconfirm(row.item)" class="mr-1" >
                            已施打
                        </base-button>
                    </template>
                </b-table>
            </b-card>

            <b-card class="mt-3" header="新增疫苗資訊" header-bg-variant="default" header-text-variant="white">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <b-form-group id="input-group-1" label="Vaccine Type:" label-for="input-1">
                  <b-form-select
                    id="input-1"
                    v-model="addVaccineForm.vaccine_type"
                    :options="vaccines"
                    required
                  ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-2" label="Date:" label-for="input-2" description="YYYY-MM-DD">
                  <b-form-input
                    id="input-2"
                    v-model="addVaccineForm.date"
                    type="date"
                    placeholder="Enter availible vaccination date"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Amount:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="addVaccineForm.vaccine_amount"
                    type="number"
                    placeholder="Enter availible doses of vaccine"
                    min="1" max="999"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>

            </b-form>
          </b-card>  
    </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data() {
      return {
        fields: ['employeeID', 'name', 'vaccine', 'status'],
        items:[],
        addVaccineForm: {
          vaccine_type: null,
          date: '',
          vaccine_amount: ''
        },
        vaccines: [{ text: 'Select One', value: null }, 'AstraZeneca', 'Moderna', 'BioNTech'],
        show: true
      }
    },
    created(){
      var __this = this;
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      date = moment(String(date)).format('YYYY-MM-DD')
      console.log(date);
      
      axios
        .get('https://happyclick-healthcenter.herokuapp.com/searchFormdata', {params:{"date": date}})
        .then(res => {
          console.log(res.data);
          res.data.forEach(function(item) {
            console.log(item);
            __this.items.push({form_id: item.form_id, employeeID: item.id, name: item.username, vaccine: item.vaccine_type})
          });
        })
          .catch( (error) => console.log(error));
    },
    methods: {
      myconfirm (item, index, target) {
        const vaccinatedData = {"form_id": item.form_id, "id": item.employeeID, "Name": item.name};
        if(confirm('請確認已施打人員之資料，確定修改嗎?')==true){
          this.ckeckVaccinated(vaccinatedData)
        }
      },
      ckeckVaccinated(vaccinatedData){
        console.log(vaccinatedData);
        axios
          .post('https://happyclick-healthcenter.herokuapp.com/updateVaccinated', vaccinatedData)
          .then(res => {
            console.log(res.data);
          })
          .catch( (error) => console.log(error));
      },
      onSubmit(event) {
        event.preventDefault()
        console.log(JSON.stringify(this.addVaccineForm));
        axios
        .post('https://happyclick-healthcenter.herokuapp.com/updateVaccine', JSON.stringify(this.addVaccineForm))
        .then(res => {
          console.log(res.data);
        })
          .catch( (error) => console.log(error));
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.addVaccineForm.vaccine_type = null,
        this.addVaccineForm.date = '',
        this.addVaccineForm.vaccine_amount = '' 

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>