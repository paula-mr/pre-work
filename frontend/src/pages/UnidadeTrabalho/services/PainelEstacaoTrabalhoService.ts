/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import { COLORS } from '../../../config/material.theme';
import WorkStationRepository, {
  IWorkStationRoom,
} from '../../../repositorios/WorkStationRepository';

export interface IEstado {
  indice: number;
  valor: number;
}

export interface IObterEstacaoTrabalho {
  matriz: number[][];
  estados: IEstado[];
}

export interface IEstacaoTrabalho {
  ocupado: number | null;
  color: string;
  elemento: 'cadeira' | 'mesa' | null;
  indiceCadeira: number | null;
}

class PainelEstacaoTrabalhoService {
  public async getWorkStationRooms(): Promise<IWorkStationRoom[]> {
    const rooms = await WorkStationRepository.listWorkStationRooms();
    return rooms;
  }

  public async obterDadosBackEnd(): Promise<IObterEstacaoTrabalho> {
    const matriz = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 0, 6, -1, -1, -1, -1, -1, -1, -1],
      [2, 0, 7, -1, -1, -1, 11, 0, 14, -1],
      [3, 0, 8, -1, -1, -1, 12, 0, 15, -1],
      [4, 0, 9, -1, -1, -1, 13, 0, 16, -1],
      [5, 0, 10, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ];

    const estados: IEstado[] = [
      { indice: 1, valor: 0 },
      { indice: 2, valor: 1 },
      { indice: 3, valor: 0 },
      { indice: 4, valor: 0 },
      { indice: 5, valor: 0 },
      { indice: 6, valor: 0 },
      { indice: 7, valor: 0 },
      { indice: 8, valor: 0 },
      { indice: 9, valor: 0 },
      { indice: 10, valor: 0 },
      { indice: 11, valor: 1 },
      { indice: 12, valor: 1 },
      { indice: 13, valor: 1 },
      { indice: 14, valor: 0 },
      { indice: 15, valor: 1 },
      { indice: 16, valor: 1 },
    ];

    const estacaoTrabalho: IObterEstacaoTrabalho = {
      matriz,
      estados,
    };

    return estacaoTrabalho;
  }

  public async tratarObjetoEstacaoTrabalho(): Promise<IEstacaoTrabalho[][]> {
    const estacoesTrabalhos = await this.obterDadosBackEnd();
    await this.delay(1000);

    return estacoesTrabalhos.matriz[0].map((row: any, index: number) => {
      return estacoesTrabalhos.matriz.map(column => {
        const estacaoTrabalho: IEstacaoTrabalho = {
          ocupado:
            column[index] < 1
              ? null
              : this.procurarEstadoCadeira(
                  estacoesTrabalhos.estados,
                  column[index],
                ),
          color: this.definirCor(estacoesTrabalhos.estados, column[index]),
          elemento: this.definirElemento(column[index]),
          indiceCadeira: this.definirIndiceCadeira(column[index]),
        };

        return estacaoTrabalho;
      });
    });
  }

  // TODO Remover Delay
  private delay(delayInms: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  private definirIndiceCadeira(indice: number): number | null {
    return indice > 0 ? indice : null;
  }

  private definirElemento(indice: number): 'cadeira' | 'mesa' | null {
    if (indice > 0) {
      return 'cadeira';
    }
    if (indice === 0) {
      return 'mesa';
    }
    return null;
  }

  private procurarEstadoCadeira(
    estadoCadeira: IEstado[],
    indice: number,
  ): number | null {
    const estadoCadeiraValor = estadoCadeira.find(
      e => e.indice === indice,
    )?.valor;
    return estadoCadeiraValor === -1 ||
      estadoCadeiraValor === undefined ||
      estadoCadeiraValor === null
      ? null
      : estadoCadeiraValor;
  }

  private definirCor(estadoCadeira: IEstado[], indice: number): string {
    if (indice === 0) {
      return COLORS.BLACK.DARK;
    }
    if (indice > 0) {
      if (estadoCadeira.find(e => e.indice === indice)?.valor === 0) {
        return COLORS.GREEN.CARIBBEAN;
      }
      if (estadoCadeira.find(e => e.indice === indice)?.valor === 1) {
        return COLORS.RED.SALMON;
      }
    }
    return COLORS.WHITE.DEFAULT;
  }
}

export default new PainelEstacaoTrabalhoService();
