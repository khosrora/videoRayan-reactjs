



const CardsProfile = () => {
    return (
        <>
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="content-left">
                                <span class="secondary-font fw-medium">جلسه</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">21,459</h4>
                                    <small class="text-success">(+29%)</small>
                                </div>
                                <small>مجموع کاربران</small>
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
                                <span class="secondary-font fw-medium">کاربران ویژه</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">4,567</h4>
                                    <small class="text-success">(+18%)</small>
                                </div>
                                <small>تحلیل هفته اخیر </small>
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
                                <span class="secondary-font fw-medium">کاربران فعال</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">19,860</h4>
                                    <small class="text-danger">(-14%)</small>
                                </div>
                                <small>تحلیل هفته اخیر</small>
                            </div>
                            <span class="badge bg-label-success rounded p-2">
                                <i class="bx bx-group bx-sm"></i>
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
                                <span class="secondary-font fw-medium">کاربران در انتظار</span>
                                <div class="d-flex align-items-baseline mt-2">
                                    <h4 class="mb-0 me-2">237</h4>
                                    <small class="text-success">(+42%)</small>
                                </div>
                                <small>تحلیل هفته اخیر</small>
                            </div>
                            <span class="badge bg-label-warning rounded p-2">
                                <i class="bx bx-user-voice bx-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsProfile;