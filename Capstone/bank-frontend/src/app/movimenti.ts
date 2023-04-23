import { Conti } from "./conti";

export interface Movimenti {
  id: number;
  ammontareMovimento: number;
  ordinante: Conti;
  beneficiario: Conti;
  tipoSpesa: string;
  data: string;
}
