import React from 'react';

// import { Container } from './styles';

const CotacaoItens = ({ item, onPrecoChange }) => (
    <tr>
        <td>{item.produto.ean}</td>
        <td>{item.produto.descricao}</td>
        <td>{item.unidade}</td>
        <td>{item.embalagem}</td>
        <td>{item.quantidade}</td>
        <td>
            <input
                type="text"
                value={item.preco}
                onChange={e => onPrecoChange(item, e.target.value)}
                placeholder="Preço" />
        </td>
    </tr>
);

export default CotacaoItens;
