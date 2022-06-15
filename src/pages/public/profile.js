import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardsProfile from '../../components/shared/CardsProfile';
import EditUser from '../../components/shared/EditUser';
import ResetPassword from '../../components/shared/resetPassword';
import Moment from '../../utils/moment';




const Profile = () => {


    const { auth } = useSelector(state => state);
    const [user] = useState(auth.user)
    const [changePass, setChangePass] = useState(false)

    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
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
                                    <h4>{user.name}</h4>
                                    <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-phone"></i> {user.name}</li>
                                        <li class="list-inline-item fw-semibold">
                                            <i class="bx bx-calendar-alt"></i> عضویت در <Moment date={user.created_at} />
                                        </li>
                                    </ul>
                                </div>
                                <p onClick={() => setChangePass(!changePass)} class="btn btn-secondary text-nowrap">
                                    <i class="bx bx-user-check"></i>
                                    {
                                        !changePass 
                                        ?
                                        "تغییر کلمه عبور" : "انصراف"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4 mb-4 container m-auto">
                {
                    changePass
                        ?
                        <ResetPassword />
                        : null
                }
                <CardsProfile />
                <EditUser user={user} />
            </div>
        </div>
    );
}

export default Profile;