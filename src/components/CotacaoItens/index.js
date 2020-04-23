import React from 'react';

const CotacaoItens = ({ item }) => {

    const handlePrecoChange = (item, event) => {
        item.resultado.precoCotado = event.target.value;
    }

    return (
        <tr className={item.resultado.idvendedor!== null ? "table-success" : ""}>
            <td>{item.produto.ean}</td>
            <td>{item.produto.descricao}</td>
            <td>{item.unidade}</td>
            <td>{item.embalagem}</td>
            <td>{item.quantidade}</td>
            <td>
                <input
                    type="text"
                    name="preco"
                    value={item.resultado.precoCotado}
                    onChange={e => handlePrecoChange(item, e)}
                    placeholder="Preço"
                    disabled={item.resultado.precoCotado > 0} />
            </td>
        </tr>
    );
}
export default CotacaoItens;
