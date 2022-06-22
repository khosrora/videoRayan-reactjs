import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// ! imports
import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"
import { createMeet } from "../../../redux/actions/meetAction";
import Swal from 'sweetalert2';


const CreateBoxMeet = () => {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        Swal.fire({
            title: 'آیا مطمئن هستید ؟',
            text: "بعد از اضافه کردن جلسه میتوانید حذف و ویرایش کنید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله اضافه کن',
            cancelButtonText: 'منصرف شدم'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    name: title,
                    start_time: `${time.toDate().getHours()}:${time.toDate().getMinutes()}`,
                    start_date: date.toDate().toLocaleDateString('fa-IR'),
                    session_type: 1
                }
                dispatch(createMeet(data));
                navigate('/meetings');
            }
        });
    }

    return (
        <div className="content-wrapper">
            <div className="container-xxxl flex-grow-1 container-p-y">
                <div className="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="text-center zindex-1 m-auto mb-0">
                            جلسه شما به صورت ( کنفرانس ) ثبت خواهد شد
                        </h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-fullname">نام جلسه</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" class="form-control" id="basic-default-fullname" placeholder="مثال :‌ جلسه اول" />
                            </div>
                            <div className="row">
                                <div class="col-md-6">
                                    <label class="form-label" for="multicol-birthdate">لطفا تاریخ جلسه را مشخص کنید</label>
                                    <br />
                                    <DatePicker
                                        plugins={[weekends(), <DatePickerHeader />]}
                                        className="form-control"
                                        value={date}
                                        onChange={setDate}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        style={{
                                            width: "100%",
                                            boxSizing: "border-box",
                                            padding: "1.1rem"
                                        }}
                                        containerStyle={{
                                            width: "100%"
                                        }}
                                        placeholder="مثال :‌ 1 / 2 / 1400"
                                    />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="basic-default-company">لطفا زمان جلسه را انتخاب کنید</label>
                                    <br />
                                    <DatePicker
                                        disableDayPicker
                                        format="HH:mm"
                                        plugins={[
                                            <TimePicker hideSeconds />
                                        ]}
                                        value={time} onChange={setTime}
                                        style={{
                                            width: "100%",
                                            boxSizing: "border-box",
                                            padding: "1.1rem"
                                        }}
                                        containerStyle={{
                                            width: "100%"
                                        }}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        placeholder="مثال :‌18:‌00"
                                    />
                                </div>
                            </div>
                            <button onClick={handleSubmit} disabled={title && date && time ? false : true} type="submit" class="btn btn-secondary mt-4 m-auto">ایجاد جلسه</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBoxMeet;