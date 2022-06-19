import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createCategory } from '../../../redux/actions/categoriesAction';
import Swal from 'sweetalert2';



const createCategoryValidation = Yup.object().shape({
    name: Yup.string().required("وارد کردن فیلد نام دسته بندی ضروری است"),
    desc: Yup.string().min(5, "توضیحات را بین 5 و 50 کاراکتر در نظر بگیرید").max(50, "توضیحات را بین 5 و 50 کاراکتر در نظر بگیرید").required("لطفا توضیحات دسته بندی را وارد کنید")
});


const CreateCategory = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                desc: ''
            }}
            validationSchema={createCategoryValidation}
            onSubmit={values => {
                Swal.fire({
                    title: 'آیا مطمئن هستید ؟',
                    text: "بعد از ساخت دسته بندی میتوانید حذف و ویرایش کنید",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'بله اضافه کن',
                    cancelButtonText: 'منصرف شدم'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        dispatch(createCategory(values));
                    }
                })
            }}
        >
            {({ errors, touched }) => (
                <Form className="card mb-2">
                    <h5 className="card-header">ایجاد دسته بندی جدید</h5>
                    <div className="card-body row">
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="name">نام دسته بندی</label>
                            <Field type="text" className="form-control mt-2" id="name" name="name" aria-describedby="defaultFormControlHelp" />
                            {errors.name && touched.name ? <span className='text-danger'>{errors.name}</span> : null} <br />
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            <label htmlFor="desc">توضیحات دسته بندی</label>
                            <Field type="text" className="form-control mt-2" id="desc" name="desc" aria-describedby="defaultFormControlHelp" />
                            {errors.desc && touched.desc ? <span className='text-danger'>{errors.desc}</span> : null} <br />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-secondary mt-2">
                                ثبت دسته بندی جدید
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateCategory;