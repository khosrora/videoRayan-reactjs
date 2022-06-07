



const Login = () => {
    return (
        <div class="w-px-400 mx-auto">
            <div class="app-brand mb-4">
                <a href="index.html" class="app-brand-link gap-2 mb-2">
                    <span class="app-brand-text demo h3 mb-0 fw-bold">ویدیو رایان</span>
                </a>
            </div>
            <p class="mb-4">فرم ورود به حساب کاربری</p>
            <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                <div class="mb-3">
                    <label for="email" class="form-label">ایمیل یا نام کاربری</label>
                    <input type="text" class="form-control text-start" dir="ltr" id="email" name="email-username" placeholder="ایمیل یا نام کاربری خود را وارد کنید" autofocus />
                </div>
                <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">رمز عبور</label>
                        <a href="auth-forgot-password-cover.html">
                            <small>رمز عبور را فراموش کردید؟</small>
                        </a>
                    </div>
                    <div class="input-group input-group-merge">
                        <input type="password" id="password" class="form-control text-start" dir="ltr" name="password" placeholder="············" aria-describedby="password" />
                        <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="remember-me" />
                        <label class="form-check-label" for="remember-me" defaultChecked> به خاطر سپاری </label>
                    </div>
                </div>
                <button class="btn btn-primary d-grid w-100">ورود</button>
            </form>
            <p class="text-center">
                <span>کاربر جدید هستید؟</span>
                <a href="auth-register-cover.html">
                    <span>یک حساب بسازید</span>
                </a>
            </p>
        </div>
    );
}

export default Login;