export const addStudents = (students)=>{
    return {
        type: "ADD_STUDENTS",
        students
    }
}

export const calculateMRPPerClass = (MRPPerClass)=>{
    return {
        type: "CALCULATE_MRP_PER_CLASS",
        MRPPerClass
    }
}
export const calculateQuotedPricePerClass = (quotedPricePerClass)=>{
    return {
        type: "CALCULATE_QUOTED_PRICE_PER_CLASS",
        quotedPricePerClass
    }
}

export const calculateMinCostPerClass = (minCostPerClass)=>{
    return {
        type: "CALCULATE_MIN_COST_PER_CLASS",
        minCostPerClass
    }
}
export const calculateDiscount = (discount)=>{
    return {
        type: "CALCULATE_DISCOUNT",
        discount
    }
}

export const calculateMinPricePerStudent = (minPricePerStudent)=>{
    return {
        type: "CALCULATE_MIN_PRICE_PER_STUDENT",
        minPricePerStudent
    }
}
export const calculatePremiumMinPricePerStudent=(minPricePerStudent)=>{
    return {
        type: "CALCULATE_PREMIUM_MIN_PRICE_PER_STUDENT",
        minPricePerStudent
    }
}
export const calculateincludeGSTAmount = ()=>{
    return {
        type: "CALCULATE_INCLUDE_GST_AMOUNT",
    }
}
export const calculateminDealValue = ()=>{
    return {
        type: "CALCULATE_MIN_DEAL_VALUE",
        
    }
}

export const calculateBufferValue = ()=>{
    return {
        type: "CALCULATE_BUFFER_VALUE",
        
    }
}

export const calculateProposedDealValue = ()=>{
    return {
        type: "CALCULATE_PROPOSED_DEAL_VALUE",
        
    }
}

export const calculateTotalDiscountValue = ()=>{
    return {
        type: "CALCULATE_TOTAL_DISCOUNT_VALUE",
        
    }
}

export const calculateSingleTermPayment = ()=>{
    return {
        type: "CALCULATE_SINGLE_TERM_PAYMENT",
        
    }
}

export const calculateFirstPayment = ()=>{
    return {
        type: "CALCULATE_FIRST_PAYMENT",
    }
}



export const addSchoolDetails = (school)=>{
    return {
        type: "ADD_SCHOOL_DETAILS",
        school
    }
}
export const addDealDetails = (deals)=>{
    return{
        type: "ADD_DEAL_DETAILS",
        deals
    }
}

export const updateTotal = (total)=>{
    return {
        type: "UPDATE_TOTAL",
        total
    }
}
export const updateTotalStudents = (totalStudents) => ({
    type: 'UPDATE_TOTAL_STUDENTS',
    totalStudents,
  });
  
  export const updateTotalMRPPerClass = (totalMRPperClass) => ({
    type: 'UPDATE_TOTAL_MRP_PER_CLASS',
    totalMRPperClass,
  });
  
  export const updateTotalMinCostPerClass = (totalMinCostPerClass) => ({
    type: 'UPDATE_TOTAL_MIN_COST_PER_CLASS',
    totalMinCostPerClass,
  });
  
  export const updateTotalQuatedCostPerClass = (totalQuatedCostPerClass) => ({
    type: 'UPDATE_TOTAL_QUATED_COST_PER_CLASS',
    totalQuatedCostPerClass,
  });

  export const resetState = ()=>{
    return {
        type:"RESET_STATE"
    }
  }