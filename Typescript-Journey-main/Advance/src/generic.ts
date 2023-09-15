
    //genrics makes component(chunk) reusable

    const score: Array<number> = []
    const names:Array<string> = []

    //types of val and return val are mentoined
    function identityOne(val: boolean | number): boolean | number{
        return val
    }

    // console.log(identityOne(true))
    // console.log(identityOne(10))


    //type is any this means val any type of values and alsoreturns any type of value
    function identityTwo(val: any):any{
        return "ok"
    }

    // console.log(identityTwo(10))

    //takes and return same type
    function identityThree<Type>(val: Type): Type {
        return val
    }

    // console.log(identityThree("ok"))


    //takes and return same type
    function identityFour<T>(val: T): T {
        return val
    }
    // console.log(identityFour(9))


    interface Bootle{
        brand: string,
        type: number
    }

    // identityFour<Bootle>({})


    //taking array as an input
    function getSearchProducts<T>(products: T[]): T {
        // do some database operations
        const myIndex = 3
        return products[myIndex]
    }

    console.log(getSearchProducts([10,20,30,40,50]))
    
    //above function using arrow function
    //<T,>  represents as an generic

    const getMoreSearchProducts = <T,>(products: T[]): T => {
        //do some database operations
        const myIndex = 4
        return products[myIndex]
    }


    //can also pass interfaces
    interface Database {
        connection: string,
        username: string,
        password: string
    }

    function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
        return{
            valOne,
            valTwo
        }
    }

    // anotherFunction(3, {})


    //genric using classes
    interface Quiz{
        name: string,
        type: string
    }

    interface Course{
        name: string,
        author: string,
        subject: string
    }

    class Sellable<T>{
        public cart: T[] = []

        addToCart(product: T){
            this.cart.push(product)
        }
    }