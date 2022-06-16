import { useSelector } from 'react-redux';



const CartCategories = () => {

    const { categories } = useSelector(state => state)
    const data = categories.allCategories;

    if (!data) return <p>در حال دریافت اطلاعات</p>
    return (
        <>
            {
                data.map(i =>
                    <div class="col-xs-6 col-sm-6 col-xl-3 my-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-start justify-content-between">
                                    <div class="content-left">
                                        <p class="secondary-font fw-medium text-sm">تاریخ ثبت :‌ <span>1 / 4 / 1400</span> </p>
                                        <div class="d-flex align-items-baseline my-4">
                                            <h5 class="mb-0 me-2">{i.name}</h5>
                                        </div>
                                        <small>تعداد 5 کاربر برای این دسته بندی ثبت شده است</small>
                                    </div>
                                    <span class="badge bg-label-danger rounded mx-2 p-2 cursor-pointer">
                                        <i class="bx bx-trash bx-xs"></i>
                                    </span>
                                    <span class="badge bg-label-secondary rounded p-2 cursor-pointer">
                                        <i class="bx bx-pencil bx-xs"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default CartCategories;