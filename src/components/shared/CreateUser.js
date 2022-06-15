import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const createUserValidation = Yup.object().shape({
    fullName: Yup.string().min(2, "نام کاربری بیش از حد کوتاه است").max(50, "نام کاربری بیش از حد بزرگ است").required("وارد کردن این فیلد الزامی است"),
    phone: Yup.string().required("وارد کردن این فیلد الزامی است").max(11 , "شماره تماس وارد شده بیش از حد مجاز است").matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره تماس وارد شده معتبر نیست"),
    email: Yup.string().email("پست الکترونیک وارد شده معتبر نیست").required("وارد کردن این فیلد الزامی است"),
});



const CreateUser = () => {

    const [select, setSelect] = useState("");

    return (
        <div className="card mb-2">
            <h5 className="card-header">ایجاد مخاطب جدید</h5>
            <div className="card-body">
                <Formik
                    initialValues={{
                        fullName: "",
                        phone: "",
                        email: "",
                    }}
                    validationSchema={createUserValidation}
                    onSubmit={values => {
                        console.log(select);
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="row">
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="name">نام و نام خانوادگی</label>
                                <Field type="text" name="fullName" className="form-control mt-2" placeholder="" />
                                {errors.fullName && touched.fullName ? <span className='text-danger'>{errors.fullName}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="name">شماره تماس</label>
                                <Field type="text" name="phone" className="form-control mt-2" placeholder="" />
                                {errors.phone && touched.phone ? <span className='text-danger'>{errors.phone}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <label htmlFor="name">پست الکترونیک</label>
                                <Field type="text" name="email" className="form-control mt-2" placeholder="" />
                                {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}
                            </div>
                            <div className="col-xs-12  col-md-6 my-2">
                                <div class="mb-3">
                                    <label className="form-label">دسته بندی</label>
                                    <select name='position' onChange={(e) => setSelect(e.target.value)} className="form-control mt-1">
                                        <option value="">لطفا دسته بندی را مشخص کنید</option>
                                        <option value="مورد یک">مورد یک</option>
                                        <option value="مورد دو">مورد دو</option>
                                        <option value="مورد سه">سه</option>
                                    </select>
                                    {
                                        select === "" ? <span className='text-danger'>لطفا دسته بندی مورد نظر را انتخاب کنید</span> : null
                                    }
                                </div>
                            </div>
                            <div className="">
                                <button type='submit' className="btn btn-secondary mt-2">ایجاد مخاطب</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default CreateUser;