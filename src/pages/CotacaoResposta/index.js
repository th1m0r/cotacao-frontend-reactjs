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
        cotacaoItens.map(item => {
            item.resultado.idfornecedor = user.fornecedor.id;
            if (!item.resultado.idvendedor && item.resultado.precoCotado>0) {
                item.resultado.idvendedor = user.id;
            }
            item.resultado.prazoEntrega = 0;
            item.resultado.prazoPagamento = 0;
            resultado.push(item.resultado);
        });
        try {
            const response = await api.post(`/cotacoes/${match.params.id_cotacao}/resposta`, resultado);
            if (response.status === 201) {
                dispatch(doLogout());
                history.push('/login');
            } else {
                console.log(response.data);
            }
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