import {useState} from  'react';
export default function SchoolTable({form,setForm}){
    // const tableRowClasses = "border border-black p-2";
    const tableCellStyle = "px-1 py-7 whitespace-nowrap text-sm";
    const tableHeaderStyle = "font-medium text-zinc-900 text-left";
    const tableDataStyle = "text-zinc-500";;
    const inputClasses = "";
   


    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value })
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
                        id="schoolName"
                        name="schoolName"
                        type="text" 
                        className={inputClasses} 
                        placeholder='Enter the school name'
                        value={form.schoolName}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='investementAmount'>School Investment Amount</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        type="number" 
                        id="investementAmount"
                        name="investementAmount"
                        className={inputClasses}
                        placeholder='Enter investment amount'
                        value={form.investementAmount}
                        onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor="classesForSignup">No of Classes for Sign up</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        type="number" 
                        id="classesForSignup"
                        name="classesForSignup"
                        className={inputClasses}
                        placeholder="Number of classes for sign up."
                        value={form.classesForSignup}
                        onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor="mentors">No. of Mentor</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                        type="number" 
                        id='mentors'
                        name="mentors"
                        className={inputClasses} 
                        placeholder='Enter number of mentors'
                        value={form.mentors}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='stations'>No. of Station</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input 
                        type="number" 
                        id="stations"
                        name="stations"
                        className={inputClasses}
                        placeholder='Enter number of stations'
                        value={form.stations}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                        <label htmlFor='BDE'>BDE</label>
                    </td>
                    <td className={`${tableCellStyle} ${tableDataStyle}`}>
                        <input 
                        type="text" 
                        id="BDE"
                        name="BDE"
                        className={inputClasses}
                        placeholder='Enter BDE name'
                        value={form.BDE}
                        onChange={handleChange} /> 
                    </td>
                </tr>
                <tr>
                    <td className={`${tableCellStyle}  ${tableHeaderStyle}`}>
                        <label htmlFor='extraPaymentOffer'>Extra Payment Offer</label>
                    </td>
                    <td className={`${tableCellStyle}  ${tableDataStyle}`}>
                        <input 
                        type="text" 
                        id="extraPaymentOffer"
                        name="extraPaymentOffer"
                        className={inputClasses}
                        placeholder='Extra payment offer'
                        value={form.extraPaymentOffer}
                        onChange={handleChange} /> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}