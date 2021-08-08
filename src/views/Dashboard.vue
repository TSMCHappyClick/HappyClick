<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="龍潭廠區疫苗施打率"
                      type="gradient-red"
                      sub-title="0.51%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>龍潭廠區疫苗施打率: {{regionData.rate_1 }}%</h3>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="竹科廠區疫苗施打率"
                      type="gradient-orange"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>竹科廠區疫苗施打率: {{ regionData.rate_2 }}%</h3>
          </stats-card>
          
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="中科廠區疫苗施打率"
                      type="gradient-yellow"
                      sub-title="0.43%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>中科廠區疫苗施打率: {{ regionData.rate_3 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="南科廠區疫苗施打率"
                      type="gradient-green"
                      sub-title="0.47%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>南科廠區疫苗施打率: {{ regionData.rate_4 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="中國廠區疫苗施打率"
                      type="gradient-info"
                      sub-title="0.48%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>中國廠區疫苗施打率: {{ regionData.rate_5 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="美國廠區疫苗施打率"
                      type="gradient-purple"
                      sub-title="12.76%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>美國廠區疫苗施打率: {{ regionData.rate_6 }}%</h3>
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="新加坡廠區疫苗施打率"
                      type="gradient-default"
                      sub-title="0.51%"
                      icon="fas fa-syringe"
                      class="mb-4">
                      <h3>新加坡廠區疫苗施打率: {{ regionData.rate_7 }}%</h3>
          </stats-card>
        </b-col>

      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="12" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="h3 mb-0">各廠區施打率(%)</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="6" class="mb-5 mb-xl-0">
          <vaccine-table></vaccine-table>
        </b-col>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <employee-table ></employee-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  import axios from 'axios'
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import BarChart from '@/components/Charts/BarChart';
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // Tables
  import EmployeeTable from './Dashboard/EmployeeTable';
  import VaccineTable from './Dashboard/VaccineTable';
  export default {
    components: {
      BarChart,
      BaseProgress,
      StatsCard,
      EmployeeTable,
      VaccineTable
    },
    data() {
      return {
        regionData:{
          rate_1: 30,
          rate_2: 20,
          rate_3: 60,
          rate_4: 10,
          rate_5: 23,
          rate_6: 87,
          rate_7: 78,
        },
        redBarChart: {
          chartData: {
            labels: [],
            datasets: [{
              label: '施打疫苗比率(%)',
              data: []
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
    },
    mounted() {
      var __this = this;
      //get data for division shot
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/find_division_shot_rate')
          .then(res => {
            console.log(res.data);
            console.log(res.data['竹科'])
            __this.regionData.rate_1 = res.data['龍潭封測廠'];
            console.log("!!!!!:",__this.regionData.rate_1)
            __this.regionData.rate_2 = res.data['竹科'];
            __this.regionData.rate_3 = res.data['中科'];
            __this.regionData.rate_4 = res.data['南科'];
            __this.regionData.rate_5 = res.data['中國'];
            __this.regionData.rate_ˊ = res.data['美國'];
            __this.regionData.rate_7 = res.data['新加坡'];
          })
          .catch( (error) => console.log(error));
      //get data for barChart 
      axios
          .get('https://happyclick-healthcenter.herokuapp.com/find_fac_shot_rate')
          .then(res => {
            console.log("test");
            console.log(res.data);
            console.log(res.data.factories);
            __this.redBarChart.chartData.labels = res.data.factorys;
            __this.redBarChart.chartData.datasets[0].data = res.data.rate;
            // {'factorys':['F12A', 'F12B', 'F2', 'F3', 'F5', 'F6', 'F8', 'F15A', 'F15B', 'F14A', 'F14B', 'F18', 'F16', 'F10', 'F11', 'SSMC', 'AP1', 'AP2', 'AP3', 'AP5'],
            // 'rate':[0.6666666666666666, 0.2, 0.625, 0.3333333333333333, 0.6, 1.0, 0.0, 0.25, 0.25, 0.625, 0.2857142857142857, 0.8, 0.625, 0.5, 0.25, 0.42857142857142855, 0.25, 0.16666666666666666, 0.0, 0.3333333333333333]}
          })
          .catch( (error) => console.log(error));
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>