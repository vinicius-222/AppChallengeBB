const initialState = {
    nome:'',
    objetivo:'',
    saldoTotal:0,
    indicadorCarencia:'',
    acoes:[],
}

export default (state = initialState, action) => {
    let arr = state.acoes;
    switch(action.type){
        case 'SET_NOME':
            return{...state, nome:action.payload.nome};
        break;
        case 'SET_OBJETIVO':
            return{...state, objetivo:action.payload.objetivo};
        break;
        case 'SET_SALDOTOTAL':
            return{...state, saldoTotal:action.payload.saldoTotal};
        break;
        case 'SET_INDICADORCARENCIA':
            return{...state, indicadorCarencia:action.payload.indicadorCarencia};
        break;
        case 'SET_ACOES':
            return{...state, acoes:action.payload.acoes};
        break;
        case 'CHANGE_ACOES':
            arr[action.payload.acoes.key].VlResgate = action.payload.acoes.VlResgate;
            arr[action.payload.acoes.key].VlSaldo = action.payload.acoes.VlSaldo;
            state.acoes = [];
            return { ...state, acoes:state.acoes.concat(arr)};
        break;
        default:
            return state;
    }
}