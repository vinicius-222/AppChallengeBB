import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        background-color:#F4F4F4;
        flex:1;
    `,
    HeaderRescueArea: styled.View`
        height:65px;
        flex-direction:row;
        width:100%;
        padding:0px 15px;
        justify-content:space-between;
        align-items:center;
    `,
    HeaderInfoRescueText: styled.Text`
        color:#8B8B8B;
        font-size:18px;
    `,
    HeaderDetailRescueArea: styled.View`
        height:86px;
        background-color:#FFF;
    `,
    HeaderDetailRescueAreaItem: styled.View`
        height:43px;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        padding:0px 15px;
        border-bottom-width:1px;
        border-bottom-color:#F4F4F4;
    `,
    HeaderDetailRescueextItem: styled.Text`
        color:#000;
        font-size:18px;
    `,
    DetailListActions: styled.FlatList`
        
    `,
    BottomRescueArea: styled.View`
        background-color:#FFF;
        height:60px;
        padding:0px 15px;
        align-items:center;
        justify-content:space-between;
        flex-direction:row;
        border-top-width:1px;
        border-top-color:#F4F4F4;
    `,
    BottomRescueText: styled.Text`
        color:#000;
        font-size:18px;
    `,
    BottomRescueButton: styled.TouchableOpacity`
        background-color:#FAE128;
        height:60px;
        align-items:center;
        justify-content:center;
    `,
    BottomRescueButtonText: styled.Text`
        color:#005AA5;
        font-size:22px;
        font-weight:bold;
    `,
}