import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const changePassValidation = Yup.object().shape({
    password: Yup.string().min(6, "کلمه عبور خود را بیشتر از 6 کاراکتر انتخاب کنید").max(50, "کلمه عبور شما بیشتر از حد مجاز است").required("لطفا کلمه عبور خود را وارد کنید"),
    confirmPassword: Yup.string().required("لطفا تایید کلمه عبور خود را وارد کنید").oneOf([Yup.ref('password'), null], 'کلمه های عبور مغایرت دارند'),
});



const ResetPassword = () => {

    const [passwordSee, setPasswordSee] = useState(false)
    const [confirmSee, setConfirmSee] = useState(false)

    return (
        <div className="card mb-4">
            <h5 className="card-header">فرم تغییر کلمه عبور</h5>
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={changePassValidation}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="password">کلمه عبور</label>
                                <div className="input-group input-group-merge">
                                    <Field type={passwordSee ? "text" : "password"} id="password" name='password' className="form-control text-start" dir="ltr" placeholder=".........." aria-describedby="multicol-password2" />
                                    <span onClick={() => setPasswordSee(!passwordSee)} className="input-group-text cursor-pointer" id="password"><i className="bx bx-show"></i></span>
                                </div>
                                {errors.password && touched.password ? <span className='text-danger'>{errors.password}</span> : null}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="confirmPassword">تایید کلمه عبور</label>
                                <div className="input-group input-group-merge">
                                    <Field type={confirmSee ? "text" : "password"} id="confirmPassword" name='confirmPassword' className="form-control text-start" dir="ltr" placeholder="......." />
                                    <span onClick={() => setConfirmSee(!confirmSee)} className="input-group-text cursor-pointer" id="password"><i className="bx bx-show"></i></span>
                                </div>
                                {errors.confirmPassword && touched.confirmPassword ? <span className='text-danger'>{errors.confirmPassword}</span> : null}
                            </div>
                        </div>
                        <div className="pt-4">
                            <button type="submit" className="btn btn-secondary me-sm-3 me-1">
                                تغییر کلمه عبور
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResetPassword;