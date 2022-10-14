<template>
  <div>
    <apexchart class="bg-gray4 rounded-2xl" type="bar" height="350" :options="chartOptions" :series="series">
    </apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 76, 65]
        }

      ],
      chartOptions: {
        colors: ['#ff2d54'],
        chart: {
          toolbar: {
            show: false,
          },
        },

        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '10%',
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: -21,
          style: {
            fontSize: '14px',
            fontWeight: 400,
          }
        },
        xaxis: {
          categories: ['Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Mazda', 'Mercedes-Benz', 'MG', 'Nissan', 'Tesla'],
          labels: {
            style: {
              colors: '#f5f5f7',
              fontWeight: 400,
              fontSize: 14,
              fontFamily: 'Baloo 2, Arial, cursive',
            }
          },
        },
        yaxis: {
          title: {
            text: 'Views',
            style: {
              color: '#f5f5f7',
              fontWeight: 400,
              fontSize: 16,
              fontFamily: 'Baloo 2, Arial, cursive',
            }
          },
          labels: {
            style: {
              colors: '#f5f5f7',
              fontWeight: 400,
              fontSize: 12,
              fontFamily: 'Baloo 2, Arial, cursive',
            }
          }
        },

        fill: {
          opacity: 1,
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' views'
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.custom-icon{
  background: red;
}
</style>
