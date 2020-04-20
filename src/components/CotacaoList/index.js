import React from 'react';
import { useSelector } from 'react-redux';

import CotacaoItens from '../CotacaoItens'


const Cotacao = () => {
    const { cotacao } = useSelector(state => state.cotacao);
    console.log('passando na cotacao')

    return (
        <>
            {!!cotacao &&
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
                                cotacao.itens.map(item => (
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