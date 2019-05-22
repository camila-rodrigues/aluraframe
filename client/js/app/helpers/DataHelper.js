class DataHelper {

    constructor() {
        throw new Error("Você não pode criar uma instância dessa classe.");
    }

    static textoParaData(texto) {
        return new Date(texto.split("-"));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

}