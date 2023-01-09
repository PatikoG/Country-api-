

export interface Country{
    altSpellings:string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: {
        latlng:number[],
    };
    car: {
        side:string,
        signs:sting[],
    };
    cca2:string;
    cca3:string;
    ccn3:string;
    cioc:string;
    coatOfArms:{
        png:string;
        svg:string;
    };
    continents:string[];
    currencies:{
        XCD:{
            name:string,
            symbol:string,
        };
    };
    demonyms:{
        eng:{
            f:string,
            m:string,
        };
        fra:{
            f:string,
            m:string,
        };
    };
    fifa:string;
    flag:string;
    flags:{
        png:string,
        svg:string,
    };
    idd:{
        root:string,
        suffixes:string[]
    };
    independent:boolean;
    landlocked:boolean;
    languages:Language,
    
    latlng:number[];
    maps:{
        googleMaps:string,
        openStreetMaps:string,
    };
    name:{
        common:string;
        nativeName: Native;
    };
    population:number;
    region:string;
    startOfWeek:string;
    status:string;
    subregion:string,
    timezones:string[]
    tld:string[]
    unMember:boolean;
    translation:Translation;

};

interface Translation{
    ara:TranslationLanguage;
};

interface TranslationLanguage{
    common:string,
    official:string,
};

export interface NativeNames{
    common:string,
    official:string,
}

export interface Native{
    [Key : string]: NativeNames;   
    official:string;
}

export interface Language{
    [Key : string] : string;
}