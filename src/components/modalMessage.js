import React  from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const Area = styled.View`

`;
const ModalArea = styled.Modal`
    height:200px;
    width:100%;
`;

const AreaModal = styled.View`
    flex:1;
    background-color:#000;
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
    justify-content:center;
    align-items:center;
`;
const AreaBalon = styled.View`
    height:300px;
    width:90%;
    background-color:#FFF;
    justify-content:flex-end;
    align-items:flex-end;
`;
const CloseModal = styled.TouchableOpacity`
    height:60px;
    width:100%;
    background-color:#FAE128;

`;

const ModalMessage = (props) => {

    const handleCloseAction = () => {
        props.visibleAction();
    }

    return(
        <Area>
            <ModalArea
                animationType="fade"
                transparent={true}
                visible={props.visible}
            >
                <AreaModal>
                    <AreaBalon>
                        <CloseModal onPress={handleCloseAction}></CloseModal>
                    </AreaBalon>
                </AreaModal>
            </ModalArea>
        </Area>
    )
}

export default ModalMessage;