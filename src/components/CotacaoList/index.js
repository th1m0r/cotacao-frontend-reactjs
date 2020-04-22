import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import CotacaoItens from '../CotacaoItens';

const Cotacao = ({ cotacao }) => {
    const [cotacaoItens, setCotacaoItens] = useState([]);
    useEffect(() => {
        async function loadItens() {
            const response = api.get(`/cotacoes/${cotacao}/itens`);
            setCotacaoItens(response.data);
        }
        loadItens();
    }, [cotacao]);

    console.log('passando pela lista da cotacao')

    return (
        <>
            {!!cotacaoItens &&
                <div className="table-responsive mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>EAN</th>
                                <th>Descrição</th>
                                <th>Unidade</th>
                                <th>Embalagem</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cotacaoItens.itens.map(item => (
                                    <CotacaoItens key={item.id} item={item} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}

export default Cotacao;