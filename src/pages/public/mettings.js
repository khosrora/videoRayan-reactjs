



const Meetings = () => {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <h5 className="card-header">جست و جو در بین جلسات</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-6">
                                    <label for="defaultSelect" class="form-label">جست و جو جلسات</label>
                                    <input type="text" className="form-control" id="defaultFormControlInput" placeholder="عنوان جلسات" aria-describedby="defaultFormControlHelp" />
                                </div>
                                <div className="col-xs-12 col-6">
                                    <div class="mb-3">
                                        <label for="defaultSelect" class="form-label">فیلتر</label>
                                        <select id="defaultSelect" class="form-select">
                                            <option value="2">قدیمی ترین</option>
                                            <option value="3">جدیدترین</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>عنوان</th>
                                    <th>تاریخ شروع</th>
                                    <th>وضعیت جلسات</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td><strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-secondary">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-secondary">لیست انتظار</span></td>
                                    <td>
                                        <i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                        <span className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-secondary">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-secondary">لیست انتظار</span></td>
                                    <td>
                                        <i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                        <span className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-secondary">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-secondary">لیست انتظار</span></td>
                                    <td>
                                        <i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                        <span className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-secondary">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-secondary">لیست انتظار</span></td>
                                    <td>
                                        <i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                        <span className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-secondary">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-secondary">لیست انتظار</span></td>
                                    <td>
                                        <i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i>
                                        <span className="badge bg-label-secondary me-1 cursor-pointer">افزودن مخاطب</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meetings;