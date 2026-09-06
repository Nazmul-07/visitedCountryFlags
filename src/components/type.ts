export interface CountryType {
    name: {
        common : string,
        official: string
    },
    flags :{
        flags: {
            png: string,
            alt: string
        }
    },
    ccn3:{
        ccn3: string,
    },
    capital: {
        capital: string[],
    },
    population:{
        population: number,
    }

}