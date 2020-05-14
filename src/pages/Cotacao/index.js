import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import ContentHeader from '../../layout/ContentHeader'
import Content from '../../layout/Content'

function Cotacao() {
    const [cotacoes, setCotacoes] = useState([]);

    useEffect(() => {
        async function loadCotacoes() {
            const response = await api.get('/cotacoes');
            setCotacoes(response.data);
        }
        loadCotacoes();
    }, []);

    return (
        <>
            <ContentHeader title="Listagem de cotações" small="" />
            <Content>
                <div className="table-responsive">
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
                            {cotacoes && <tr><td colSpan="4">Nenhuma cotação em aberto</td></tr>}
                        </tbody>
                    </table>
                </div>
            </Content>
        </>
    );
}

export default Cotacao;
