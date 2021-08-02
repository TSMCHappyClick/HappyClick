<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="龍潭廠區疫苗施打率"
                      type="gradient-red"
                      sub-title="3.21%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">1.47%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="竹科廠區疫苗施打率"
                      type="gradient-orange"
                      sub-title="3.01%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">2.03%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="中科廠區疫苗施打率"
                      type="gradient-yellow"
                      sub-title="2.13%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">1.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="3" md="6">
          <stats-card title="南科廠區疫苗施打率"
                      type="gradient-green"
                      sub-title="2.65%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">1.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="6" md="6">
          <stats-card title="台灣廠區總疫苗施打率"
                      type="gradient-info"
                      sub-title="2.78%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">1.26%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>

        <b-col xl="6" md="6">
          <stats-card title="海外廠區總疫苗施打率"
                      type="gradient-info"
                      sub-title="34.76%"
                      icon="fas fa-syringe"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">25.06%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>

      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="7" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">TSMC台灣整體疫苗施打率</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">2021</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="5" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">施打年齡分佈</h5>
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
        <b-col xl="7" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="5" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
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
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 2, 15, 27, 32, 46, 57, 68, 74, 81, 93, 99]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: '施打人數',
                data: [0, 2, 15, 27, 32, 46, 57, 68, 74, 81, 93, 99],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['<20', '20-29', '30-39', '40-49', '50-59', '60-69'],
            datasets: [{
              label: '施打人數',
              data: [0, 0, 15, 35, 48, 60]
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
              label: '施打人數',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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