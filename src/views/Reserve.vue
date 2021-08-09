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
            <h1 class="display-3 text-white">Reservation</h1>
            <p class="text-white mt-0 mb-5">Please reserve the vaccine on this page.
            </p>
            </b-col>
        </b-row>
        </b-container>
      </b-container>
    </div>  
    
    <!-- Card stats -->
    <!-- Header -->
    <b-card class="mt-3" header="疫苗預約資訊" header-bg-variant="default" header-text-variant="white">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Employee ID:"
          label-for="input-1"
          description="We'll never share your information with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.employeeID"
            placeholder="Enter employee ID"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.username"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Vaccine Type:" label-for="input-3" >
          <b-form-select
          @change="onChange"
            id="input-3"
            v-model="form.vaccine"
            :options="vaccine_type"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Date:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="form.date"
            :options="date"
            required
          ></b-form-select>
        </b-form-group>


        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          employeeID: localStorage.id,
          username: localStorage.username,
          vaccine: null,
          date:null
        },
        vacAndDate: [],
        vaccine_type: [{ text: 'Select one', value: null }],
        date: [{ text: 'Select one', value: null },'GG'],
        show: true
      }
    },
    created() {
        var __this = this;
        axios
          .get('https://happyclick-healthcenter.herokuapp.com/returnAvailable')
          .then(res => {
            console.log(res.data);
            res.data.forEach(function(item, index, array) {
              __this.vacAndDate.push({
                  'key': item.vaccine_type,
                  'value': item.date
              });
              console.log("V&D:",__this.vacAndDate[0].key);
              console.log(item.vaccine_type, item.date);
              console.log(__this.vaccine_type);
              if (!__this.vaccine_type.includes(item.vaccine_type)){
                __this.vaccine_type.push(item.vaccine_type);
              }
            });
          })
          .catch( (error) => console.log(error));
      
    },
    methods: {
      onChange(event){
        var __this = this;
        console.log("changed")
        this.date = [{ text: 'Select one', value: null }];
        if (this.form.vaccine){
          this.vacAndDate.forEach(function(item, index, array) {
            console.log(item.key);
            if (item.key == __this.form.vaccine){
              __this.date.push(item.value)
            }
          })
        }

        __this.date.sort();

      },
      onSubmit(event) {
        event.preventDefault()
        console.log("test");
        console.log(this.vaccine_type);
        const reserveData = { id: this.form.employeeID, username: this.form.username, date: this.form.date, vaccine_type: this.form.vaccine };
        console.log(reserveData);
        axios
            .post('https://happyclick-healthcenter.herokuapp.com/saveReserve',reserveData)
            .then(res => {
              console.log("res status", res.status);
              console.log('res data:', res.data);

              alert(res.data.msg);
              this.$router.push('/check');

            })
            .catch( (error) => console.log(error));
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.employeeID = ''
        this.form.username = ''
        this.form.vaccine = null
        this.form.date = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>