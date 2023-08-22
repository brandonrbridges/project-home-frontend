'use client'

// Packages
import EChartsReact from 'echarts-for-react'

export const PropertyChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'pie',
      },
    ],
  }

  return (
    <div>
      <EChartsReact option={option} />
    </div>
  )
}
