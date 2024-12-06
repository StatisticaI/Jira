import { Button } from "antd";
import { useState, useEffect } from "react";
import AddIssueModal from "../../components/sheard/IssueModal/Add";
import EditIssueModal from "../../components/sheard/IssueModal/Edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueData } from "../../state-managment/slices/issues";

import './index.css';

const Cabinet = () => {   
    const dispatch = useDispatch();
    const [ showModal, setShwModal ] = useState(false);
    const { data } = useSelector(store => store.issues);
    const [editModalData,, setEditModalData] =useState(null);
    console.log(data, 'store');
    

    useEffect(() => {
        dispatch(fetchIssueData());
    }, [dispatch]);

    const handleOpenModal = () => {
        setShwModal(true);
    };

    const handleCloseModal = () => {
        setShwModal(false);
    };

    return(
        <div>
            <Button type='primary' onClick={handleOpenModal}>
                Create Issue
            </Button>

                        {/* TODO */}
            <AddIssueModal isOpen={showModal} onClose={handleCloseModal}/>
            <div className="board_container">
                <ul>
                    {
                        data.map((item) =>{
                            return (
                                <li key={item.taskId} onClick={() => setEditModalData}>
                                    {item.issueName}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
};

export default Cabinet;