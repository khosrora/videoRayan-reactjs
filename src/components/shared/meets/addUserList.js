import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/actions/contactAction';
import { useParams } from "react-router-dom";
import { addMasterToMeet, addUserToMeet } from '../../../redux/actions/meetAction';


const AddUserList = () => {

    const { contacts } = useSelector(state => state);
    const users = contacts.allContacts;
    let { id: sessionId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
    }, [])

    const handleAddUser = (userId) => {
        const data = {
            c_id: userId,
            s_id: JSON.parse(sessionId)
        }
        dispatch(addUserToMeet(data))
    }

    const handleAddMaster = (userId) => {
        const data = {
            c_id: userId,
            s_id: JSON.parse(sessionId)
        }
        dispatch(addMasterToMeet(data));
    }

    return (
        <div className="card">
            <h5 className="card-header">لیست مخاطبین</h5>
            <div className="table-responsive text-nowrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>انتخاب</th>
                            <th>نام و نام خانوادگی</th>
                            <th>شماره تماس</th>
                            <th>سمت</th>
                            <th>مدرس</th>
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {
                            users.map(i =>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" value="" onChange={() => handleAddUser(i.id)} /></td>
                                    <td><span>{i.username}</span></td>
                                    <td><span className="badge bg-label-secondary">{i.phone}</span></td>
                                    <td><span className="badge bg-label-secondary">{i.semat}</span></td>
                                    <td><input className="form-check-input" type="radio" name='master' onChange={() => handleAddMaster(i.id)} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddUserList;