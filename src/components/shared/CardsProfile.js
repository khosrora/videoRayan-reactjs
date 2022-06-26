



const CardsProfile = () => {
    return (
        <>
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="content-left">
                                <span class="secondary-font fw-medium">جلسات</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">21,459</h4>
                                </div>
                                <small>مجموع جلسات ثبت شده</small>
                            </div>
                            <span class="badge bg-label-primary rounded p-2">
                                <i class="bx bx-user bx-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="content-left">
                                <span class="secondary-font fw-medium">جلسات در لیست انتظار</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">237</h4>
                                </div>
                                <small>جلساتی که  در آینده شروع میشوند</small>
                            </div>
                            <span class="badge bg-label-warning rounded p-2">
                                <i class="bx bx-user-voice bx-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="content-left">
                                <span class="secondary-font fw-medium">دسته بندی ها</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">4,567</h4>
                                    <small class="text-success"></small>
                                </div>
                                <small>دسته بندی های اضافه شده</small>
                            </div>
                            <span class="badge bg-label-danger rounded p-2">
                                <i class="bx bx-user-plus bx-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="content-left">
                                <span class="secondary-font fw-medium">کاربران</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">19,860</h4>
                                </div>
                                <small>مجموع افراد ثبت شده</small>
                            </div>
                            <span class="badge bg-label-success rounded p-2">
                                <i class="bx bx-group bx-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsProfile;