import React from 'react';

const CotacaoItens = ({ item }) => {

    const handlePrecoChange = (item, event) => {
        //item.precoCotado = event.target.value || 0;
    }

    return (
        <tr>
            <td>{item.produto.ean}</td>
            <td>{item.produto.descricao}</td>
            <td>{item.produto.unidade}</td>
            <td>{item.produto.embalagem}</td>
            <td>{item.produto.quantidade}</td>
            <td>
                <input
                    type="text"
                    name="preco"
                    value={item.precoCotato}
                    onChange={e => handlePrecoChange(item, e)}
                    onBlur={e => handlePrecoChange(item, e)}
                    placeholder="Preço" />
            </td>
        </tr>
    );
}
export default CotacaoItens;
