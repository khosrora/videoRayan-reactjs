import { useState } from 'react';



const CreateContact = () => {

    const [contact, setContact] = useState(false)

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    {
                        contact
                            ?
                            <div className="card mb-2">
                                <h5 className="card-header">ایجاد مخاطب جدید</h5>
                                <div className="card-body">
                                    <form>
                                        <input type="text" className="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                                        <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                                            <span className="d-none d-sm-block">این اطلاعات از بین مخاطبین ثبت شده شما دریافت می شود</span>
                                            <button type="button" className="btn btn-danger">ثبت مخاطب جدید</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className="card mb-2">
                                <h5 className="card-header">جست و جو در بین مخاطبین</h5>
                                <div className="card-body">
                                    <form>
                                        <input type="text" className="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                                        <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                                            <span className="d-none d-sm-block">این اطلاعات از بین مخاطبین ثبت شده شما دریافت می شود</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    }
                </div>
                <div className="card">
                    <h5 className="card-header">جدول پایه</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>نام و نام خانوادگی</th>
                                    <th>شماره تماس</th>
                                    <th>دسته بندی</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td onClick={() => setContact(!contact)}><span className="badge bg-label-secondary p-2 me-1 cursor-pointer">
                                            {
                                                contact ?  "جست و جو از بین مخاطبین" : "اضافه کردن مخاطب جدید"
                                            }
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>خسرو رسولی</strong></td>
                                    <td><span className="badge bg-label-danger">09332839823</span></td>
                                    <td><span className="badge bg-label-primary">برنامه نویس</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">ویرایش</span></td>
                                </tr>
                                <tr>
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>خسرو رسولی</strong></td>
                                    <td><span className="badge bg-label-danger">09332839823</span></td>
                                    <td><span className="badge bg-label-primary">برنامه نویس</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">ویرایش</span></td>
                                </tr>
                                <tr>
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>خسرو رسولی</strong></td>
                                    <td><span className="badge bg-label-danger">09332839823</span></td>
                                    <td><span className="badge bg-label-primary">برنامه نویس</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">ویرایش</span></td>
                                </tr>
                                <tr>
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>خسرو رسولی</strong></td>
                                    <td><span className="badge bg-label-danger">09332839823</span></td>
                                    <td><span className="badge bg-label-primary">برنامه نویس</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">ویرایش</span></td>
                                </tr>
                                <tr>
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>خسرو رسولی</strong></td>
                                    <td><span className="badge bg-label-danger">09332839823</span></td>
                                    <td><span className="badge bg-label-primary">برنامه نویس</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">ویرایش</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateContact;