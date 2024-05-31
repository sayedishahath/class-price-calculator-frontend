import { useState } from "react"
import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import SchoolTable from "./school-table"
import ClassTable from "./class-table"
import DealDetailsTable from "./deal-details-table"
export default function CalculatorPremium(){

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
    try{
        const res = await axios.post("http://65.1.106.79:3007/bill", form)
        alert('saved successfully')
        // const capture = document.querySelector('.formContent')
        // html2canvas(capture).then((canvas)=>{
        //     const imgData = canvas.toDataURL('img/png')
        //     const doc = new jsPDF('l','mm','a3')
        //     const componentWidth = doc.internal.pageSize.getWidth()
        //     const componentHeight = doc.internal.pageSize.getHeight()
        //     doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight)
        //     doc.save(`${form.schoolName}.pdf`)
        // })
        window.print()
        console.log(res.data)
    }catch(err){
        alert(err.message)
        console.log(err)
    }
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
        <div className='formContent md:w-1/2 lg:h-screen'>
            <h1>Premium</h1>
            <form onSubmit={handleSubmit}>
                    <div className="flex flex-row gap-2">
                        <div className="" >
                            <SchoolTable form={form} setForm={setForm}/>
                        </div>
                        <div className="">
                            <div>
                                <DealDetailsTable form={form} setForm={setForm}/>
                            </div>
                            <div className="py-2">
                                <ClassTable  form={form} setForm={setForm}/>
                            </div>
                        </div>
                        
                    </div>
            {/* <input type = "submit" value='save' className="uppercase  py-2 px-4 rounded mt-2 mb-2" style={{backgroundColor:"#424874" , color:"#F4EEFF"}}/> */}
            </form>
        </div>
    )
}