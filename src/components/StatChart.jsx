import ReactApexChart from "react-apexcharts"

const StatChart = ({ series }) => {
    const options = {
        chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: false
            },
            background: "transparent"
        },

        dataLabels: {
            enabled: true
        },

        theme: {
            mode: 'dark',
        },

        colors: ["#c10005"],

        xaxis: {
            categories: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed']
        },

        yaxis: {
            show: false
        }
    }


    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="radar" height={350} />
        </div>
    )
}

export default StatChart