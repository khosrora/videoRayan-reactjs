import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('پست الکترونیک شما معتبر نیست').required('وارد کردن پست الکترونیک ضروری است'),
    password: Yup.string().min(4, "کلمه عبور کوتاه است").required("وارد کردن کلمه عبور ضروری است")
});


const Login = () => {
    const [see, setSee] = useState(false)
    const dispatch = useDispatch();

    const { global } = useSelector(state => state);

    return (
        <div className="w-px-400 mx-auto">
            <div className="app-brand mb-2">
                <a href="index.html" className="app-brand-link gap-2 mb-2">
                    <span className="app-brand-text demo h3 mb-0 fw-bold">ویدیو رایان</span>
                </a>
            </div>
            <p className="mb-4">فرم ورود به حساب کاربری</p>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={values => {
                    dispatch(loginUser(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">پست الکترونیک</label>
                            <Field type="text" className="form-control text-start" dir="ltr" id="email" name="email" placeholder="ایمیل یا نام کاربری خود را وارد کنید" autoFocus />
                            {errors.email && touched.email ? <div className='text-danger text-sm'>{errors.email}</div> : null}
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password">کلمه عبور</label>
                            </div>
                            <div className="input-group input-group-merge">
                                <Field type={see ? "text" : "password"} className="form-control text-start" dir="ltr" name="password" placeholder="············" aria-describedby="password" />
                                <span onClick={() => setSee(!see)} className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                            </div>
                            {errors.password && touched.password ? <div className='text-danger text-sm'>{errors.password}</div> : null}
                        </div>
                        <button type='submit' className="btn btn-secondary d-grid w-100 mt-4">
                            {
                                global.load 
                                ?
                                "لطفا منتظر باشید"
                                :
                                "ورود"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;