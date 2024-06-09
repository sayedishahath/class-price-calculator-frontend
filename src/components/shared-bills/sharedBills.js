import { Link } from "react-router-dom"
import { useState } from "react";
import ShareBillModal from "../saved-bills/share-bill-modal"
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector,useDispatch } from "react-redux";
import { startShareBill } from "../../actions/billAction";
import { useAuth } from "../../context/AuthContext";
export default function SharedBills(){
    const {user} = useAuth()
    const sharedBills = useSelector((state)=>{
        return state.bills.data.filter((bill)=>{
            return bill.sharedWith.includes(user._id)
        })
    })
    return(
        <div>
            <div className="mt-20 container flex-row gap-4">
                <h1 className='text-1xl font-bold text-left py-2' >Shared Bills</h1>
                <table className="border-collapse border border-gray-300">
                    <thead>
                        <th className="border border-gray-300 py-2 px-4">No.</th>
                        <th className="border border-gray-300 py-2 px-4">School Name</th>
                        <th className="border border-gray-300 py-2 px-4">From</th>
                        <th className="border border-gray-300 py-2 px-4">Type</th>
                        <th className="border border-gray-300 py-2 px-4">action</th>
                    </thead>
                    <tbody>
                        {sharedBills&&sharedBills.map((bill,i)=>{
                            return (
                            <tr>
                                <td className="border border-gray-300 py-2 px-4">{i+1}</td>
                                <td className="border border-gray-300 py-2 px-4">{bill.schoolName}</td>
                                <td className="border border-gray-300 py-2 px-4">{bill.user.username}</td>
                                <td className="border border-gray-300 py-2 px-4">{bill.calculatorType}</td>
                                <td className="border border-gray-300 py-2 px-4">
                                    <Link to={`/saved-bills/${bill._id}/${bill.calculatorType}`}>
                                        <button className="border border-gray-300 rounded-md py-2 px-4">
                                            view
                                        </button>
                                    </Link>
                                
                                    {/* <button className="border border-gray-300 rounded-md py-2 px-4" onClick={()=>{handleOpenModal(bill._id)}}>Share</button> */}
                                </td>
                            </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
            {/* <Modal isOpen={modal} toggle={toggle}>
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
            </Modal> */}
    </div>
    )
}