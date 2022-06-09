



const EditUser = ({ user , setEdit}) => {
    return (
        <div class="card mb-4">
            <h5 class="card-header">فرم ویرایش اطلاعات</h5>
            <form class="card-body">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label" for="multicol-username">نام کاربری</label>
                        <input type="text" id="multicol-username" class="form-control text-start" dir="ltr" placeholder={user.name} />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label" for="multicol-email">ایمیل</label>
                        <div class="input-group input-group-merge">
                            <span class="input-group-text" id="multicol-email2" dir="ltr">@example.com</span>
                            <input type="text" id="multicol-email" class="form-control text-start" dir="ltr" placeholder={user.email} aria-label="john.doe" aria-describedby="multicol-email2" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-password-toggle">
                            <label class="form-label" for="multicol-password">شماره تماس</label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="multicol-password" class="form-control text-start" dir="ltr" placeholder={user.phone} aria-describedby="multicol-password2" />
                                <span class="input-group-text cursor-pointer" id="multicol-password2"><i class="bx bx-phone"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-password-toggle">
                            <label class="form-label" for="multicol-confirm-password">رمز عبور</label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="multicol-confirm-password" class="form-control text-start" dir="ltr" placeholder="············" aria-describedby="multicol-confirm-password2" />
                                <span class="input-group-text cursor-pointer" id="multicol-confirm-password2"><i class="bx bx-hide"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-4">
                    <button type="submit" class="btn btn-danger me-sm-3 me-1">ویرایش اطلاعات</button>
                    <button onClick={() => setEdit(false)} type="reset" class="btn btn-label-secondary">انصراف</button>
                </div>
            </form>
        </div>
    );
}

export default EditUser;