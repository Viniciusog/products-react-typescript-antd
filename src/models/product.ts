class Product  {

    id: string
    name: string
    description: string
    expirationdate: string
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