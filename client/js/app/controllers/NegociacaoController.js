class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        let self = this;

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        self.negociacoesView.update(target._negociacoes);
                    };
                }

                return Reflect.get(target, prop, receiver);
            }
        });

        this.negociacoesView = new NegociacoesView($('.table tbody'));
        this.negociacoesView.update(this._listaNegociacoes.negociacoes);

        this.mensagemView = new MensagemView($('.mensagemView'));
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._limpaFormulario();

        this.mensagemView.update('Negociação inserida com sucesso');
    }

    _limpaFormulario() {
        this._inputData.value = '';
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

    _apaga() {
        this._listaNegociacoes.esvazia();

        this.mensagemView.update('Negociações apagadas com sucesso.');
    }
}
