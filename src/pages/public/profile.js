



const Profile = () => {
    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card mb-4">
                    <div class="user-profile-header-banner">
                        <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" class="rounded-top" />
                    </div>
                    <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                            <img src="../../assets/img/avatars/1.png" alt="user image" class="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img" />
                        </div>
                        <div class="flex-grow-1 mt-3 mt-sm-5">
                            <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="user-profile-info">
                                    <h4>جان اسنو</h4>
                                    <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-pen"></i> طراح UX</li>
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-map"></i> شهر تبریز</li>
                                        <li class="list-inline-item fw-semibold">
                                            <i class="bx bx-calendar-alt"></i> عضویت در فروردین 1400
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" class="btn btn-primary text-nowrap">
                                    <i class="bx bx-user-check"></i> متصل
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4 mb-4 container m-auto">
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
            </div>
        </div>
    );
}

export default Profile;