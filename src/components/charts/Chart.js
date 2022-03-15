import React from 'react'
import ReactApexChart from "react-apexcharts";

const Chart = ({ getSeries, type }) => {
    const series = {
        patientsAge: [44, 10, 20, 30, 40],
        patientsGender: [103, 154],
        departments: [44, 55, 41, 17, 15]
    }

    const options = {
        chart: {
            type: type,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    return (
        <div id="chart">
            <h3 className='chatTitle'>
                {getSeries === 'patientsAge' && 'Patients Age'}
                {getSeries === 'patientsGender' && 'Patients Gender'}
                {getSeries === 'departments' && 'Departments'}
            </h3>
            <ReactApexChart options={options}
                series={(getSeries === 'patientsAge' && series.patientsAge) || (getSeries === 'patientsGender' && series.patientsGender) || (getSeries === 'departments' && series.departments)}
                type={type} />
        </div>

    )

}

export default Chart