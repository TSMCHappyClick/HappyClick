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
            v-model="form.Name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Vaccine Type:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.vaccine"
            :options="vaccine"
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
          employeeID: '',
          Name: '',
          vaccine: null,
          date:null
        },
        vaccine: [{ text: 'Select One', value: null }, 'AstraZeneca', 'Moderna', 'BioNTech','高端'],
        date: [{ text: 'Select one', value: null }, '2021-08-10', '2021-08-11', '2021-08-12'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        console.log("test")
        const reserveData = { ID: this.form.employeeID, Name: this.form.Name, date: this.form.date, vaccine_type: this.form.vaccine };
        axios
            .post('https://happyclick-healthcenter.herokuapp.com/Reserve',)
            .then(res => {
              console.log("res status", res.status);
              console.log('res data:', res.data);

            })
            .catch( (error) => console.log(error));

      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.employeeID = ''
        this.form.name = ''
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