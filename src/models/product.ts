class Product  {

    id: string
    name: string
    description: string
    expirationdate: string
    //Só existe essa key para o react não reclamar de falta de key na renderização de componentes

    constructor(id: string, name: string, description: string, expirationdate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expirationdate = expirationdate;
    }
}

export default Product