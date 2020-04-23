import React, { useState, useEffect } from 'react';

const CotacaoItens = ({ item }) => {
    const [preco, setPreco] = useState('0.00');
    useEffect(() => {
        !!item.resultado.idvendedor ? setPreco(item.resultado.precoCotado) : setPreco('0.00');
    }, [item]);

    const handlePrecoChange = item => {
        item.resultado.precoCotado = Number.parseFloat(preco.replace(',', '.')).toFixed(2);
    }


    return (
        <tr className={!!item.resultado.idvendedor ? "table-success" : ""}>
            <td>{item.produto.ean}</td>
            <td>{item.produto.descricao}</td>
            <td>{item.unidade}</td>
            <td>{item.embalagem}</td>
            <td>{item.quantidade}</td>
            <td>
                <input
                    type="text"
                    name="preco"
                    value={preco}
                    onBlur={() => handlePrecoChange(item)}
                    onChange={e => setPreco(e.target.value)}
                    placeholder="Preço"
                    disabled={!!item.resultado.idvendedor} />
            </td>
        </tr>
    );
}
export default CotacaoItens;
