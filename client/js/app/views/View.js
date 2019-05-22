class View {
    
    constructor(element) {
        this.element = element;
    }

    template(model) {
        throw new Error("O método da classe View precisa ser implementado pela classe filha.");
    }

    update(model) {
        this.element.innerHTML = this.template(model); 
    }
}