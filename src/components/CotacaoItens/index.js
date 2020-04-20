import React from 'react';
import { useDispatch } from 'react-redux'
import { changePrice } from '../../store/cotacao'

// import { Container } from './styles';

const CotacaoItens = ({ item }) => {
    const dispatch = useDispatch();
    console.log('passando nos itens')
    
    const handlePrecoChange = (item, preco) => {
        dispatch(changePrice({ item, preco }))
    }

    return (
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
                    onChange={e => handlePrecoChange(item, e.target.value)}
                    placeholder="Preço" />
            </td>
        </tr>
    );
}

export default CotacaoItens;
