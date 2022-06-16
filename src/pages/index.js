import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { refreshUser } from "../redux/actions/authAction";

// ? layout
import LayoutAuth from '../components/layouts/auth/LayoutAuth';
import Layout from '../components/layouts/panel/Layout';

// ! Pages
import Login from "./auth/login";
import Profile from './public/profile';
import Categories from "./public/categories";
import CreateContact from "./public/createContact";
import Meetings from "./public/mettings";
import CreateMeeting from "./public/createMeeting";
import AddUsersMeet from "./public/addUsersMeet";


const Index = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(refreshUser());
    }, [])

    return (
        <Router>
            <Routes>
                {
                    auth.user === null
                        ?
                        <Route element={<LayoutAuth />} >
                            <Route path='/' element={<Login />} />
                        </Route>
                        :
                        <Route
                            path="*"
                            element={<Navigate to="/profile" replace />}
                        />
                }
                {
                    auth.user === null
                        ?
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                        :
                        <>
                            <Route element={<Layout />} >
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/create-categories' element={<Categories />} />
                                <Route path='/create-contacts' element={<CreateContact />} />
                                <Route path='/meetings' element={<Meetings />} />
                                <Route path='/create-meeting' element={<CreateMeeting />} />
                                <Route path='/add-users-meet/:id' element={<AddUsersMeet />} />
                            </Route>
                        </>
                }
            </Routes>
        </Router >
    );
}

export default Index;