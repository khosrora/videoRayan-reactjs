



const CreateMeeting = () => {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">طرح پایه</h5>
                        <small class="text-muted float-end">برچسب پیش‌فرض</small>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-fullname">نام جلسه</label>
                                <input type="text" class="form-control" id="basic-default-fullname" placeholder="مثال :‌ جلسه اول" />
                            </div>
                            <div className="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="multicol-birthdate">تاریخ شروع جلسه</label>
                                    <input type="text" id="multicol-birthdate" class="form-control dob-picker" placeholder="YYYY/MM/DD" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="basic-default-company">زمان جلسه</label>
                                    <input type="time" class="form-control" id="basic-default-company" placeholder="" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-danger">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateMeeting;