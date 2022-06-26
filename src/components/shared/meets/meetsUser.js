import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeet, getMeets, sendSms } from '../../../redux/actions/meetAction';
import Swal from 'sweetalert2';
import Loader from '../loader';



const MeetsUser = ({ filter }) => {

    const { meets, global } = useSelector(state => state);
    const sessions = meets.allMeets;
    console.log(sessions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeets())
    }, []);

    const handleSendSms = (id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "پیامک حاوی آدرس جلسه برای کاربران ارسال خواهد شد.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله ارسال کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(sendSms(id));
            }
        });
    }

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
                                                <td>
                                                    <span className="badge bg-label-secondary me-1">{i.is_ended !== 0 ? "اتمام جلسه" : "در انتظار شروع"}</span>
                                                    <span className="badge bg-label-primary cursor-pointer">شروع جلسه</span>
                                                </td>
                                                <td>
                                                    <i onClick={() => handleDelete(i.id)} className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                                    <Link to={`/add-users-meet/${i.id}`} className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</Link>
                                                    <a href={`https://video.videorayan.com/${i.sess_token}`} target="_blank" className='badge bg-label-warning cursor-pointer'>برو به جلسه</a>
                                                    <span className='badge bg-label-success cursor-pointer' onClick={() => handleSendSms(i.id)}>ارسال پیام</span>
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