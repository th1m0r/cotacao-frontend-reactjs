import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CotacaoItens from '../../components/CotacaoItens';
import { useSelector, useDispatch } from 'react-redux';
import { doLogout } from '../../store/auth'
import ContentHeader from '../../layout/ContentHeader';
import Content from '../../layout/Content';
import { toastr } from 'react-redux-toastr'

const CotacaoResposta = () => {
    const [cotacaoItens, setCotacaoItens] = useState([]);
    const { user } = useSelector(state => (state.auth.user));
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadItens() {
            try {
                const response = await api.get(`/cotacoes/itens?id_fornecedor=${user.fornecedor.id}`);
                setCotacaoItens(response.data);
            } catch (e) {
                toastr.error('Erro', 'Erro ao carregar produtos.')
            }
        }
        loadItens();
        return setCotacaoItens([]);
    }, [user.fornecedor.id]);

    const handleFinalizar = async () => {
        const resultado = await processarResultado();
        toastr.info('Aguarde... salvando respostas')
        setTimeout(() => {
            api.post(`/cotacoes/resposta`, resultado)
                .then(response => {
                    if (response.status === 201) {
                        toastr.success("Sucesso", "Cotação respondida com sucesso!");
                        dispatch(doLogout());
                    } else {
                        toastr.error("Erro", response.data);
                    }
                }).catch(err => {
                    toastr.error("Erro", err.response.data);
                })
        }, 4000);
    }

    const processarResultado = async () => {
        let resultado = [];
        api.get('/cotacoes')
            .then(res => {
                const cotacoes = res.data
                cotacoes.forEach(cotacao => {
                    api.get(`/cotacoes/${cotacao.id}/resposta?id_fornecedor=${user.fornecedor.id}`)
                        .then(res => {
                            const respostas = res.data;
                            if (respostas.length > 0) {
                                respostas.forEach(resposta => {
                                    cotacaoItens.forEach(itemResposta => {
                                        if (resposta.idproduto === itemResposta.idproduto) {
                                            if (Number.parseFloat(itemResposta.precoCotado) > 0
                                                && Number.parseFloat(itemResposta.idvendedor) === 0) {
                                                resposta.idvendedor = user.id
                                                resposta.precoCotado = itemResposta.precoCotado
                                            }
                                            resultado.push(resposta);
                                        }
                                    })
                                })
                            } else {
                                api.get(`/cotacoes/${cotacao.id}/itens`)
                                    .then(res => {
                                        const itens = res.data;
                                        itens.forEach(item => {
                                            cotacaoItens.forEach(resposta => {
                                                if (resposta.idproduto === item.idproduto) {
                                                    resultado.push({
                                                        idcotacao: item.idcotacao,
                                                        idfornecedor: user.fornecedor.id,
                                                        idvendedor: Number.parseFloat(resposta.precoCotado) > 0 ? user.id : 0,
                                                        idproduto: resposta.idproduto,
                                                        precoCotado: resposta.precoCotado,
                                                        prazoPagamento: resposta.prazoPagamento,
                                                        prazoEntrega: resposta.prazoEntrega
                                                    })
                                                }
                                            })
                                        })
                                    }).catch(err => console.log('deu erro carregando itens', err))
                            }
                        }).catch(err => console.log('deu erro carregando as respostas', err))
                })
            })
            .catch(err => console.log(err))
        return resultado;
    }

    return (
        <>
            <ContentHeader title="Listagem de itens para cotação" small="" />
            <Content>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-striped text-nowrap">
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
                </div>
                <div className="row">
                    <button type="button"
                        className="btn btn-primary ml-auto mb-3"
                        onClick={handleFinalizar}>FINALIZAR</button>
                </div>
            </Content>
        </>
    );
}

export default CotacaoResposta;