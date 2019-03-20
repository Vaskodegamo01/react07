const initialState = {
    result: ''
};

const calculate =(result)=>{
    if(result.includes('--')){
        result = result.replace('--','-')
    }
    if(result.includes('++')){
        result = result.replace('++','+')
    }
    try {
        return eval(result);

    } catch (e) {
        return "error"
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, result: state.result + action.value};
        case 'CALC':
            return {...state, result: calculate(state.result)};
        case 'CLEAR':
            return {...state, result: state.result=''};
        default:
            return state
    }
};

export default reducer;