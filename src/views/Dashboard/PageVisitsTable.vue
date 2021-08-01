<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">施打率較低部門</h3>
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="部門"
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.page}}</div>
        </template>
      </el-table-column>
      <el-table-column label="總人數"
                       min-width="70px"
                       prop="visitors">
      </el-table-column>
      <el-table-column label="施打人數"
                       min-width="90px"
                       prop="unique">
      </el-table-column>

      <el-table-column label="施打比例"
                       min-width="90px"
                       prop="bounceRate">
        <template v-slot="{row}">
          {{row.bounceRate}}
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            page: 'Team1',
            visitors: '4,569',
            unique: '340',
            bounceRate: '46,53%'
          },
          {
            page: 'Team2',
            visitors: '3,985',
            unique: '319',
            bounceRate: '46,53%'
          },
          {
            page: 'Team3',
            visitors: '3,513',
            unique: '294',
            bounceRate: '36,49%'
          },
          
          {
            page: 'Team4',
            visitors: '2,050',
            unique: '147',
            bounceRate: '50,87%'
          },
          {
            page: 'Team5',
            visitors: '1,795',
            unique: '190',
            bounceRate: '46,53%'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
