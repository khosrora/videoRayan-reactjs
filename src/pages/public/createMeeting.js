import { useState } from 'react';
import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"

// ! components
import ModelsCard from '../../components/shared/ModelsCard';

const CreateMeeting = () => {
    const [model, setModel] = useState(undefined);
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    console.log(title);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
    }
    return (
        <>
            {
                model === undefined ?
                    <ModelsCard setModel={setModel} />
                    :
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <div className="card">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">فرم ایجاد جلسه</h5>
                                    <span class="cursor-pointer float-end btn btn-label-danger" onClick={() => setModel(undefined)}>بازگشت به مرحله قبل</span>
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
                                                    format="HH:mm:ss"
                                                    plugins={[
                                                        <TimePicker />
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
                                                    placeholder="مثال :‌18 :‌00 :‌00"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card mt-4 col-12">
                                <div class="card-body">
                                    <ul class="timeline ms-2">
                                        <li class="timeline-item timeline-item-transparent">
                                            <span class="timeline-point timeline-point-warning"></span>
                                            <div class="timeline-event">
                                                <div class="timeline-header mb-1">
                                                    <h6 class="mb-0 mt-n1">نام جلسه :‌</h6>
                                                    {
                                                        title
                                                            ?
                                                            <small className="text-success">تایید شد</small>
                                                            :
                                                            <small className="text-danger">لطفا ابتدا نام جلسه را وارد کنید</small>
                                                    }
                                                </div>
                                                <div class="d-flex flex-wrap align-items-center">
                                                    <div>
                                                        <h6 class="mb-1">{title}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="timeline-item timeline-item-transparent">
                                            <span class="timeline-point timeline-point-info"></span>
                                            <div class="timeline-event">
                                                <div class="timeline-header mb-1">
                                                    <h6 class="mb-0 mt-n1">تاریخ ثبت شده جلسه</h6>
                                                    {
                                                        date
                                                            ?
                                                            <small className="text-success">تایید شد</small>
                                                            :
                                                            <small className="text-danger">لطفا ابتدا تاریخ جلسه  را وارد کنید</small>
                                                    }
                                                </div>
                                                <p class="mb-0">1400 / 2 / 16</p>
                                            </div>
                                        </li>
                                        <li class="timeline-item timeline-item-transparent">
                                            <span class="timeline-point timeline-point-success"></span>
                                            <div class="timeline-event pb-0">
                                                <div class="timeline-header mb-1">
                                                    <h6 class="mb-0 mt-n1">زمان شروع جلسه</h6>
                                                    {
                                                        time
                                                            ?
                                                            <small className="text-success">تایید شد</small>
                                                            :
                                                            <small className="text-danger">لطفا ابتدا زمان جلسه  را وارد کنید</small>
                                                    }
                                                </div>
                                                <p class="mb-0">18:00</p>
                                            </div>
                                        </li>
                                        <li class="timeline-end-indicator">
                                            {
                                                title && date && time
                                                    ?
                                                    <i class="bx bx-check-circle text-success"></i>
                                                    :
                                                    <i class="bx bx-check-circle"></i>
                                            }
                                        </li>
                                    </ul>
                                    <button onClick={handleSubmit} disabled={title && date && time ? false : true} type="submit" class="btn btn-danger mt-4 m-auto">ایجاد جلسه</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default CreateMeeting;