import React, { useState, useEffect } from 'react';

const CotacaoItens = ({ item }) => {
    const [preco, setPreco] = useState("0.00");

    useEffect(() => {
        item.idvendedor !== "0" ? setPreco(item.precoCotado) : setPreco('0.00');
    }, [item]);

    const handleChange = preco => {
        setPreco(preco)
        item.precoCotado = preco;
    }

    return (
        <tr className={item.idvendedor !== "0"  ? "table-success" : ""}>
            <td>{item.ean}</td>
            <td>{item.descricao}</td>
            <td>{item.unidade}</td>
            <td>{item.embalagem}</td>
            <td>{item.quantidade}</td>
            <td>
                <input
                    type="text"
                    name="preco"
                    value={preco}
                    onChange={e => handleChange(e.target.value)}
                    onFocus={e => setPreco('')}
                    placeholder="Preço"
                    autoComplete="off"
                    disabled={item.idvendedor !== "0"} />
            </td>
        </tr>
    );
}
export default CotacaoItens;
