import { useState } from 'react';
import CreateBoxMeet from './createBoxMeet';



const ModelsCard = () => {

    const [meet, setMeet] = useState();

    const handleSubmit = (name) => {
        setMeet(name);
    }

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div class="container-xxl flex-grow-1 container-p-y">
                        <div class="card overflow-hidden">
                            <div class="help-center-header d-flex flex-column justify-content-center align-items-center">
                                <h5 class="text-center zindex-1 secondary-font">سلام. لطفا نوع جلسه را انتخاب کنید</h5>
                                <div class="help-center-popular-articles py-5">
                                    <div class="container-xl">
                                        <div class="row">
                                            <div class="col-lg-10 mx-auto">
                                                <div class="row mb-3">
                                                    <div class="col-md-4 mb-md-0 mb-4">
                                                        <div class="card border shadow-none">
                                                            <div class="card-body text-center">
                                                                <img class="mb-4" src="./assets/img/icons/unicons/rocket-square.png" height="48" alt="Help center articles" />
                                                                <h5>حضوری</h5>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با</p>
                                                                <p onClick={() => handleSubmit("حضوری")} class="btn btn-label-secondary" >تایید جلسه</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4 mb-md-0 mb-4">
                                                        <div class="card border shadow-none">
                                                            <div class="card-body text-center">
                                                                <img class="mb-4" src="./assets/img/icons/unicons/cube.png" height="48" alt="Help center articles" />
                                                                <h5>کنفرانس</h5>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
                                                                <p onClick={() => handleSubmit("کنفرانس")} class="btn btn-label-secondary" >تایید جلسه</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="card border shadow-none">
                                                            <div class="card-body text-center">
                                                                <img class="mb-4" src="./assets/img/icons/unicons/desktop.png" height="48" alt="Help center articles" />
                                                                <h5>نوع سوم</h5>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده</p>
                                                                <p onClick={() => handleSubmit("نوع سوم")} class="btn btn-label-secondary" >تایید جلسه</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    meet ?
                        <CreateBoxMeet meet={meet}/>
                        : null
                }
            </div>
        </div>
    );
}

export default ModelsCard;