import React, { useState } from 'react';
import C from './styled';
import { connect } from 'react-redux';
import { MoneyMask, MoedaAmericana } from '../../components/mask';
import ListAction from '../../components/listAction';
import ModalMessage from '../../components/modalMessage';

const Rescue = (props) => {
    const [valotTotalRegate, setValorTotalResgate] = useState(0.00);
    const [modalVisible, setModalVisible] = useState(false);
    const [listValueInvalid, setListValueInvalid] = useState([]);

    const onCalcTotalResgate = (v,k,s) => {
        props.setChangeAcoes({
            'key':k,
            'VlResgate':parseFloat(MoedaAmericana(v)),
            'VlSaldo':parseFloat(MoedaAmericana(s))
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

    const VerifyActions = () => {
        let promise = new Promise((resolve, reject) =>{
            let arr = [];
            for (let i in props.acoes){
                if(props.acoes[i].VlResgate > props.acoes[i].VlSaldo){
                    arr.push(props.acoes[i])
                }
            }
            resolve(arr);
        })
        return promise;
    }

    const handleModalClick = () => {
        VerifyActions()
        .then((r)=>{
            setListValueInvalid(r);
            setModalVisible(!modalVisible);
        })
    }

    return(
        <C.Container>
            <ModalMessage 
                visible={modalVisible}
                visibleAction={handleModalClick}
                clickAction={handleModalClick}
                listValueInvalid={listValueInvalid}
            />
            <C.HeaderRescueArea>
                <C.HeaderInfoRescueText>DADOS DO INVESTIMENTO</C.HeaderInfoRescueText>
            </C.HeaderRescueArea>
            <C.HeaderDetailRescueArea>
                <C.HeaderDetailRescueAreaItem>
                    <C.HeaderDetailRescueextItem>Nome</C.HeaderDetailRescueextItem>
                    <C.HeaderDetailRescueextItem>{props.nome}</C.HeaderDetailRescueextItem>
                </C.HeaderDetailRescueAreaItem>
                <C.HeaderDetailRescueAreaItem>
                    <C.HeaderDetailRescueextItem>Saldo Total Dispnivel</C.HeaderDetailRescueextItem>
                    <C.HeaderDetailRescueextItem>{`R$ ${MoneyMask(parseFloat(props.saldoTotal).toFixed(2))}`}</C.HeaderDetailRescueextItem>
                </C.HeaderDetailRescueAreaItem>
            </C.HeaderDetailRescueArea>
            <C.HeaderRescueArea>
                <C.HeaderInfoRescueText>RESGATE DO SEU JEITO</C.HeaderInfoRescueText>
            </C.HeaderRescueArea>
            <C.DetailListActions 
                data={props.acoes}
                renderItem={(item)=> {
                    return(
                        <ListAction data={item} valor={props.saldoTotal} onCalcTotalResgate={(v,k,s)=>onCalcTotalResgate(v,k,s)}/>
                    )
                }}
            />
             <C.BottomRescueArea>
                <C.BottomRescueText>Valor total a resgatar</C.BottomRescueText>
                <C.BottomRescueText>{`R$  ${MoneyMask(valotTotalRegate.toFixed(2))}`}</C.BottomRescueText>
            </C.BottomRescueArea>
            <C.BottomRescueButton onPress={()=>handleModalClick()}>
                <C.BottomRescueButtonText>CONFIRMAR RESGATE</C.BottomRescueButtonText>
            </C.BottomRescueButton>
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