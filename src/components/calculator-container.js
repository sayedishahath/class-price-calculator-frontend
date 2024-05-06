import { useState } from "react"
import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import SchoolTable from "./school-table"
import ClassTable from "./class-table"
import DealDetailsTable from "./deal-details-table"
export default function Calculator(){

const [form,setForm] = useState({
    schoolName:"",
    investementAmount:0,
    classesForSignup:0,
    mentors:0,
    stations:0,
    BDE:"",
    extraPaymentOffer:0,
    minPricePerStudent: 0,
    includeGSTAmount:0,
    minDealValue:0,
    propsedDeal:0,
    bufferValue:0,
    totalDiscountValue:0,
    advance:0,
    paymentMode:0,
    singleTermPayment:0,
    firstPayment:0,
    classes:[
        { class: 6, MRP: 13999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 7, MRP: 14999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 8, MRP: 15999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 9, MRP: 16999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 10, MRP: 17999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0},
        { class: 11, MRP: 22999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 12, MRP: 24999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 }
    ],
    totalStudents:0,
    totalMRPperClass:0,
    totalMinCostPerClass:0,
    totalQuatedCostPerClass:0
})

const handleSubmit= async(e)=>{
    e.preventDefault()
    window.print()
}

// const saveAsPDF = () => {
//     const element = document.getElementById('formContent'); // Replace 'formContent' with the id of your form container
//     const opt = {
//       margin:       0.5,
//       filename:     'calculator_content.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale:1 },
//       jsPDF:        { unit: 'in', format: 'A3', orientation: 'landscape' }
//     };

//     html2pdf().from(element).set(opt).save();
//   };
    return(
        <div className='formContent'>
            <form onSubmit={handleSubmit}>
                
                    <div className="flex flex-col lg:flex-row justify-center gap-2 mb-2">
                        <div className="overflow-x-auto" >
                            <SchoolTable form={form} setForm={setForm}/>
                        </div>
                        <div className="overflow-x-auto">
                            <DealDetailsTable form={form} setForm={setForm}/>
                        </div>
                    </div>
                
                <ClassTable form={form} setForm={setForm}/>
            
            <input type = "submit" value='save' className="uppercase  py-2 px-4 rounded mt-2 mb-2" style={{backgroundColor:"#424874" , color:"#F4EEFF"}}/>
            </form>
        </div>
    )
}