import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
// ?
import LayoutAuth from '../components/layouts/auth/LayoutAuth';
import Layout from '../components/layouts/panel/Layout';

// ! Pages
import Login from "./auth/login";
import Profile from './public/profile';


const Index = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutAuth />} >
                    <Route path='/login' element={<Login />} />
                </Route>
                <Route element={<Layout />} >
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Routes>
        </Router >
    );
}

export default Index;