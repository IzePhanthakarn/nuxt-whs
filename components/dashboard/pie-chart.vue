<template>
  <div>
    <apexchart class="h-96 p-1 bg-gray4 rounded-2xl" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [44, 55, 13, 33, 26],

      chartOptions: {
        chart: {
          // width: 380,
          // height: 300,
          type: 'donut',
        },

        legend: {
          position: 'right',
          labels: {
            colors: '#f5f5f7',
            useSeriesColors: false
          },
        },
        colors: ['#ff4561', '#00e397', '#ff8a4c', '#785dd0', '#a9a9a9',],
        labels: [
          'Suphanburi',
          'Nakhon Pathom',
          'Lat Phrao',
          'Ratchaburi',
          'Pattaya',
        ],
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200,
        //       },
        //     },
        //   },
        // ],
      },
    }
  },
}
</script>