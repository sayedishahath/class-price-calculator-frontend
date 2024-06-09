import { Link } from "react-router-dom"
import { useState } from "react";
import ShareBillModal from "./share-bill-modal"
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector,useDispatch } from "react-redux";
import { startShareBill } from "../../actions/billAction";
import { useAuth } from "../../context/AuthContext";
export default function SavedBills(){
    const dispatch = useDispatch()
    // const [isOpen, setIsOpen] = useState(false);
    const [modal,setModal] = useState(false)
    const toggle = ()=>{
        setModal(!modal)
    }
    const [selectedBill,setSelectedBill] = useState('')
    const handleOpenModal = (billId) => {
      setSelectedBill(billId)
      toggle()
      console.log('clicked')
    
    };
  
    const {user} = useAuth()

    const [selectedUsers, setSelectedUsers] = useState([]);

    const users = useSelector((state)=>{
        return state.users.data
    })
    const handleSelectUser = (userId) => {
        const isSelected = selectedUsers.includes(userId);
        if (isSelected) {
        setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        console.log(selectedUsers)
        } else {
        setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleShareBill = (selectedBill,selectedUsers) => {
        // Call API to share bill with selected users

        dispatch(startShareBill(selectedBill,selectedUsers))
        console.log('Sharing bill with:', selectedUsers);
    };
   

    const myBills = useSelector((state)=>{
        return state.bills.data.filter((bill)=>{
            return !(bill.sharedWith.includes(user._id))
        })
    })
    return(
        <div>
            <div className="container flex-row gap-4">
                <h1 className='text-1xl font-bold text-left py-2' >Saved Bills</h1>
                <table className="border-collapse border border-gray-300">
                    <thead>
                        <th className="border border-gray-300 py-2 px-4">No.</th>
                        <th className="border border-gray-300 py-2 px-4">School Name</th>
                        <th className="border border-gray-300 py-2 px-4">Type</th>
                        <th className="border border-gray-300 py-2 px-4">action</th>
                    </thead>
                    <tbody>
                        {myBills&&myBills.map((bill,i)=>{
                            return (
                            <tr>
                                <td className="border border-gray-300 py-2 px-4">{i+1}</td>
                                <td className="border border-gray-300 py-2 px-4">{bill.schoolName}</td>
                                <td className="border border-gray-300 py-2 px-4">{bill.calculatorType}</td>
                                <td className="border border-gray-300 py-2 px-4">
                                    <Link to={`/saved-bills/${bill._id}/${bill.calculatorType}`}>
                                        <button className="border border-gray-300 rounded-md py-2 px-4">
                                            view
                                        </button>
                                    </Link>
                                
                                    <button className="border border-gray-300 rounded-md py-2 px-4" onClick={()=>{handleOpenModal(bill._id)}}>Share</button>
                                </td>
                            </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Select User</ModalHeader>
                <ModalBody>
                <div>
                    <ul>
                        {users.map((user) => (
                        <li key={user._id} className="checkbox-container">
                            <input
                            type="checkbox"
                            checked={selectedUsers.includes(user._id)}
                            onChange={() => handleSelectUser(user._id)}
                            />
                            <span>{user.username}</span>
                        </li>
                        ))}
                    </ul>
                    <button  className="border border-gray-300 rounded-md py-2 px-4" onClick={()=>{handleShareBill(selectedBill,selectedUsers)}}>Share Bill</button>
                </div>
                </ModalBody>
            </Modal>
    </div>
    )
}