import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTotal,addStudents, updateTotalStudents, 
        updateTotalMRPPerClass, updateTotalMinCostPerClass, updateTotalQuatedCostPerClass,calculateMRPPerClass,
        calculateQuotedPricePerClass, calculateMinCostPerClass,calculateDiscount } from "../../../actions/calculatorAction";
export default function ClassTable(){
    const tableClass = "border border-collapse border-gray-300 text-sm mr-20";
    const cellClass = "py-1 px-1 w-[50px]";
    const yellowBgClass = {backgroundColor:"#A6B1E1"}
    const whiteBgClass = "bg-white-200"
    const borderClass = "border-b";
    const darkBgClass = "dark:bg-zinc-800";
    const darkBorderClass = "dark:border-zinc-700";
    const narrwoCell = "width-100px"

    const dispatch = useDispatch()
    const calcs = useSelector((state)=>{
        return state.calculations
    })

    const {billId} = useParams()
    const selectedBill = useSelector((state)=>{
        return state.bills.data.find(bill=> bill._id === billId)
    })

    // const calculateStudentsTotal = () => {
    //     const totalStudents = calcs.classes.reduce((acc, cv) => {
    //         return parseInt(acc) + parseInt(cv.students);
    //     }, 0)
    //     if (isNaN(totalStudents)) {
    //         return "-"
    //     } else {
    //         // console.log(totalStudents);
    //         calcs.totalStudents=totalStudents;
    //         return totalStudents
    //     }
    // }

    // const calculateMRPPerClassTotal = () => {
    //     const MRPperClassTotal = calcs.classes.reduce((acc, cv) => {
    //         return parseInt(acc) + parseInt(cv.MRPperClass);
    //     }, 0)
    //     if (isNaN(MRPperClassTotal)) {
    //         return "-"
    //     } else {
    //         calcs.totalMRPperClass=MRPperClassTotal;
    //         return MRPperClassTotal
    //     }
    // }
    // const calculateTotalMinCostPerClass = () => {
    //     const totalMinCostPerClass = calcs.classes.reduce((acc, cv) => {
    //         return parseInt(acc) + parseInt(cv.minCostPerClass);
    //     }, 0)
    //     if (isNaN(totalMinCostPerClass)) {
    //         return "-"
    //     } else {
    //         calcs.totalMinCostPerClass=totalMinCostPerClass
    //         return totalMinCostPerClass
    //     }
    // }

    // const calculateTotalQuatedCostPerClasss = () => {
    //     const totalQuatedCostPerClass = calcs.classes.reduce((acc, cv) => {
    //         return parseInt(acc) + parseInt(cv.quatedCostPerClass);
    //     }, 0)
    //     if (isNaN(totalQuatedCostPerClass)) {
    //         return "-"
    //     } else {
    //         calcs.totalQuatedCostPerClass=totalQuatedCostPerClass;
    //         return totalQuatedCostPerClass
    //     }
    // }

    useEffect(() => {
        let totalStudents = calcs.classes.reduce((acc, cv) => parseInt(acc) + parseInt(cv.students), 0);
        if (isNaN(totalStudents)) {
            totalStudents ='-'
        } else {
            totalStudents=totalStudents;
        }
        dispatch(updateTotalStudents(totalStudents));
    
        let totalMRPperClass = calcs.classes.reduce((acc, cv) => acc + cv.MRPperClass, 0);
        if (isNaN(totalMRPperClass)) {
            totalMRPperClass ='-'
        } else {
            totalMRPperClass=totalMRPperClass;
        }
        dispatch(updateTotalMRPPerClass(totalMRPperClass));
    
        let totalMinCostPerClass = calcs.classes.reduce((acc, cv) => acc + cv.minCostPerClass, 0);
        if (isNaN(totalMinCostPerClass)) {
            totalMinCostPerClass ='-'
        } else {
            totalMinCostPerClass=totalMinCostPerClass;
        }
        dispatch(updateTotalMinCostPerClass(totalMinCostPerClass));
    
        let totalQuatedCostPerClass = calcs.classes.reduce((acc, cv) => acc + cv.quatedCostPerClass, 0);
        if (isNaN(totalQuatedCostPerClass)) {
            totalQuatedCostPerClass ='-'
        } else {
            totalQuatedCostPerClass=totalQuatedCostPerClass;
        }
        dispatch(updateTotalQuatedCostPerClass(totalQuatedCostPerClass));
      }, [calcs.classes]);

    // const totalStudentsValue = calcs.totalStudents;
    // const totalMRPperClassValue = calcs.totalMRPperClass;
    // const totalMinCostPerClassValue = calcs.totalMinCostPerClass;
    // const totalQuatedCostPerClassValue = calcs.totalQuatedCostPerClass;
    
    // const calculateMRPPerClass = (classData) => {
    //     return classData.MRP * classData.students;
    // }

    // const calculateQuotedPricePerClass = (classData)=>{
    //     return classData.propsalPricePerStudent*classData.students;
    // }

    // const calculateMinCostPerClass = (classData)=>{
    //     return form.includeGSTAmount*classData.students
    // }

    // const calculateDiscount = (classData)=>{
    //     return (((classData.MRP-classData.propsalPricePerStudent)/(classData.MRP))*100).toFixed(2)
    // }

    // const handleChange = (e, rowIndex) => {
    //     const { name, value } = e.target;
    //     const newClasses = [...form.classes];
    //     newClasses[rowIndex] = {...newClasses[rowIndex], [name]: value };
    //     setForm({...form, classes: newClasses });
    //     console.log("min cost ",form.classes[0].minCostPerClass)
    //     console.log('mrp per class' ,form.classes[0].MRPperClass)
    //     // Calculate MRP per class for the updated class
    //     const MRPperClass = calculateMRPPerClass(newClasses[rowIndex]);
    //     newClasses[rowIndex] = {...newClasses[rowIndex], MRPperClass };
    //     setForm({...form, classes: newClasses });

    //     const quatedCostPerClass = calculateQuotedPricePerClass(newClasses[rowIndex]);
    //     newClasses[rowIndex] = {...newClasses[rowIndex], quatedCostPerClass };
    //     setForm({...form, classes: newClasses });

    //     const minCostPerClass = calculateMinCostPerClass(newClasses[rowIndex]);
    //     newClasses[rowIndex] = {...newClasses[rowIndex], minCostPerClass };
    //     setForm({...form, classes: newClasses });

    //     const discount = calculateDiscount(newClasses[rowIndex]);
    //     newClasses[rowIndex] = {...newClasses[rowIndex], discount };
    //     setForm({...form, classes: newClasses });
        
    //   };

     
    
    // const handleChangeMinCostPerClass =(e,rowIndex)=>{
    //     const { name, value } = e.target;
    //     dispatch(calculateMinCostPerClass({ rowIndex, name, value }))
    // }
    useEffect(() => {
        const updateMinCostPerClass = () => {
          calcs.classes.forEach((classData, index) => {
            const newMinCostPerClass = calculateMinCostPerClass(classData, calcs.includeGSTAmount);
            dispatch(calculateMinCostPerClass({ rowIndex: index, minCostPerClass: newMinCostPerClass }));
          });
        };
      
        updateMinCostPerClass();
      }, [calcs.includeGSTAmount]);
    const handleChange = (e, rowIndex) => {
        const { name, value } = e.target;
        dispatch (addStudents({ rowIndex, name, value }));
        dispatch (calculateMRPPerClass({ rowIndex, name, value }))
        dispatch (calculateQuotedPricePerClass({ rowIndex, name, value }))
        dispatch (calculateDiscount({ rowIndex, name, value }))
        // dispatch (calculateMinCostPerClass({ rowIndex, name, value }))
        // if (name === 'includeGSTAmount') {
        //     const newMinCostPerClass = calcs.includeGSTAmount * calcs.classes[rowIndex].students;
        //     dispatch(calculateMinCostPerClass({ rowIndex, minCostPerClass: newMinCostPerClass }));
        // } else {
        //     dispatch(calculateMinCostPerClass({ rowIndex, name, value }));
        // }
        
        // dispatch (calculateMinCostPerClass({ rowIndex, name, value }))
        
        
        // Calculate MRP per class for the updated class
        // const MRPperClass = calculateMRPPerClass(newClasses[rowIndex]);
        // newClasses[rowIndex] = {...newClasses[rowIndex], MRPperClass };
    
        // // Calculate quoted cost per class for the updated class
        // const quatedCostPerClass = calculateQuotedPricePerClass(newClasses[rowIndex]);
        // newClasses[rowIndex] = {...newClasses[rowIndex], quatedCostPerClass };
    
        // // Calculate min cost per class for the updated class
        // const minCostPerClass = calculateMinCostPerClass(newClasses[rowIndex]);
        // newClasses[rowIndex] = {...newClasses[rowIndex], minCostPerClass };
    
        // // Calculate discount for the updated class
        // const discount = calculateDiscount(newClasses[rowIndex]);
        // newClasses[rowIndex] = {...newClasses[rowIndex], discount };
    
        // setForm({...calcs, classes: newClasses });
    };
    
      const handleChangeTotal = (e)=>{
        // const { name, value } = e.target
        // dispatch(updateTotal({name,value}))
      }
    return (
        <div className="">
            <table className={tableClass}>
                <thead className="text-xs uppercase " style={{ backgroundColor: '#424874' ,color:"#F4EEFF"} }>
                    <tr>
                        <th scope="col" className={cellClass}>Class</th>
                        <th scope="col" className={cellClass}>MRP</th>
                        <th scope="col" className={cellClass}>No. of Students</th>
                        <th scope="col" className={cellClass}>MRP/Class</th>
                        <th scope="col" className={cellClass}>Minimum Cost/ Class YEAR 1 & 2</th>
                        <th scope="col" className={cellClass}>Proposal Price/Student</th>
                        <th scope="col" className={cellClass}>Quoted Cost/Class</th>
                        <th scope="col" className={cellClass}>Discount %</th>
                    </tr>
                </thead>
                <tbody>
                
                {selectedBill&&selectedBill.classes&&selectedBill.classes.map((ele, index) => {
                    return (
                        <tr key={index} className={`bg-white ${borderClass} ${darkBgClass} ${darkBorderClass}`}>
                            <td className={`${cellClass} `} style={{backgroundColor:"#F4EEFF"}}>
                                <input className="text-left w-[75px]" readOnly="true" type="Number" id='class' name='class' value={ele.class} onChange={(e) => {handleChange(e, index)}} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input className=" text-left w-[75px]" readOnly="true" type="Number" id='MRP' name='MRP' value={ele.MRP} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#DCD6F7"}}>
                                <input className="text-left w-[75px]"  type="Number" id='students' name='students' value={ele.students} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input className=" text-left w-[75px]" readOnly="false" type="Number" id='MRPperClass' name='MRPperClass' value={ele.MRPperClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`}style={{backgroundColor:"#F4EEFF"}}>
                                <input className=" text-left w-[75px]" readOnly="true" type="Number" id='minCostPerClass' name='minCostPerClass' value={ele.minCostPerClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={` ${cellClass}`} style={{backgroundColor:"#DCD6F7"}}>
                                <input className="text-left w-[75px]" type="Number" id='propsalPricePerStudent' name='propsalPricePerStudent' value={ele.propsalPricePerStudent} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input className=" text-left w-[75px]" readOnly="true" type="Number" id='quatedCostPerClass' name='quatedCostPerClass' value={ele.quatedCostPerClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input className="text-left w-[75px]" readOnly="true" type="Number" id='discount' name='discount' value={ele.discount} onChange={(e) => handleChange(e, index)} />
                            </td>
                        </tr>
                    );
                })}
                    <tr className={` ${borderClass} ${darkBgClass} ${darkBorderClass}`}style={{backgroundColor:"#DCD6F7"}} >
                        <td className={`${yellowBgClass} ${cellClass} ` } colSpan={2}>
                            <h3>Total</h3>
                        </td> 
                        <td className={`${whiteBgClass} ${cellClass}`}>
                            <input className="text-left w-[75px]" type="text" id ="totalStudents" name="totalStudents" value={selectedBill&&selectedBill.totalStudents}  />
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
                            <input className="text-left w-[75px]" type="text" id ="totalMRPperClass" name="totalMRPperClass" value={selectedBill&&selectedBill.totalMRPperClass} />
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
                            <input className="text-left w-[75px]" type="text" id ="totalMinCostPerClass" name="totalMinCostPerClass" value={selectedBill&&selectedBill.totalMinCostPerClass}  />
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
            
                        </td>
                        <td className={`${selectedBill&&selectedBill.totalQuatedCostPerClass < selectedBill&&selectedBill.totalMinCostPerClass ? 'bg-red-500' : 'bg-green-500'} ${yellowBgClass} ${cellClass}`} >
                            <input className="text-left w-[75px]" type="text" id ="totalQuatedCostPerClass" name="totalQuatedCostPerClass" value={selectedBill&&selectedBill.totalQuatedCostPerClass} />
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
