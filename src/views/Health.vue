<template>
    <div>
        
        <div class="header pb-2 pt-5 pt-lg-6 d-flex align-items-center">
        <b-container fluid>
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <b-container fluid class="d-flex align-items-center">
            <b-row >
                <b-col lg="10" md="8">
                <h1 class="display-3 text-white">Health Center Page</h1>
                <p class="text-white mt-0 mb-2">This is for Health Center's staff ONLY</p>
                
                </b-col>
            </b-row>
            </b-container>
        </b-container>
        </div>
            
            <b-card-group deck>
                <b-card class="mt-3" header="已施打疫苗名單" header-bg-variant="info" header-text-variant="white">
                    <b-card-text>
                    每天於疫苗施打完畢後 (17:00)，更新已施打疫苗的員工資料。
                    </b-card-text>

                    <b-card-text>若需修改或新增，請使用右方手動更改。</b-card-text>


                    <b-table striped hover :items="items" :fields="fields"></b-table>



                    <a href="#" class="card-link">Card link</a>
                    <b-link href="#" class="card-link">Another link</b-link>
                </b-card>

                <b-card class="mt-3" header="增加已施打疫苗員工" header-bg-variant="warning" header-text-variant="white">
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

                        <b-form-group
                        id="input-group-1"
                        label="Date:"
                        label-for="input-1"
                        description="Please follow the rule: YYYY-MM-DD"
                        >
                        <b-form-input
                            id="input-1"
                            v-model="form.date"
                            type="ID"
                            placeholder="Date"
                            required
                        ></b-form-input>
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
        fields: ['employeeID', 'name', 'vaccine', 'Date'],
        items:[
            {employeeID: 120332 ,name: 'Anson',vaccine: 'AstraZeneca', Date: '2021-08-08'},
        ],
        form: {
          employeeID: '',
          name: '',
          vaccine: null,
          date: null,
          checked: []
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
        this.form.date = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>