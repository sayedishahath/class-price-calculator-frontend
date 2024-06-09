import {useState} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSchoolDetails } from '../../../actions/calculatorAction';
import { useParams } from 'react-router-dom';
export default function SchoolTable(){
    // const tableRowClasses = "border border-black p-2";
    const tableCellStyle = "px-1 py-7 whitespace-nowrap text-sm";
    const tableHeaderStyle = "font-medium text-zinc-900 text-left";
    const tableDataStyle = "text-zinc-500";;
    const inputClasses = "";
   
    const dispatch = useDispatch()
    const calcs = useSelector((state)=>{
        return state.calculations
    })

    const {billId} =useParams()
    const selectedBill = useSelector((state)=>{
        return state.bills.data.find(bill=> bill._id === billId)
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(addSchoolDetails({name,value}))
    }
    return(

    <div className="flex justify-start">
        <table className="divide-y divide-zinc-200 border border-gray-300">
            <tbody className='divide-y divide-zinc-200' style={{backgroundColor:"#DCD6F7"}}>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='schoolName'>School Name</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                        <input 
                        readOnly="true"
                        required
                        id="schoolName"
                        name="schoolName"
                        type="text" 
                        className={inputClasses} 
                        placeholder='Enter the school name'
                        value={selectedBill&&selectedBill.schoolName}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='investementAmount'>School Investment Amount</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        readOnly="true"
                        required
                        type="number" 
                        id="investementAmount"
                        name="investementAmount"
                        className={inputClasses}
                        placeholder='Enter investment amount'
                        value={selectedBill&&selectedBill.investementAmount}
                        onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor="classesForSignup">No of Classes for Sign up</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        required
                        readOnly="true"
                        type="number" 
                        id="classesForSignup"
                        name="classesForSignup"
                        className={inputClasses}
                        placeholder="Number of classes for sign up."
                        value={selectedBill&&selectedBill.classesForSignup}
                        onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor="mentors">No. of Mentor</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                        required
                        readOnly="true"
                        type="number" 
                        id='mentors'
                        name="mentors"
                        className={inputClasses} 
                        placeholder='Enter number of mentors'
                        value={selectedBill&&selectedBill.mentors}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='stations'>No. of Station</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        required
                        readOnly="true"
                        type="number" 
                        id="stations"
                        name="stations"
                        className={inputClasses}
                        placeholder='Enter number of stations'
                        value={selectedBill&&selectedBill.stations}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='BDE'>BDE</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                        <input
                        required 
                        readOnly="true"
                        type="text" 
                        id="BDE"
                        name="BDE"
                        className={inputClasses}
                        placeholder='Enter BDE name'
                        value={selectedBill&&selectedBill.BDE}
                        onChange={handleChange} /> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}