import { useSelector } from 'react-redux';



const UsersTable = ({ filter }) => {

    const { contacts } = useSelector(state => state)
    const users = contacts.allContacts;

    if (!users) return <p>در حال دریافت اطلاعات</p>

    return (
        <div className="card">
            <h5 className="card-header">لیست مخاطبین</h5>
            <div className="table-responsive text-nowrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>نام و نام خانوادگی</th>
                            <th>شماره تماس</th>
                            <th>دسته بندی</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {
                            users.map(i => {
                                return i.username.includes(filter)
                                    ?
                                    <tr>
                                        <td><strong>{i.username}</strong></td>
                                        <td><span className="badge bg-label-secondary">{i.phone}</span></td>
                                        <td><span className="badge bg-label-secondary">{i.semat}</span></td>
                                        <td>
                                            <span className="badge bg-label-danger me-1 cursor-pointer">حذف</span>
                                        </td>
                                    </tr>
                                    :
                                    null
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default UsersTable;