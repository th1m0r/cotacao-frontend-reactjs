import React, { useState, useEffect } from 'react';

import CotacaoItens from './components/CotacaoItens';
import api from './services/api'

function App() {

  const [cotacao, setCotacao] = useState();

  useEffect(() => {
    async function loadCotacao() {
      const response = await api('/cotacoes/55');
      response.data.itens.map(item => item.preco = 0.00)
      setCotacao(response.data);
    }
    loadCotacao();
  }, []);

  const handlePrecoChange = (item, preco) => {
    var temp = cotacao.itens;
    temp.map(i => i.id === item.id ? item.preco = preco : i)
    setCotacao({ ...cotacao, itens: temp })
  }

  return (
    <div className="App">
      {!!cotacao &&
        <table>
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
            {
              cotacao.itens.map(item => (
                <CotacaoItens key={item.id} item={item} onPrecoChange={handlePrecoChange} />
              ))
            }
          </tbody>
        </table>

      }
      <button type="button">CONCLUIR</button>
    </div>
  );
}

export default App;
