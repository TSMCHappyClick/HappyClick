<template>
    <div>
        
        <div class="header pb-2 pt-5 pt-lg-6 d-flex align-items-center">
        <b-container fluid>
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <b-container fluid class="d-flex align-items-center">
            <b-row >
                <b-col lg="7" md="10">
                <h1 class="display-3 text-white">Reservation Information</h1>
                <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your
                    work and manage your projects or assigned tasks</p>
                
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        </div>
            
            <b-card-group deck>
                <b-card class="mt-3" header="Your registration information" header-bg-variant="default" header-text-variant="white">
                    <b-card-text>
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                    </b-card-text>

                    <b-card-text>A second paragraph of text in the card.</b-card-text>


                    <b-table striped hover :items="items" :fields="fields"></b-table>



                    <a href="#" class="card-link">Card link</a>
                    <b-link href="#" class="card-link">Another link</b-link>
                </b-card>

                <b-card class="mt-3" header="Edit registration information" header-bg-variant="teal" header-text-variant="white">
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
                            type="ID"
                            placeholder="Enter employee ID"
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



                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                    <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                    </b-card>
                </b-card>
            </b-card-group>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['employeeID', 'name', 'vaccine'],
        items:[
            {employeeID: 120332 ,name: 'Anson',vaccine: 'AstraZeneca'},
        ],
        form: {
          employeeID: '',
          name: '',
          vaccine: null
        },
        vaccine: [{ text: 'Select One', value: null }, 'AstraZeneca', 'Moderna', 'BioNTech', '高端'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.employeeID = ''
        this.form.name = ''
        this.form.vaccine = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>