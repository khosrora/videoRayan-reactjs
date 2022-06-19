import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../../../redux/actions/categoriesAction';
import Moment from '../../../utils/moment';
import Swal from 'sweetalert2';


const CartCategories = ({ setEdit, setDataEdit, filter }) => {

    const { categories } = useSelector(state => state)
    const data = categories.allCategories;

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از حذف همچنان میتوانید دسته بندی جدید اضافه کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله مطمئنم',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(id))
            }
        })
    }

    const handleEdit = (data) => {
        setDataEdit({ ...data })
        setEdit(true)
    }

    return (
        <>
            {
                data.map(i => {
                    return i.name.includes(filter)
                        ?
                        <div class="col-xs-6 col-sm-6 col-xl-3 my-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div class="content-left">
                                            <p class="secondary-font fw-medium text-sm">تاریخ ثبت :‌ <span><Moment date={i.updated_at} /></span> </p>
                                            <div class="d-flex align-items-baseline my-4">
                                                <h5 class="mb-0 me-2">{i.name}</h5>
                                            </div>
                                            <small>تعداد 5 کاربر برای این دسته بندی ثبت شده است</small>
                                        </div>
                                        <span onClick={() => handleDelete(i.id)} class="badge bg-label-danger rounded mx-2 p-2 cursor-pointer">
                                            <i class="bx bx-trash bx-xs"></i>
                                        </span>
                                        <span onClick={() => handleEdit({ ...i })} class="badge bg-label-secondary rounded p-2 cursor-pointer">
                                            <i class="bx bx-pencil bx-xs"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                )
            }
        </>
    );
}

export default CartCategories;