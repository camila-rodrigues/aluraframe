class NegociacaoController {

    constructor () {

        let $ = document.querySelector.bind(document);
        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._listaNegociacoes = new ListaNegociacoes();

        this.negociacoesView = new NegociacoesView($(".table tbody"));
        this.negociacoesView.update(this._listaNegociacoes.negociacoes);
        
        this.mensagemView = new MensagemView($(".mensagemView"));
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
        this.negociacoesView.update(this._listaNegociacoes.negociacoes);
        this.mensagemView.update("Negociação inserida com sucesso");
    }

    _limpaFormulario() {

        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    _criaNegociacao() {

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}