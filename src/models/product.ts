class Product  {

    id: string
    name: string
    description: string
    expirationdate: string
    //Só existe essa key para o react não reclamar de falta de key na renderização de componentes
    key: string

    constructor(id: string, name: string, description: string, expirationdate: string, key: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expirationdate = expirationdate;
        this.key = key
    }
}

export default Product