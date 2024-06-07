import { useState,useEffect,useCallback } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { calculateMinCostPerClass,addDealDetails,calculateMinPricePerStudent,calculateincludeGSTAmount,
        calculateminDealValue,calculateBufferValue,calculateProposedDealValue,
        calculateTotalDiscountValue,calculateSingleTermPayment,calculateFirstPayment} from "../../actions/calculatorAction";
export default function DealDetailsTable() {
  const tableCellStyle = "px-2 py-3 whitespace-nowrap text-sm";
  const firstTableCellStyle = "px-2 py-2 whitespace-nowrap text-sm";
  const tableHeaderStyle = "font-medium text-zinc-900 text-left";
  const tableDataStyle = "text-zinc-500";
  const rowClass = "bg-green-200";
  const inputClasses = "w-full p-2";
  // const [form,setDealsDetailsForm] = useState({
  //     minPricePerStudent: 0,
  //     includeGSTAmount:0,
  //     minDealValue:0,
  //     propsedDeal:0,
  //     bufferValue:0,
  //     totalDiscountValue:0,
  //     advance:0,
  //     paymentMode:0,
  //     singleTermPayment:0,
  //     firstPayment:0
  // })
//   const calculateMinPricePerStudents = () => {
//     const result =
//       ((form.stations * 500000 + form.mentors * 200000 + 53500) /
//         form.totalStudents +
//         3000) *
//         1.1 -
//       form.investementAmount / form.totalStudents;
//     form.minPricePerStudent = result;
//     console.log(form.minPricePerStudent);
//     if(isNaN(result)){
//         return "0"
//     }
//     return result;
// }
  const dispatch = useDispatch();
  const calcs = useSelector((state)=>{
    return state.calculations
  })
  
  // useEffect(() => {
  //   const result =
  //     (((calcs.stations * 500000 + form.mentors * 200000 + 53500) /
  //       form.totalStudents +
  //       3000) *
  //       1.1 -
  //     form.investementAmount / form.totalStudents).toFixed(2)
  //     setForm({...form, minPricePerStudent:result})
  // }, [form]);


 
  

  // const calculateincludeGSTAmount = () => {
  //   const result = (form.minPricePerStudent * 1.18).toFixed(2)
  //   form.includeGSTAmount = result;
  //   // console.log("gst", form.includeGSTAmount);
  //   if(isNaN(result)){
  //       return "0"
  //   }
  //   return result;
  // };

  // const calculateminDealValue = () => {
  //   const result = (form.includeGSTAmount * form.totalStudents).toFixed(2)
  //   form.minDealValue = result;
  //   // console.log(form.minDealValue);
  //   if(isNaN(result)){
  //       return "0"
  //   }
  //   return result;
  // };

  // const calculateBufferValue = () => {
  //   const result =
  //     form.totalQuatedCostPerClass -
  //     form.totalMinCostPerClass -
  //     form.extraPaymentOffer;
  //   form.bufferValue = result;
  //   return result;
  // };

  // const calculateProposedDealValue = () => {
  //   const result = form.totalQuatedCostPerClass;
  //   form.propsedDeal = result;
  //   return result;
  // };

  // const calculateTotalDiscountValue = () => {
  //   const result =
  //    ( ((form.totalMRPperClass - form.totalQuatedCostPerClass) /
  //       form.totalMRPperClass) *
  //     100).toFixed(2)
  //   form.totalDiscountValue = result;
  //   if(isNaN(result)){
  //       return "0"
  //   }
  //   return result;
  // };

  // const calculateSingleTermPayment = () => {
  //   const result = (form.propsedDeal / form.paymentMode).toFixed(2)
  //   form.singleTermPayment = result;
  //   // console.log("prop", form.propsedDeal, "payment mode", form.paymentMode);
  //   if(isNaN(result)||(result=='Infinity')){
  //       return "0"
  //   }
  //   return result;
  // };

  // const calculateFirstPayment = () => {
  //   const result = (form.singleTermPayment - form.advance).toFixed(2)
  //   form.firstPayment = result;
  //   if(isNaN(result)||(result=='Infinity')){
  //       return "0"
  //   }
  //   return result;
  // };

  // useEffect(() => {
  //     let minPricePerStudent =
  //       (((calcs.stations * 500000 + calcs.mentors * 200000 + 53500) /
  //         calcs.totalStudents +
  //         3000) *
  //         1.1 -
  //       calcs.investmentAmount / calcs.totalStudents).toFixed(2);
  //     dispatch(calculateMinPricePerStudent(minPricePerStudent));
  // }, [calcs.stations, calcs.mentors, calcs.classes, calcs.investmentAmount, dispatch]);


  useEffect(()=>{
    console.log('dispatching actions...')
    dispatch(calculateMinPricePerStudent())
    dispatch(calculateincludeGSTAmount())
    dispatch(calculateminDealValue())
    dispatch(calculateBufferValue())
    dispatch(calculateProposedDealValue())
    dispatch(calculateTotalDiscountValue())
    dispatch(calculateSingleTermPayment())
    dispatch(calculateFirstPayment())
},[calcs.totalMinCostPerClass,calcs.stations, calcs.mentors, calcs.totalStudents, calcs.investementAmount,calcs.totalQuatedCostPerClass,calcs.propsedDeal,calcs.paymentMode,calcs.advance, dispatch])
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addDealDetails({name,value}))
    // dispatch(calculateMinPricePerStudent({name,value}))
    // dispatch(calculateincludeGSTAmount({name,value}))
    // dispatch(calculateminDealValue({name,value}))
    // dispatch(calculateBufferValue({name,value}))
    // dispatch(calculateProposedDealValue({name,value}))
    // dispatch(calculateTotalDiscountValue({name,value}))
    // dispatch(calculateSingleTermPayment({name,value}))
    // dispatch(calculateFirstPayment({name,value}))
  };

  return (
    
      // <div className="overflow-hidden bg-white shadow-md rounded-lg">
        <div className="flex flex-col lg:flex-row justify-left gap-1">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200 border border-gray-300">
              <tbody className="divide-y divide-zinc-200" style={{  backgroundColor:"#DCD6F7"}}>
                <tr>
                  <td className={`${firstTableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="minPricePerStudent">
                      Min Price/Students
                    </label>
                  </td>
                  <td className={`${firstTableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="minPricePerStudent"
                      name="minPricePerStudent"
                      value={isNaN(calcs.minPricePerStudent)?0:calcs.minPricePerStudent}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${firstTableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="includeGSTAmount">Including GST -18%</label>
                  </td>
                  <td className={`${firstTableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="includeGSTAmount"
                      name="includeGSTAmount"
                      value={isNaN(calcs.includeGSTAmount)?0:calcs.includeGSTAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${firstTableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="minDealValue">Min Deal Value</label>
                  </td>
                  <td className={`${firstTableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="minDealValue"
                      name="minDealValue"
                      value={isNaN(calcs.minDealValue)?0:calcs.minDealValue}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${firstTableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="propsedDeal">Proposed Deal Value</label>
                  </td>
                  <td className={`${firstTableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="propsedDeal"
                      name="propsedDeal"
                      value={calcs.propsedDeal}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${firstTableCellStyle} py-3 ${tableHeaderStyle}`}>
                    <label htmlFor="bufferValue">Buffer Value</label>
                  </td>
                  <td className={`${calcs.bufferValue < 0 ? 'bg-red-500' : 'bg-green-500'} ${firstTableCellStyle} py-3 ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="bufferValue"
                      name="bufferValue"
                      value={isNaN(calcs.bufferValue)?0:calcs.bufferValue}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${firstTableCellStyle} py-3 ${tableHeaderStyle}`}>
                    <label htmlFor="totalDiscountValue">
                      Total Deal Discount
                    </label>
                  </td>
                  <td className={`${firstTableCellStyle} py-3 ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="totalDiscountValue"
                      name="totalDiscountValue"
                      value={isNaN(calcs.totalDiscountValue)?0:calcs.totalDiscountValue}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

           <div className="overflow-x-auto">
            {/* <h3 className="mt-0">Extra Notes:</h3> */}

            <table className="min-w-full divide-y divide-zinc-200 border border-gray-300">
              <tbody className="divide-y divide-zinc-200" style={{  backgroundColor:"#DCD6F7"}}>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="advance">Advance</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      type="Number"
                      id="advance"
                      name="advance"
                      placeholder="Enter Advance Amount"
                      value={calcs.advance}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="paymentMode">Payment Mode</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <select
                      className="form-select w-full mt-1"
                      id="paymentMode"
                      name="paymentMode"
                      value={calcs.paymentMode}
                      onChange={handleChange}
                    >
                      <option value="">select term</option>
                      <option value={2}>2 Term</option>
                      <option value={3}>3 Term</option>
                      <option value={4}>4 Term</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle} py-3`}>
                    <label htmlFor="singleTermPayment">
                      Single Term Amount
                    </label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle} py-3`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="singleTermPayment"
                      name="singleTermPayment"
                      value={isNaN(calcs.singleTermPayment)?0:calcs.singleTermPayment}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle} py-3`}>
                    <label htmlFor="firstPayment">First Payment</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle} py-3`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="firstPayment"
                      name="firstPayment"
                      value={isNaN(calcs.firstPayment)?0:calcs.firstPayment}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
        </div>
  );
}
