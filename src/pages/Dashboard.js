import React from 'react'
import Chart from '../components/charts/Chart'
import DataTable from '../components/DataTable'


export default function Dashboard() {
    return (
        <div className='mainRight right'>
            <div className="cardsContainer">

                <div className="card">
                    <div className="cardLeft"><i className="fa-solid fa-calendar-days cardIcon"></i></div>
                    <div className="cardRight"><p>Appointments</p> <p className='cardNumber'>213</p></div>
                </div>

                <div className="card">
                    <div className="cardLeft">
                        <i className="fa-solid fa-user cardIcon"></i>
                    </div>
                    <div className="cardRight"><p>New Patients</p> <p className='cardNumber'>213</p></div>
                </div>

                <div className="card">
                    <div className="cardLeft">
                        <i className="fa-solid fa-pills cardIcon"></i>
                    </div>
                    <div className="cardRight"><p>Operations</p> <p className='cardNumber'>213</p></div>
                </div>

                <div className="card"><div className="cardLeft"><i className="fa-solid fa-dollar-sign cardIcon"></i>
                </div>
                    <div className="cardRight"><p>Earnings</p> <p className='cardNumber'>213</p></div></div>
            </div>

            <div className="pieContainer">
                <div className="pieCard">
                    <Chart type='pie' getSeries='patientsAge' />
                </div>
                <div className="pieCard">
                    <Chart type='pie' getSeries='patientsGender' />
                </div>
                <div className="pieCard">
                    <Chart type='donut' getSeries='departments' />
                </div>
            </div>

            <div className="lastAppointments">
                <h2>Last Appointments</h2>
                <DataTable />
            </div>
        </div>
    )
}
