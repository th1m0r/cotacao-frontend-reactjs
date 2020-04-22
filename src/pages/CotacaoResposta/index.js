import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CotacaoItens from '../../components/CotacaoItens';
import { useSelector, useDispatch } from 'react-redux';
import { doLogout } from '../../store/auth'

const CotacaoResposta = ({ match, history }) => {
    const [cotacaoItens, setCotacaoItens] = useState([]);
    const { user } = useSelector(state => (state.auth.user));
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadItens() {
            const response = await api.get(`/cotacoes/${match.params.id_cotacao}/itens/fornecedor/${user.fornecedor.id}`);
            setCotacaoItens(response.data);
        }
        loadItens();
    }, [match.params.id_cotacao, user.fornecedor.id]);

    const handleFinalizar = async () => {
        var resultado = [];
        cotacaoItens.map(item => resultado.push({
            CotacaoId: Number.parseInt(match.params.id_cotacao),
            FornecedorId: user.fornecedor.id,
            VendedorId: item.precoCotado !== 0 ? user.id : 0,
            ProdutoId: item.produto.id,
            precoCotado: item.precoCotado || 0,
            prazoEntrega: 0,
            prazoPagamento: 0
        }));
        try {
            const response = await api.post(`/cotacoes/{match.params.id_cotacao/resposta`, resultado);
            console.log(response.data);
            dispatch(doLogout);
            history.push('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
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
                        {cotacaoItens.map((item, key) => (
                            <CotacaoItens key={key} item={item} />
                        ))
                        }
                        {cotacaoItens.length === 0 &&
                            <tr>
                                <td colSpan="6">Cotação não possui itens.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <button type="button" className="btn btn-primary float-right" onClick={handleFinalizar}>
                FINALIZAR
            </button>
        </>
    );
}

export default CotacaoResposta;