import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateUser from "../../components/shared/contacts/CreateUser";
import SearchContact from '../../components/shared/contacts/searchContact';
import UsersTable from '../../components/shared/contacts/usersTable';
import { getContacts } from '../../redux/actions/contactAction';


const Contacts = () => {

    const [filter, setFilter] = useState("");
    console.log(filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts())
    }, [])

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="col-md-12">
                    <CreateUser />
                    <SearchContact setFilter={setFilter} />
                </div>
                <UsersTable filter={filter} />
            </div>
        </div>
    );
}

export default Contacts;