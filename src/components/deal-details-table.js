import { useState,useEffect,useCallback } from "react";
export default function DealDetailsTable({ form, setForm }) {
  const tableCellStyle = "px-6 py-4 whitespace-nowrap text-sm";
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

  
  useEffect(() => {
    const result =
      (((form.stations * 500000 + form.mentors * 200000 + 53500) /
        form.totalStudents +
        3000) *
        1.1 -
      form.investementAmount / form.totalStudents).toFixed(2)
    setForm({...form,minPricePerStudent:result})
  }, [form]);


 
  

  const calculateincludeGSTAmount = () => {
    const result = (form.minPricePerStudent * 1.18).toFixed(2)
    form.includeGSTAmount = result;
    console.log("gst", form.includeGSTAmount);
    if(isNaN(result)){
        return "0"
    }
    return result;
  };

  const calculateminDealValue = () => {
    const result = (form.includeGSTAmount * form.totalStudents).toFixed(2)
    form.minDealValue = result;
    console.log(form.minDealValue);
    if(isNaN(result)){
        return "0"
    }
    return result;
  };

  const calculateBufferValue = () => {
    const result =
      form.totalQuatedCostPerClass -
      form.totalMinCostPerClass -
      form.extraPaymentOffer;
    form.bufferValue = result;
    return result;
  };

  const calculateProposedDealValue = () => {
    const result = form.totalQuatedCostPerClass;
    form.propsedDeal = result;
    return result;
  };

  const calculateTotalDiscountValue = () => {
    const result =
     ( ((form.totalMRPperClass - form.totalQuatedCostPerClass) /
        form.totalMRPperClass) *
      100).toFixed(2)
    form.totalDiscountValue = result;
    if(isNaN(result)){
        return "0"
    }
    return result;
  };

  const calculateSingleTermPayment = () => {
    const result = (form.propsedDeal / form.paymentMode).toFixed(2)
    form.singleTermPayment = result;
    console.log("prop", form.propsedDeal, "payment mode", form.paymentMode);
    if(isNaN(result)||(result=='Infinity')){
        return "0"
    }
    return result;
  };

  const calculateFirstPayment = () => {
    const result = (form.singleTermPayment - form.advance).toFixed(2)
    form.firstPayment = result;
    if(isNaN(result)||(result=='Infinity')){
        return "0"
    }
    return result;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    
      // <div className="overflow-hidden bg-white shadow-md rounded-lg">
        <div className="flex flex-col lg:flex-row justify-center gap-1">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200 border border-gray-300">
              <tbody className="divide-y divide-zinc-200" style={{  backgroundColor:"#DCD6F7"}}>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="minPricePerStudent">
                      Min Price/Students
                    </label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="minPricePerStudent"
                      name="minPricePerStudent"
                      value={form.minPricePerStudent}
                      onChange={handleChange}
                    />
                    {/* // /form.totalStudents)+3000)*110)-(form.investementAmount/form.totalStudents) */}
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="includeGSTAmount">Including GST -18%</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="includeGSTAmount"
                      name="includeGSTAmount"
                      value={calculateincludeGSTAmount()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="minDealValue">Min Deal Value</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="minDealValue"
                      name="minDealValue"
                      value={calculateminDealValue()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="propsedDeal">Proposed Deal Value</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="propsedDeal"
                      name="propsedDeal"
                      value={calculateProposedDealValue()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="bufferValue">Buffer Value</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="bufferValue"
                      name="bufferValue"
                      value={calculateBufferValue()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="totalDiscountValue">
                      Total Deal Discount
                    </label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="totalDiscountValue"
                      name="totalDiscountValue"
                      value={calculateTotalDiscountValue()}
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
                      className={inputClasses}
                      type="Number"
                      id="advance"
                      name="advance"
                      placeholder="Enter Advance Amount"
                      value={form.advance}
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
                      className="form-select block w-full mt-1"
                      id="paymentMode"
                      name="paymentMode"
                      value={form.paymentMode}
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
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="singleTermPayment">
                      Single Term Amount
                    </label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="singleTermPayment"
                      name="singleTermPayment"
                      value={calculateSingleTermPayment()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellStyle} ${tableHeaderStyle}`}>
                    <label htmlFor="firstPayment">First Payment</label>
                  </td>
                  <td className={`${tableCellStyle} ${tableDataStyle}`}>
                    <input
                      readOnly="true"
                      type="text"
                      id="firstPayment"
                      name="firstPayment"
                      value={calculateFirstPayment()}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
        </div>
      // {/* </div> */}
  );
}
