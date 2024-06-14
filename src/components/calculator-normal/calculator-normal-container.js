import { useState } from "react"
import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import SchoolTable from "./school-table"
import ClassTable from "./class-table"
import DealDetailsTable from "./deal-details-table"
import { useSelector,useDispatch } from "react-redux"
import { startCreateBill } from "../../actions/billAction"
export default function CalculatorNormal(){

// const [form,setForm] = useState({
//     schoolName:"",
//     investementAmount:0,
//     classesForSignup:0,
//     mentors:0,
//     stations:0,
//     BDE:"",
//     extraPaymentOffer:0,
//     minPricePerStudent: 0,
//     includeGSTAmount:0,
//     minDealValue:0,
//     propsedDeal:0,
//     bufferValue:0,
//     totalDiscountValue:0,
//     advance:0,
//     paymentMode:0,
//     singleTermPayment:0,
//     firstPayment:0,
//     classes:[
//         { class: 6, MRP: 12999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
//         { class: 7, MRP: 13999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
//         { class: 8, MRP: 14999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
//         { class: 9, MRP: 15999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
//         { class: 10, MRP: 16999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0},
//         { class: 11, MRP: 22999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
//         { class: 12, MRP: 24999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 }
//     ],
//     totalStudents:0,
//     totalMRPperClass:0,
//     totalMinCostPerClass:0,
//     totalQuatedCostPerClass:0
// })
const dispatch =useDispatch()
const calcs = useSelector((state)=>{
    return state.calculations
})

const [saving,setSaving] = useState(false)

const handleSubmit= async(e)=>{
    e.preventDefault()
        setSaving(true)
        calcs.calculatorType = 'standard'
        dispatch(startCreateBill(calcs,setSaving))
        // const capture = document.querySelector('.formContent')
        // html2canvas(capture).then((canvas)=>{
        //     const imgData = canvas.toDataURL('img/png')
        //     const doc = new jsPDF('l','mm','a3')
        //     const componentWidth = doc.internal.pageSize.getWidth()
        //     const componentHeight = doc.internal.pageSize.getHeight()
        //     doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight)
        //     doc.save(`${form.schoolName}.pdf`)
        // })
        
}

    return(
        <div className='mt-20 formContent md:w-1/2 lg:h-screen'>
            
            <form onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-2">
                        <div className="" >
                            <SchoolTable />
                        </div>
                        <div className="">
                            <DealDetailsTable />
                        </div>
                    </div>
                    <div className="py-2">
                        <ClassTable />
                    </div>
                        
                    
            <input type = "submit" value={saving?'saving...':'save'} className="save-button uppercase  py-2 px-4 rounded mt-2 mb-2" style={{backgroundColor:"#424874" , color:"#F4EEFF"}} />

            </form>
        </div>
    )
}