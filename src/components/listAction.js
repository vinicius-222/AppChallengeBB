import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { MoneyMaskBR, MoneyMaskUS } from '../components/mask';

const DetailActionArea = styled.View`
    height:180px;
    background-color:#FFF;
    border-bottom-width:20px;
    border-bottom-color:#F4F4F4;
`;
const DetailActionInfoArea = styled.View`
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    padding:10px 15px;
    border-bottom-width:1px;
    border-bottom-color:#F4F4F4;
`;
const DetailActionText = styled.Text`
    font-size:18px;
    color:#000;
`;
const DetailActionRescueArea = styled.View`
    padding:0px 15px;
    border-bottom-width:1px;
    border-bottom-color:#F4F4F4;
`;
const DetailActionRescueText = styled.Text`
    font-size:16px;
`;
const DetailActionRescueTextInput = styled.TextInput`
    font-size:20px;
    height:25px;
    padding:0px;
`;
const DetailActionRescueTextMessage = styled.Text`
    font-size:16px;
    color:#FF0000;
`;


const ListAction = (props) => {
    const [valorResgate, setValorResgate] = useState(MoneyMaskBR(0.00));
    const [valorAcao, setValorAcao] = useState(0.00);
    const [message, setMessage] = useState(false);

    useEffect(()=>{
        let value = parseFloat(props.data.item.percentual) * parseFloat(props.valor) / 100;
        setValorAcao(MoneyMaskBR(value.toFixed(2)));
    },[])

    useEffect(()=>{
        if(parseFloat(MoneyMaskUS(valorResgate)) > parseFloat(MoneyMaskUS(valorAcao))){
            setMessage(true);
        }else{
            setMessage(false);
        }
        props.onCalcTotalResgate(valorResgate, props.data.index, valorAcao);
    },[valorResgate])

    return(
        <DetailActionArea>
            <DetailActionInfoArea>
                <DetailActionText>Ação</DetailActionText>
                <DetailActionText>{props.data.item.nome}</DetailActionText>
            </DetailActionInfoArea>
            <DetailActionInfoArea>
                <DetailActionText>Saldo Acumulado</DetailActionText>
                <DetailActionText>{`R$ ${valorAcao}`}</DetailActionText>
            </DetailActionInfoArea>
            <DetailActionRescueArea>
                <DetailActionRescueText>Valor a resgatar</DetailActionRescueText>
                <DetailActionRescueTextInput 
                    keyboardType={'numeric'}
                    value={`R$ ${valorResgate}`}
                    onChangeText={(e)=>setValorResgate(MoneyMaskBR(e))}
                />
            </DetailActionRescueArea>
            <DetailActionRescueArea>
                {message &&
                    <DetailActionRescueTextMessage>{`Valor nao pode ser maior que ${MoneyMaskBR(valorAcao)}`}</DetailActionRescueTextMessage>
                }
            </DetailActionRescueArea>
        </DetailActionArea>
    )
}

export default ListAction;