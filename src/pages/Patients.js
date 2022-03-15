import Breadcrumb from '../components/Breadcrumb'
import DataTable from '../components/DataTable'

export default function Patients() {
    return (
        <div className='mainRight right'>
            <Breadcrumb />
            <p className="pageTitle">Patients List</p>
            <div className="tableContainer">
                <DataTable />
            </div>
        </div>
    )
}
