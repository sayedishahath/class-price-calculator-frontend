import { useState } from "react";
import ClassTableRow from "./class-table-row";
export default function ClassTable(){
    const tableClass = "min-w-full table-auto text-sm text-left text-zinc-500 dark:text-zinc-400";
    const cellClass = "py-4 px-6";
    const yellowBgClass = "bg-yellow-200";
    const whiteBgClass = "bg-white-200"
    const borderClass = "border-b";
    const darkBgClass = "dark:bg-zinc-800";
    const darkBorderClass = "dark:border-zinc-700";

    const [classForm,setClassForm] = useState({
        classes:[
            { class: 6, MRP: 12999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
            { class: 7, MRP: 13999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
            { class: 8, MRP: 13999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
            { class: 9, MRP: 15999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
            { class: 10, MRP: 16999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0},
            { class: 11, MRP: 22999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
            { class: 12, MRP: 24999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 }
        ],
        totalStudents:0,
        totalMRPperClass:0,
        totalMinCostPerClass:0,
        totalQuatedCostPerClass:0
    })

    const handleChange = (e, rowIndex) => {
        const { name, value } = e.target;
        const newClasses = [...classForm.classes];
        newClasses[rowIndex] = {...newClasses[rowIndex], [name]: value };
        setClassForm({...classForm, classes: newClasses });
      };

      const calculateStudentsTotal = ()=>{
        const totalStudents = classForm.classes.reduce((acc,cv)=>{
            return acc+cv.students
        },0)
        setClassForm({...classForm,totalStudents})
        return totalStudents
      }
    return (
        <div className="overflow-x-auto">
            <table className={tableClass}>
                <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
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
                    {classForm.classes.map((ele)=>{
                        return(
                            <tr className={`bg-white ${borderClass} ${darkBgClass} ${darkBorderClass}`}>
                                 <td className={`${yellowBgClass} ${cellClass}`}>
                                     <input type="Number"  id='class' name='class' value={ele.class}/>
                                </td>
                                <td className={`${yellowBgClass} ${cellClass}`}>
                                    <input type="Number"  id='MRP' name='MRP' value={ele.MRP}/>
                                </td>
                                <td className={`${whiteBgClass} ${cellClass}`}>
                                    <input type="Number"  id='students' name='students' value={ele.students} onChange={handleChange}/>
                                </td>
                                <td className={`${yellowBgClass} ${cellClass}`}>
                                    <input type="Number"  id='MRPperClass' name='MRPperClass' value={ele.MRPperClass}/>
                                </td>
                                <td className={`${yellowBgClass} ${cellClass}`}>
                                    <input type="Number"  id='minCostPerClass' name='minCostPerClass' value={ele.minCostPerClass}/>
                                </td>
                                <td className={`${whiteBgClass} ${cellClass}`}>
                                    <input type="Number"  id='propsalPricePerStudent' name='propsalPricePerStudent' value={ele.propsalPricePerStudent} onChange={handleChange}/>
                                </td>
                                <td className={`${yellowBgClass} ${cellClass}`}>
                                    <input type="Number"  id='quatedCostPerClass' name='quatedCostPerClass' value={ele.quatedCostPerClass}/>
                                </td>
                                <td className={`${yellowBgClass} ${cellClass}`}>
                                    <input type="Number"  id='discount' name='discount' value={ele.discount}/>
                                </td>
                            </tr>
                        )
                    })}
                    <tr className={`bg-white ${borderClass} ${darkBgClass} ${darkBorderClass}`}>
                        <td className={`${yellowBgClass} ${cellClass} center` } colSpan={2}>
                            <h3>Total</h3>
                        </td> 
                        <td className={`${whiteBgClass} ${cellClass}`}>
                            <input type="Number"  id='students' name='students' value={classForm.totalStudents} onChange={handleChange}/>
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
                            <input type="Number"  id='MRPperClass' name='MRPperClass' value={classForm.totalMRPperClass}/>
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`}>
                            <input type="Number"  id='minCostPerClass' name='minCostPerClass' value={classForm.totalMinCostPerClass}/>
                        </td>
                        <td className={`${whiteBgClass} ${cellClass}`}>
                            <input type="Number"  id='propsalPricePerStudent' name='propsalPricePerStudent' value="-"/>
                        </td>
                        <td className={`${yellowBgClass} ${cellClass}`} colSpan={2}>
                            <input type="Number"  id='quatedCostPerClass' name='quatedCostPerClass' value={classForm.totalQuatedCostPerClass}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}