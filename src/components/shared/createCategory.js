import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createCategory } from '../../redux/actions/categories';


const createCategoryValidation = Yup.object().shape({
    name: Yup.string().required("وارد کردن فیلد نام دسته بندی ضروری است")
});


const CreateCategory = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
            }}
            validationSchema={createCategoryValidation}
            onSubmit={values => {
                dispatch(createCategory(values));
            }}
        >
            {({ errors, touched }) => (
                <Form class="card mb-2">
                    <h5 class="card-header">ایجاد دسته بندی جدید</h5>
                    <div class="card-body">
                        <div>
                            <Field type="text" class="form-control" id="name" name="name" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                            {errors.name && touched.name ? <span className='text-danger'>{errors.name}</span> : null} <br />
                            <button type="submit" className="btn btn-danger mt-2">ثبت دسته بندی جدید</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default CreateCategory;