import { Comida } from "./Comida";
import { Food } from "./Food";

// export interface Vino {
//     id: number;
//     nombre: string;
//     imagenUrl: string;
//     precio: number;
//     enVenta: boolean;
//     cantidadEnCarro: number;
//     maridaje: Comida[];
// }

export interface Vino {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[];
}