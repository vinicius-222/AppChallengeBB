import React from 'react';
import styled from 'styled-components/native';
import { MoneyMaskBR } from '../components/mask';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const ListArea = styled.TouchableOpacity`
    height:72px;
    background-color:${props=>props.carencia == 'S' ? '#CCC':'#FFFFFF'};
    margin-bottom:2px;
    padding:0px 15px;
    justify-content:center;
`;
const ListAreaInfo = styled.View`
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
`;
const ListInfo = styled.Text`
    font-size:18px;
    color:${props=>props.carencia == 'S'?'#847D7D':'#000'};
`;
const ListDetail = styled.Text``;

const ListInvest = (props) =>{
    const navigation = useNavigation();

    const handleListArea = () => {
        props.setNome(props.data.nome);
        props.setObjetico(props.data.objetivo);
        props.setSaldoTotal(props.data.saldoTotal);
        props.setIndicadorCarencia(props.data.indicadorCarencia);
        props.setAcoes(props.data.acoes);
        if (props.data.indicadorCarencia == 'S'){
            alert('ESTE INVESTIMENTO AINDA ESTA SOB CARÊNCIA!!')
        }else{  
            navigation.navigate('Rescue');
        }
    }

    return(
        <ListArea onPress={handleListArea} carencia={props.data.indicadorCarencia}>
            <ListAreaInfo>
                <ListInfo carencia={props.data.indicadorCarencia}>{props.data.nome}</ListInfo>
                <ListInfo carencia={props.data.indicadorCarencia}>{`R$ ${MoneyMaskBR(parseFloat(props.data.saldoTotal).toFixed(2))}`}</ListInfo>
            </ListAreaInfo>
            <ListDetail>{props.data.objetivo}</ListDetail>
        </ListArea>
    )
}
const mapStateToProps = (state) =>{
    return{}
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setNome:(nome)=>dispatch({type:'SET_NOME', payload:{nome}}),
        setObjetico:(objetivo)=>dispatch({type:'SET_OBJETIVO', payload:{objetivo}}),
        setSaldoTotal:(saldoTotal)=>dispatch({type:'SET_SALDOTOTAL', payload:{saldoTotal}}),
        setIndicadorCarencia:(indicadorCarencia)=>dispatch({type:'SET_INDICADORCARENCIA', payload:{indicadorCarencia}}),
        setAcoes:(acoes)=>dispatch({type:'SET_ACOES', payload:{acoes}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ListInvest);