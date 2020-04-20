import { createSlice } from '@reduxjs/toolkit';

const cotacaoSlice = createSlice({
    name: 'cotacao',
    initialState: {
        cotacao: null,
    },
    reducers: {
        loadCotacao(state, action) {
            action.payload.itens.map(item => item.preco = 0)
            state.cotacao = action.payload;            
        },
        changePrice(state, action) {
            const item = state.cotacao.itens.find(item => item.id === action.payload.item.id)
            if (item) {
                item.preco = action.payload.preco;
            }
        },
    }
});

export const { loadCotacao, changePrice } = cotacaoSlice.actions;
export default cotacaoSlice.reducer;