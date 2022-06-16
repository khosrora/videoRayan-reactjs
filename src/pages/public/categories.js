import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartCategories from '../../components/shared/Categories';
import CreateCategory from '../../components/shared/createCategory';
import { getCategories } from '../../redux/actions/categories';



const Categories = () => {

    const [create, setCreate] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="col-md-12">
                    {
                        create
                            ?
                            <CreateCategory />
                            :
                            <div class="card mb-2">
                                <h5 class="card-header">جست و جو در بین دسته بندی ها</h5>
                                <div class="card-body">
                                    <div>
                                        <input type="text" class="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                                        <div id="defaultFormControlHelp" class="form-text">
                                            این اطلاعات بین دسته بندی هایی که شما ثبت کرده اید دریافت میشود
                                        </div>
                                    </div>
                                </div>
                            </div>

                    }
                </div>
                <div className="flex row m-auto">
                    {
                        create
                            ?
                            <div onClick={() => setCreate(!create)} class="cursor-pointer card col-sm-6 col-xl-3 my-2 d-flex justify-content-center align-items-center border rounded">
                                <i class="bx bx-search bx-lg"></i>
                                <br />
                                <p>جست و جو از بین دسته بندی ها</p>
                            </div>
                            :
                            <div onClick={() => setCreate(!create)} class="cursor-pointer card col-sm-6 col-xl-3 my-2 d-flex justify-content-center align-items-center border rounded">
                                <i class="bx bx-plus bx-lg"></i>
                                <br />
                                <p>دسته بندی جدید اضافه کنید</p>
                            </div>
                    }
                    <CartCategories />
                 
                </div>
            </div>
        </div>
    );
}

export default Categories;