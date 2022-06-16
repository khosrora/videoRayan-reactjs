import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { editUserAction } from './../../redux/actions/userAction';

const EditUserValidation = Yup.object().shape({
    name: Yup.string().min(2, "نام انتخاب شده کوتاه است").max(100, "نام انتخاب شده بیش از حد بزرگ است").required("وارد کردن نام ضروری است"),
    family: Yup.string().min(2, "نام خانوادگی انتخاب شده کوتاه است").max(100, "نام خانوادگی انتخاب شده بیش از حد بزرگ است").required("وارد کردن نام خانوادگی ضروری است"),
    email: Yup.string().email("پست الکترونیک وارد شده معتبر نیست").required("وارد کردن پست الکترونیک ضروری است"),
    phone: Yup.string().matches("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه وارد شده نامعتبر است").required("وارد کردن شماره همراه ضروری است"),
});



const EditUser = ({ user }) => {
    const dispatch = useDispatch();
    return (
        <div className="card mb-4">
            <h5 className="card-header">فرم ویرایش اطلاعات</h5>
            <Formik
                initialValues={{
                    name: '',
                    family: '',
                    email: '',
                    phone: '',
                }}
                validationSchema={EditUserValidation}
                onSubmit={values => {
                    dispatch(editUserAction(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="name">نام</label>
                                <Field type="text" id="name" name='name' className="form-control text-start" dir="ltr" placeholder={user.name} />
                                {errors.name && touched.name ? <span className='text-danger'>{errors.name}</span> : null}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="family">نام خانوادگی</label>
                                <Field type="text" id="family" name='family' className="form-control text-start" dir="ltr" placeholder={user.family} />
                                {errors.family && touched.family ? <span className='text-danger'>{errors.family}</span> : null}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="email">پست الکترونیک</label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text" id="email" dir="ltr">@example.com</span>
                                    <Field type="text" id="email" name='email' className="form-control text-start" dir="ltr" placeholder={user.email} aria-label="john.doe" aria-describedby="multicol-email2" />
                                </div>
                                {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : null}
                            </div>
                            <div className="col-md-6">
                                <div className="form-password-toggle">
                                    <label className="form-label" htmlFor="phone">شماره تماس</label>
                                    <div className="input-group input-group-merge">
                                        <Field type="tel" id="phone" name='phone' className="form-control text-start" dir="ltr" placeholder={user.phone} aria-describedby="multicol-password2" />
                                        <span className="input-group-text cursor-pointer" id="phone"><i className="bx bx-phone"></i></span>
                                    </div>
                                    {errors.phone && touched.phone ? <span className='text-danger'>{errors.phone}</span> : null}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="btn btn-secondary me-sm-3 me-1">
                                ویرایش اطلاعات
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditUser;