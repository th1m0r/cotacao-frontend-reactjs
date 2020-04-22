import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

import api from '../../services/api';

function Cotacao({ history }) {
    const { user } = useSelector(state => state.auth.user);
    const [cotacoes, setCotacoes] = useState([]);

    useEffect(() => {
        async function loadCotacoes() {
            const response = await api.get('/cotacoes');
            setCotacoes(response.data);
        }
        if (user.id) {
            loadCotacoes();
        }
    }, [user.id]);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data Inicial</th>
                        <th>Data Final</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cotacoes.map(cotacao => (
                            <tr key={cotacao.id}>
                                <td>{cotacao.descricao}</td>
                                <td>{cotacao.dataInicial}</td>
                                <td>{cotacao.dataFinal}</td>
                                <td>
                                    <Link to={`/cotacao/${cotacao.id}/responder`}>Responder</Link>
                                </td>
                            </tr>
                        ))
                    }
                    {cotacoes.lengh === 0 && <tr><td colSpan="4">Nenhuma cotação em aberto</td></tr>}
                </tbody>
            </table>
        </>
    );
}

export default Cotacao;
