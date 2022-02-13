import React, {useEffect, useState }  from 'react';
import { MoneyMaskBR } from '../components/mask';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Area = styled.View`

`;
const Modal = styled.Modal`
    height:200px;
    width:100%;
`;
const ModalArea = styled.View`
    flex:1;
    background-color:#000;
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
    justify-content:center;
    align-items:center;
`;
const HeaderArea = styled.View`
    height:50px;
    width:100%;
    background-color:#FFF;
    justify-content:center;
    align-items:center;
`;
const HeaderTitle = styled.Text`
    color:#005AA5;
    font-size:22px;
    font-weight:bold;
`;
const HeaderSubTitle = styled.Text`
    color:#005AA5;
    font-size:18px;
`;
const InfoArea = styled.View`
    width:100%;
    height:200px;
    padding:15px;
    align-items:center;
`;
const InfoAreaDetail = styled.View`
    padding:15px;
    align-items:center;
    justify-content:center;
`;
const InfoText = styled.Text`
    color:#005AA5;
    font-size:16px;
`;
const AreaBalon = styled.View`
    height:300px;
    width:90%;
    background-color:#FFF;
`;
const CloseModal = styled.TouchableOpacity`
    height:50px;
    width:100%;
    background-color:#FAE128;
    justify-content:center;
    align-items:center;
`;
const ButtonTitleText = styled.Text`
    color:#005AA5;
    font-size:20px;
`;

const ModalMessage = (props) => {
    const navigation = useNavigation();
    const [modalTitle, setModalTitle] = useState('RESGATE EFETUADO!');
    const [modalTitleButton, setModalTitleButton] = useState('NOVO O RESGATE');
    const [subTitle, setSubTitle] = useState('O valor solicitado estará em sua conta em até 5 dias utéis!!');
    const [stValueInvalid, setStValueInvalid] = useState(false);

    useEffect(()=>{
        if(props.listValueInvalid.length){
            setStValueInvalid(true);
            setModalTitle('DADOS ÍNVALIDOS!');
            setModalTitleButton('CORRIGIR');
            setSubTitle('Você preencheu um ou mais campos com valor acima do permitido!');
        }else{
            setStValueInvalid(false);
            setModalTitle('RESGATE EFETUADO!');
            setModalTitleButton('NOVO O RESGATE');
            setSubTitle('O valor solicitado estará em sua conta em até 5 dias utéis!!');
        }
    },[props.listValueInvalid])

    const handleCloseAction = () => {
        if(stValueInvalid){
            props.visibleAction();
        }else{
            props.visibleAction();
            navigation.navigate('Investments');
        }
    }

    return(
        <Area>
            <Modal
                animationType="fade"
                transparent={props.listValueInvalid.length ? true : false}
                visible={props.visible}
            >
                <ModalArea>
                    <AreaBalon>
                        <HeaderArea>
                            <HeaderTitle>{modalTitle}</HeaderTitle>
                        </HeaderArea>
                        <InfoArea>
                            <HeaderSubTitle>{subTitle}</HeaderSubTitle>
                            {stValueInvalid &&
                                <InfoAreaDetail>
                                {props.listValueInvalid.map((i,k)=>(
                                    <InfoText key={k}>{`${i.nome.slice(i.nome.indexOf('(')+1, i.nome.indexOf(')'))}: Valor máximo de R$ ${MoneyMaskBR(i.VlSaldo)}`}</InfoText>
                                ))}
                                </InfoAreaDetail>
                            }
                        </InfoArea>
                        <CloseModal onPress={handleCloseAction}>
                            <ButtonTitleText>{modalTitleButton}</ButtonTitleText>
                        </CloseModal>
                    </AreaBalon>
                </ModalArea>
            </Modal>
        </Area>
    )
}

export default ModalMessage;