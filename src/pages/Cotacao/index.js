import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getCotacao } from '../../store/fetchActions';

import CotacaoList from '../../components/CotacaoList';

function Cotacao() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCotacao());
    }, []);

    return (
        <>
            <CotacaoList />
            <button type="button" className="btn btn-primary float-right col-3">FINALIZAR</button>
        </>
    );
}

export default Cotacao;
