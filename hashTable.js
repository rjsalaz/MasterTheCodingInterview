class HashTable {

    constructor(size) {

        this.data = new Array(size); 

    }

    _hash(key) {

        let hash = 0;
        for (let i = 0; i < key.length; i++ )
        {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash; 
    }

    set(key, value) {

        let address = this._hash(key)
        
        if( !this.data[address]) {

            this.data[address] = []
            
        }

        this.data[address].push([key,value])

        return this.data
    
    }//O(1)


    get(key) {

        let address = this._hash(key)
        const currentbucket = this.data[address]

        if( currentbucket ){

            for( let i = 0; i < currentbucket.length; i++ ) {

                if(currentbucketp[i][0] === key) {
                   
                    return currentbucket[i][1]
                }
            }

        }

        return undefined


    }//O(1)


    keys() {
        const keyArray = []

        for( let i = 0; i < this.data.length; i++){

            if( this.data[i])
            {
                keyArray.push(this.data[i][0][0])
            }

        }

        return keyArray
    }
}


const myHashTable = new HashTable(50)
myHashTable.set("grapes",1000)
myHashTable.set("apples", 52)
myHashTable.set("oranges", 2)
myHashTable.keys()
