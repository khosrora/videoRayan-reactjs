import { useState } from 'react';
import MeetsUser from '../../components/shared/meets/meetsUser';
import SearchMeets from '../../components/shared/meets/searchMeets';



const Meetings = () => {

    const [filter, setFilter] = useState("");

    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <SearchMeets setFilter={setFilter} />
                <MeetsUser filter={filter} />
            </div>
        </div>
    );
}

export default Meetings;