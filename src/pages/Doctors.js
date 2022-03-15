import Breadcrumb from "../components/Breadcrumb";
import DataTable from "../components/DataTable";


export default function Doctors() {
    return (
        <div className='mainRight right'>
            <Breadcrumb />
            <p className="pageTitle">Doctors List</p>
            <div className="tableContainer">
                <DataTable />
            </div>
        </div>
    )
}
