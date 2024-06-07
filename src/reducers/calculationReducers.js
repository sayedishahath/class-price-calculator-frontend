const initialState = {
    calculatorType:"",
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
        { class: 6, MRP: 12999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 7, MRP: 13999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 8, MRP: 14999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 9, MRP: 15999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 10, MRP: 16999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0},
        { class: 11, MRP: 22999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 },
        { class: 12, MRP: 24999, students: 0, MRPperClass: 0, minCostPerClass: 0, propsalPricePerStudent: 0, quatedCostPerClass: 0, discount: 0 }
    ],
    totalStudents:0,
    totalMRPperClass:0,
    totalMinCostPerClass:0,
    totalQuatedCostPerClass:0
}
export default function calculationReducer(state=initialState,action){
    console.log('reducer recieved ',action)
    switch (action.type) {
        case 'ADD_STUDENTS':
          const { rowIndex, name, value } = action.students;
          const newClasses = [...state.classes];
          newClasses[rowIndex] = { ...newClasses[rowIndex], [name]: value };
          return { ...state, classes: newClasses };
        case "CALCULATE_MRP_PER_CLASS":{
            const { rowIndex, name, value } = action.MRPPerClass;
            const MRP = state.classes[rowIndex].MRP;
            const students = state.classes[rowIndex].students;
            const newClasses = [...state.classes];
            newClasses[rowIndex]={
                ...newClasses[rowIndex],MRPperClass:MRP*students
            }
            return { ...state, classes: newClasses };
        }

        case "CALCULATE_QUOTED_PRICE_PER_CLASS":{
            const { rowIndex, name, value } = action.quotedPricePerClass;
            const propsalPricePerStudent = state.classes[rowIndex].propsalPricePerStudent;
            const students = state.classes[rowIndex].students;
            const newClasses = [...state.classes];
            newClasses[rowIndex]={
                ...newClasses[rowIndex],quatedCostPerClass:propsalPricePerStudent*students
            }
            return { ...state, classes: newClasses };
        }

        case "CALCULATE_MIN_COST_PER_CLASS":{
            const { rowIndex, name, value } = action.minCostPerClass;
            const includeGSTAmount = state.includeGSTAmount
            const students = state.classes[rowIndex].students;
            const newClasses = [...state.classes];
            newClasses[rowIndex]={
                ...newClasses[rowIndex],minCostPerClass:includeGSTAmount*students
            }
            return { ...state, classes: newClasses };
        }

        case "CALCULATE_DISCOUNT":{
            const { rowIndex, name, value } = action.discount;
            const MRP = state.classes[rowIndex].MRP;
            const propsalPricePerStudent = state.classes[rowIndex].propsalPricePerStudent;
            const newClasses = [...state.classes];
            newClasses[rowIndex]={
                ...newClasses[rowIndex],discount:(((MRP-propsalPricePerStudent)/MRP)*100).toFixed(2)
            }
            return { ...state, classes: newClasses };
        }

        case "ADD_SCHOOL_DETAILS":{
            const {name,value} = action.school
            return {...state,[name]:value}
        }
        case "ADD_DEAL_DETAILS":{
            const {name,value} = action.deals
            return {...state,[name]:value}
        }
        case "CALCULATE_MIN_PRICE_PER_STUDENT":{
            // const minPricePerStudent = action.minPricePerStudent
            console.log('updating minPricePerStudent',)
            const minPricePerStudent =   (((state.stations * 500000 + state.mentors * 200000 + 53500) /
            state.totalStudents +
            3000) *
            1.1 -
          state.investementAmount / state.totalStudents).toFixed(2)
            return {...state,minPricePerStudent:minPricePerStudent}
        }

        case "CALCULATE_PREMIUM_MIN_PRICE_PER_STUDENT":{
            // const minPricePerStudent = action.minPricePerStudent
            console.log('updating minPricePerStudent',)
            const minPricePerStudent =   (((state.stations * 215000 + state.mentors * 200000 + 53500) /
            state.totalStudents +
            3000) *
            1.1 -
          state.investementAmount / state.totalStudents).toFixed(2)
            return {...state,minPricePerStudent:minPricePerStudent}
        }
        case "CALCULATE_INCLUDE_GST_AMOUNT":{
            const includeGSTAmount =  (state.minPricePerStudent * 1.18).toFixed(2)
            return {...state,includeGSTAmount:includeGSTAmount}
        }
        case "CALCULATE_MIN_DEAL_VALUE":{
            const minDealValue =  (state.includeGSTAmount * state.totalStudents).toFixed(2)
            return {...state,minDealValue:minDealValue}
        }

        case "CALCULATE_BUFFER_VALUE":{
            const bufferValue =  (state.totalQuatedCostPerClass -state.totalMinCostPerClass).toFixed(2)
            return {...state,bufferValue:bufferValue}
        }
        case "CALCULATE_PROPOSED_DEAL_VALUE":{
            const propsedDeal =  state.totalQuatedCostPerClass;
            return {...state,propsedDeal:propsedDeal}
        }
        case "CALCULATE_TOTAL_DISCOUNT_VALUE":{
            const totalDiscountValue = 
            ( ((state.totalMRPperClass - state.totalQuatedCostPerClass) /
            state.totalMRPperClass) *
            100).toFixed(2)
            return {...state,totalDiscountValue:totalDiscountValue}
        }
        case "CALCULATE_SINGLE_TERM_PAYMENT":{
            const singleTermPayment =  (state.propsedDeal / state.paymentMode).toFixed(2)
            return {...state,singleTermPayment:singleTermPayment}
        }
        case "CALCULATE_FIRST_PAYMENT":{
            const firstPayment =  (state.singleTermPayment - state.advance).toFixed(2)
            return {...state,firstPayment:firstPayment}
        }

        
        case "UPDATE_TOTAL":{
            const {name,value} = action.total
            return {...state,[name]:value}
        }
        case 'UPDATE_TOTAL_STUDENTS':{
            return { ...state, totalStudents: action.totalStudents };
        }
            
        case 'UPDATE_TOTAL_MRP_PER_CLASS':{
            return { ...state, totalMRPperClass: action.totalMRPperClass };
        }
            
        case 'UPDATE_TOTAL_MIN_COST_PER_CLASS':{
            return { ...state, totalMinCostPerClass: action.totalMinCostPerClass };
        }
           
        case 'UPDATE_TOTAL_QUATED_COST_PER_CLASS':{
            return { ...state, totalQuatedCostPerClass: action.totalQuatedCostPerClass };
        }
        
        case 'RESET_STATE':{
            return initialState
        }
        default:
          return state;
      }
}