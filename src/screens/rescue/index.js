import React, { useEffect, useState } from 'react';
import C from './styled';
import { connect } from 'react-redux';
import { MoneyMask, MoedaAmericana } from '../../components/mask';
import ListAction from '../../components/listAction';
import ModalMessage from '../../components/modalMessage';
const Rescue = (props) => {
    const [valotTotalRegate, setValorTotalResgate] = useState(0.00);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const onCalcTotalResgate = (v,k) => {
        props.setChangeAcoes({
            'key':k,
            'VlResgate':MoedaAmericana(v)
        }) 
        SomaValoresTotais()
        .then((r)=>{
            setValorTotalResgate(r);
        })
    }   

    const SomaValoresTotais = () => {
        let promise = new Promise((resolve, reject) =>{
            let v = 0;
            for (let i in props.acoes){
                v = v + parseFloat(props.acoes[i].VlResgate);
            }
            resolve(v);
        })
        return promise;
    }

    const handleModalClick = () => {
        setModalVisible(!modalVisible);
    }

    return(
        <C.Container>
            <ModalMessage 
                title={modalTitle}
                visible={modalVisible}
                visibleAction={handleModalClick}
                clickAction={handleModalClick}
            />
            <C.HeaderInvestArea>
                <C.HeaderInfoInvestText>DADOS DO INVESTIMENTO</C.HeaderInfoInvestText>
            </C.HeaderInvestArea>
            <C.HeaderDetailInvestArea>
                <C.HeaderDetailInvestAreaItem>
                    <C.HeaderDetailInvesTextItem>Nome</C.HeaderDetailInvesTextItem>
                    <C.HeaderDetailInvesTextItem>{props.nome}</C.HeaderDetailInvesTextItem>
                </C.HeaderDetailInvestAreaItem>
                <C.HeaderDetailInvestAreaItem>
                    <C.HeaderDetailInvesTextItem>Saldo Total Dispnivel</C.HeaderDetailInvesTextItem>
                    <C.HeaderDetailInvesTextItem>{`R$ ${MoneyMask(parseFloat(props.saldoTotal).toFixed(2))}`}</C.HeaderDetailInvesTextItem>
                </C.HeaderDetailInvestAreaItem>
            </C.HeaderDetailInvestArea>
            <C.HeaderInvestArea>
                <C.HeaderInfoInvestText>RESGATE DO SEU JEITO</C.HeaderInfoInvestText>
            </C.HeaderInvestArea>
            <C.DetailListActions 
                data={props.acoes}
                renderItem={(item)=> {
                    return(
                        <ListAction data={item} valor={props.saldoTotal} onCalcTotalResgate={(v,k)=>onCalcTotalResgate(v,k)}/>
                    )
                }}
            />
             <C.BottomInvestArea>
                <C.BottomInvestText>Valor total a resgatar</C.BottomInvestText>
                <C.BottomInvestText>{`R$  ${MoneyMask(valotTotalRegate.toFixed(2))}`}</C.BottomInvestText>
            </C.BottomInvestArea>
            <C.BottomInvestButton onPress={()=>handleModalClick()}>
                <C.BottomInvestButtonText>CONFIRMAR RESGATE</C.BottomInvestButtonText>
            </C.BottomInvestButton>
        </C.Container>
    )
}
const mapStateToProps = (state) =>{
    return{
        nome:state.InvestReducer.nome,
        objetivo:state.InvestReducer.objetivo,
        saldoTotal:state.InvestReducer.saldoTotal,
        indicadorCarencia:state.InvestReducer.indicadorCarencia,
        acoes:state.InvestReducer.acoes
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setChangeAcoes:(acoes)=>dispatch({type:'CHANGE_ACOES', payload:{acoes}}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Rescue)