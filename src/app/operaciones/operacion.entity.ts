export interface Operacion {

    Id : string

    ContactoBodega: string 

    DireccionBodega: string

    FechaRetiro: Date 

    NumeroContenedor: string

    PesoContenedor: number

    VolumenCarga: number

    Carga: Carga[]

}

export interface Carga {

    Id: string

    NumeroCarga: string

    ValorCarga: string
}