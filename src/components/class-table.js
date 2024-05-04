import { useState,useEffect } from "react";
export default function ClassTable({form,setForm}){
    const tableClass = "mx-auto border border-collapse border-gray-300 text-sm text-left text-zinc-500";
    const cellClass = "py-4 px-6";
    const yellowBgClass = {backgroundColor:"#A6B1E1"}
    const whiteBgClass = "bg-white-200"
    const borderClass = "border-b";
    const darkBgClass = "dark:bg-zinc-800";
    const darkBorderClass = "dark:border-zinc-700";

    const calculateStudentsTotal = () => {
        const totalStudents = form.classes.reduce((acc, cv) => {
            return parseInt(acc) + parseInt(cv.students);
        }, 0)
        if (isNaN(totalStudents)) {
            return "-"
        } else {
            console.log(totalStudents);
            form.totalStudents=totalStudents;
            return totalStudents
        }
    }

    const calculateMRPPerClassTotal = () => {
        const MRPperClassTotal = form.classes.reduce((acc, cv) => {
            return parseInt(acc) + parseInt(cv.MRPperClass);
        }, 0)
        if (isNaN(MRPperClassTotal)) {
            return "-"
        } else {
            form.totalMRPperClass=MRPperClassTotal;
            return MRPperClassTotal
        }
    }
    const calculateTotalMinCostPerClass = () => {
        const totalMinCostPerClass = form.classes.reduce((acc, cv) => {
            return parseInt(acc) + parseInt(cv.minCostPerClass);
        }, 0)
        if (isNaN(totalMinCostPerClass)) {
            return "-"
        } else {
            form.totalMinCostPerClass=totalMinCostPerClass
            return totalMinCostPerClass
        }
    }

    const calculateTotalQuatedCostPerClasss = () => {
        const totalQuatedCostPerClass = form.classes.reduce((acc, cv) => {
            return parseInt(acc) + parseInt(cv.quatedCostPerClass);
        }, 0)
        if (isNaN(totalQuatedCostPerClass)) {
            return "-"
        } else {
            form.totalQuatedCostPerClass=totalQuatedCostPerClass;
            return totalQuatedCostPerClass
        }
    }
    
    const calculateMRPPerClass = (classData) => {
        return classData.MRP * classData.students;
    };

    const calculateQuotedPricePerClass = (classData)=>{
        return classData.propsalPricePerStudent*classData.students;
    }

    const calculateMinCostPerClass = (classData)=>{
        return form.includeGSTAmount
    }

    const calculateDiscount = (classData)=>{
        return (((classData.MRP-classData.propsalPricePerStudent)/(classData.MRP))*100).toFixed(2)
    }

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

    const handleChange = (e, rowIndex) => {
        const { name, value } = e.target;
        const newClasses = [...form.classes];
        newClasses[rowIndex] = {...newClasses[rowIndex], [name]: value };
        setForm({...form, classes: newClasses });
        
        
        // Calculate MRP per class for the updated class
        const MRPperClass = calculateMRPPerClass(newClasses[rowIndex]);
        newClasses[rowIndex] = {...newClasses[rowIndex], MRPperClass };
    
        // Calculate quoted cost per class for the updated class
        const quatedCostPerClass = calculateQuotedPricePerClass(newClasses[rowIndex]);
        newClasses[rowIndex] = {...newClasses[rowIndex], quatedCostPerClass };
    
        // Calculate min cost per class for the updated class
        const minCostPerClass = calculateMinCostPerClass(newClasses[rowIndex]);
        newClasses[rowIndex] = {...newClasses[rowIndex], minCostPerClass };
    
        // Calculate discount for the updated class
        const discount = calculateDiscount(newClasses[rowIndex]);
        newClasses[rowIndex] = {...newClasses[rowIndex], discount };
    
        setForm({...form, classes: newClasses });
    };
    
      const handleChangeTotal = (e)=>{
        const { name, value } = e.target
        setForm({ ...form , [name]:value })
      }
    return (
        <div className="overflow-x-auto">
            <table className={tableClass}>
                <thead className="text-xs  uppercase " style={{ backgroundColor: '#424874' ,color:"#F4EEFF"} }>
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
                
                {form.classes.map((ele, index) => {
                    return (
                        <tr key={index} className={`bg-white ${borderClass} ${darkBgClass} ${darkBorderClass}`}>
                            <td className={` ${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="true" type="Number" id='class' name='class' value={ele.class} onChange={(e) => {handleChange(e, index)}} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="true" type="Number" id='MRP' name='MRP' value={ele.MRP} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${whiteBgClass} ${cellClass}`} style={{backgroundColor:"#DCD6F7"}}>
                                <input  type="Number" id='students' name='students' value={ele.students} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="false" type="Number" id='MRPperClass' name='MRPperClass' value={ele.MRPperClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`}style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="true" type="Number" id='minCostPerClass' name='minCostPerClass' value={ele.minCostPerClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${whiteBgClass} ${cellClass}`} style={{backgroundColor:"#DCD6F7"}}>
                                <input type="Number" id='propsalPricePerStudent' name='propsalPricePerStudent' value={ele.propsalPricePerStudent} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="true" type="Number" id='quatedCostPerClass' name='quatedCostPerClass' value={ele.quatedCostPerClass} onChange={(e) => handleChange(e, index)} />
                            </td>
                            <td className={`${cellClass}`} style={{backgroundColor:"#F4EEFF"}}>
                                <input readOnly="true" type="Number" id='discount' name='discount' value={ele.discount} onChange={(e) => handleChange(e, index)} />
                            </td>
                        </tr>
                    );
                })}
                    <tr className={` ${borderClass} ${darkBgClass} ${darkBorderClass}`}style={{backgroundColor:"#DCD6F7"}} >
                        <td className={`${yellowBgClass} ${cellClass} center` } colSpan={2}>
                            <h3>Total</h3>
                        </td> 
                        <td className={`${whiteBgClass} ${cellClass}`}>
                            <input type="text" id ="totalStudents" name="totalStudents" value={calculateStudentsTotal()} onChange={handleChangeTotal} />
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
                            <input type="text" id ="totalMRPperClass" name="totalMRPperClass" value={calculateMRPPerClassTotal()} onChange={handleChangeTotal}/>
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`} colSpan={2}>
                            <input type="text" id ="totalMinCostPerClass" name="totalMinCostPerClass" value={calculateTotalMinCostPerClass()} onChange={handleChangeTotal}/>
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`} colSpan={2}>
                            <input type="text" id ="totalQuatedCostPerClass" name="totalQuatedCostPerClass" value={calculateTotalQuatedCostPerClasss()} onChange={handleChangeTotal}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
