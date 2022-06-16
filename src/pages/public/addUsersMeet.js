



const AddUsersMeet = () => {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <h5 className="card-header">جست و جو در بین مخاطبین</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <input type="text" className="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                                    <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                                <div className="btn-group col-sm-12 col-md-4">
                                    <div class="mb-3">
                                        <select id="defaultSelect" class="form-select">
                                            <option value="2">جست و جو بر اساس دسته بندی ها </option>
                                            <option value="2">تست </option>
                                            <option value="2">تست </option>
                                            <option value="2">تست </option>
                                            <option value="2">تست </option>
                                            <option value="2">تست </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header">لیست مخاطبین</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>انتخاب</th>
                                    <th>نام و نام خانوادگی</th>
                                    <th>شماره تماس</th>
                                    <th>دسته بندی</th>
                                    <th>مدرس</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" /></td>
                                    <td><span>خسرو رسولی</span></td>
                                    <td><span className="badge bg-label-secondary">09332839823</span></td>
                                    <td><span className="badge bg-label-secondary">برنامه نویس</span></td>
                                    <td><input className="form-check-input" type="radio" value="" /></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUsersMeet;