import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        background-color:#F4F4F4;
        flex:1;
    `,
    HeaderArea: styled.View`
        height:56px;
        flex-direction:row;
        width:100%;
        padding:0px 15px;
        justify-content:space-between;
        align-items:center;
    `,
    HeaderInfo: styled.Text`
        color:#8B8B8B;
        font-size:18px;

    `,
    ListViewTitle: styled.Text`

    `,
    List: styled.FlatList`
    
    `,
    LoadingArea: styled.View`
        height:100%;
        justify-content:center;
        align-items:center;
    `,
    LoadingIcon: styled.ActivityIndicator`
        margin-top:50px;
    `,
};