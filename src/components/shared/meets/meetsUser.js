import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeet, getMeets } from '../../../redux/actions/meetAction';
import Swal from 'sweetalert2';
import Loader from '../loader';



const MeetsUser = ({ filter }) => {

    const { meets, global } = useSelector(state => state);
    const sessions = meets.allMeets
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeets())
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از حذف  میتوانید جلسه دیگری ایجاد کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteMeet(id));
            }
        });
    }

    return (
        <div className="card">
            <div className="table-responsive text-nowrap">
                {
                    global.load
                        ?
                        <Loader />
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>عنوان</th>
                                    <th>تاریخ شروع</th>
                                    <th>زمان شروع</th>
                                    <th>وضعیت جلسات</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {
                                    sessions.map(i => {
                                        return i.name.includes(filter)
                                            ?
                                            <tr>
                                                <td><strong>{i.name}</strong></td>
                                                <td><span className="badge bg-label-secondary">{i.start_date}</span></td>
                                                <td><span className="badge bg-label-secondary">{i.start_time}</span></td>
                                                <td><span className="badge bg-label-secondary">{i.is_ended !== 0 ? "اتمام جلسه" : "لیست انتظار"}</span></td>
                                                <td>
                                                    <i onClick={() => handleDelete(i.id)} className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                                    <Link to={`/add-users-meet/${"1"}`} className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</Link>
                                                </td>
                                            </tr>
                                            :
                                            null
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                }

            </div>
        </div>
    );
}

export default MeetsUser;