const gerarIdUnico = require('../../utils/gerarIdUnico');

describe('Gerar Id Unico', () => {
    it('Deve gerar um id unico', () => {
        const id = gerarIdUnico();

        expect(id).toHaveLength(8);
    })
})