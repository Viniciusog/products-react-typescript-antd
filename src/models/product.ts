class Product  {

    id: string
    name: string
    description: string
    expirationdate: string

    constructor(id: string, name: string, description: string, expirationdate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expirationdate = expirationdate;
    }
}

export default Product