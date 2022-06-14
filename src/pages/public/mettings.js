



const Meetings = () => {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <div className="card mb-2">
                        <h5 className="card-header">جست و جو در بین جلسات</h5>
                        <div className="card-body">
                            <form>
                                <input type="text" className="form-control" id="defaultFormControlInput" placeholder="عنوان جلسات" aria-describedby="defaultFormControlHelp" />
                                <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                                    <span className="d-none d-sm-block">این اطلاعات از بین جلسات ثبت شده شما دریافت می شود</span>
                                </div>
                            </form>
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
                                    <td><i className="align-middle fmenu-icon tf-icons bx bx-trash text-danger me-3 cursor-pointer"></i> <strong>جلسه اول</strong></td>
                                    <td><span className="badge bg-label-danger">1 / 4 / 1400</span></td>
                                    <td><span className="badge bg-label-success">لیست انتظار</span></td>
                                    <td><span className="badge bg-label-warning me-1 cursor-pointer">افزودن مخاطب</span></td>
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