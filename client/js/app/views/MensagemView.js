class MensagemView extends View{
    
    constructor(element) {
        super(element);
    }

    template(mensagem) {
        return `<p class="alert alert-info">${mensagem}</p>`;
    }
}