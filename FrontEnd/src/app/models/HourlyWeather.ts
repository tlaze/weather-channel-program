

export interface HourlyWeather {
    city?:{
        coord:[lat:number, lon:number],
        country:string,
        id:number,
        name:string,
        population:number,
        sunrise:number,
        sunset:number,
        timezone:number
    },
    cnt:number,
    code:string,
    list: Object[],
    message:number,

}