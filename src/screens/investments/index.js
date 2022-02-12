import React, { useEffect, useState } from 'react';
import C from './styled';
import useAPI from '../../useAPI';
import ListInvest from '../../components/listInvest'

export default () => {
    const api = useAPI();
    const [listInvest, setListInvest] = useState();

    const getInvestiments = async () =>{
        const json = await api.getInvestiments();
        setListInvest(json.response.data);
    }

    useEffect(() => {
        getInvestiments();
    },[])


    return(
        <C.Container> 
            <C.HeaderArea>
                <C.HeaderInfo>INVESTIMENTOS</C.HeaderInfo>
                <C.HeaderInfo>R$</C.HeaderInfo>
            </C.HeaderArea>
            {listInvest &&
                <C.List 
                    data={listInvest.listaInvestimentos}
                    renderItem={({item}) => {
                        return(
                            <ListInvest data={item}/>
                        )
                    }}
                />
            }
            {!listInvest &&
                <C.LoadingArea>
                    <C.LoadingIcon size="large" color="#FF0000"/>
                </C.LoadingArea>
            }
        </C.Container>
    )
}