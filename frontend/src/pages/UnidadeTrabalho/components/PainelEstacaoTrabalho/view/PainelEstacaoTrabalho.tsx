/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { toast } from 'react-toastify';
import PainelEstacaoTrabalhoService, {
  IEstacaoTrabalho,
} from '../../../services/PainelEstacaoTrabalhoService';
import { COLORS } from '../../../../../config/material.theme';

function PainelEstacaoTrabalho() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [estacoesTrabalho, setEstacoesTrabalho] = useState<
    IEstacaoTrabalho[][] | null
  >(null);
  const [quantidadeElementosLinha, setQuantidadeElementosLinha] =
    useState<number>(0);
  const [quantidadeElementosColuna, setQuantidadeElementosColuna] =
    useState<number>(0);
  const [assentoSelecionado, setAssentoSelecionado] = useState<number | null>(
    null,
  );

  async function obterDadosEstacoesTrabalho() {
    setLoading(true);
    const dados =
      await PainelEstacaoTrabalhoService.tratarObjetoEstacaoTrabalho();
    setEstacoesTrabalho(dados);
    setQuantidadeElementosLinha(dados[0].length);
    setQuantidadeElementosColuna(dados.length);
    setLoading(false);
  }

  function selecionarAssento(estacaoTrabalho: IEstacaoTrabalho) {
    if (
      estacaoTrabalho.indiceCadeira !== null &&
      estacaoTrabalho.indiceCadeira !== undefined &&
      estacaoTrabalho.ocupado !== 1
    )
      setAssentoSelecionado(estacaoTrabalho.indiceCadeira);

    if (
      estacaoTrabalho.indiceCadeira !== null &&
      estacaoTrabalho.indiceCadeira !== undefined &&
      estacaoTrabalho.ocupado === 1
    )
      toast.error('Este assento está ocupado, tente outro.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }

  function definirCorAtivo(estacaoTrabalho: IEstacaoTrabalho) {
    if (
      estacaoTrabalho.ocupado === 0 &&
      estacaoTrabalho.elemento === 'cadeira' &&
      estacaoTrabalho.indiceCadeira === assentoSelecionado
    ) {
      return COLORS.BLUE.CYAN;
    }
    return estacaoTrabalho.color;
  }

  useEffect(() => {
    obterDadosEstacoesTrabalho();
  }, []);

  return loading ? (
    <Skeleton variant="rect" width="100%" height="100%" />
  ) : (
    <>
      <Box className={classes.container}>
        {estacoesTrabalho !== null && estacoesTrabalho !== undefined ? (
          <tbody>
            {estacoesTrabalho.map((linha, index) => (
              <tr key={index}>
                {estacoesTrabalho.map((coluna, idx) => (
                  <td
                    key={idx}
                    onClick={() =>
                      coluna[index]?.indiceCadeira !== null &&
                      coluna[index]?.indiceCadeira !== undefined
                        ? selecionarAssento(coluna[index])
                        : ''
                    }
                    style={{
                      color: COLORS.WHITE.DEFAULT,
                      textAlign: 'center',
                      backgroundColor:
                        coluna[index]?.color === undefined
                          ? COLORS.WHITE.DEFAULT
                          : definirCorAtivo(coluna[index]),
                      width: `calc(906px/${quantidadeElementosLinha})`,
                      height: `calc(325px/${quantidadeElementosColuna})`,
                      borderColor: COLORS.WHITE.DEFAULT,
                      borderStyle:
                        coluna[index]?.elemento === 'cadeira'
                          ? 'solid'
                          : 'none',
                      cursor:
                        coluna[index]?.elemento === 'cadeira'
                          ? 'pointer'
                          : 'default',
                    }}
                  >
                    {coluna[index]?.indiceCadeira === undefined ||
                    coluna[index]?.indiceCadeira === null
                      ? null
                      : coluna[index].indiceCadeira}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </Box>
      <Box className={classes.containerRodape}>
        {assentoSelecionado !== null && assentoSelecionado !== undefined
          ? `Estação selecionada de número: ${assentoSelecionado}`
          : ''}
      </Box>
    </>
  );
}
const useStyles = makeStyles({
  container: {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  containerRodape: {
    paddingLeft: '5px',
    height: '20%',
    width: '100%',
  },
});

export default PainelEstacaoTrabalho;
