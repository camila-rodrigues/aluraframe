class NegociacoesView extends View {

    constructor(element) {
        super(element);
    }

    template(negociacoes) {
        return `
            ${negociacoes.map(negociacao => `
                <tr>
                    <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
            `).join('')}
            <tr>
                <td colspan='3'></td>
                <td>${negociacoes.reduce((prev, curr) => prev + curr.volume, 0)}</td>
            </tr>
        `;
    }
}