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
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="竹科廠區疫苗施打率"
                      type="gradient-orange"
                      sub-title="0.68%"
                      icon="fas fa-syringe"
                      class="mb-4">
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="中科廠區疫苗施打率"
                      type="gradient-yellow"
                      sub-title="0.43%"
                      icon="fas fa-syringe"
                      class="mb-4">
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="南科廠區疫苗施打率"
                      type="gradient-green"
                      sub-title="0.47%"
                      icon="fas fa-syringe"
                      class="mb-4">
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="中國廠區疫苗施打率"
                      type="gradient-info"
                      sub-title="0.48%"
                      icon="fas fa-syringe"
                      class="mb-4">
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="美國廠區疫苗施打率"
                      type="gradient-purple"
                      sub-title="12.76%"
                      icon="fas fa-syringe"
                      class="mb-4">
          </stats-card>
        </b-col>

        <b-col xl="4" md="6">
          <stats-card title="新加坡廠區疫苗施打率"
                      type="gradient-default"
                      sub-title="0.51%"
                      icon="fas fa-syringe"
                      class="mb-4">
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
          <social-traffic-table></social-traffic-table>
        </b-col>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <employee-table></employee-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import EmployeeTable from './Dashboard/EmployeeTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable,
      EmployeeTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [4, 15, 36, 54, 87, 139, 267, 413]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: '施打人數',
                data: [0, 50, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['F2', 'F3', 'F5', 'F6', 'F7', 'F8', 'F10', 'F11', 'F12A', 'F12B', 'F14', 'F15', 'F16', 'F18'],
            datasets: [{
              label: '施打疫苗比率(%)',
              data: [0.71, 0.52 , 0.35, 0.24, 0.69, 0.6, 9.1, 12.4, 0.36, 0.46, 2.3, 1.2, 8.7, 0.31]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
