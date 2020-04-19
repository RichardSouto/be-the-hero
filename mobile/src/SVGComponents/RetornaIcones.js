import * as React from 'react';
import Svg, { Path } from "react-native-svg";

const iconesCadastrados = {
    folhaPrimaria: {
      viewBox: "0 0 179.393 182.834",
      codigoIcone: "M72.256 167.923s-39.063-30.15-37.003-66.192 34.8 17.436 34.8 17.436S39.986 62.886 49.85 38.86 87.607 62.383 93.09 76.975s-15.58-60.888 9.29-67.966 23.17 74.11 23.17 74.11l1.98 65.49z",
      colorFill: "#bd1010"  
    },
    folhaSecundaria: {
        viewBox: "0 0 185.339 184.473",
        codigoIcone: "M95.306 170.732s-45.511-19.009-52.842-54.34 38.108 7.836 38.108 7.836S36.99 77.662 40.301 51.914s42.536 12.95 51.603 25.62S61.118 22.775 83.3 9.51s41.534 65.562 41.534 65.562l18.845 62.72z",
        colorFill: "#e41212"
    },
    nuvem: {
        viewBox: "0 0 169.598 48.837",
        codigoIcone: "M49.22 48.837h120.377s-1.029-44.241-47.842-33.953c-10.8-18.005-44.241-18.52-54.53-7.717-20.063-1.029-38.583-.514-54.53 20.577S.345 48.837.345 48.837z",
        colorFill:"#fff"
    }
}

function RetornaIcone(props) {
    const colorFill = props.colorFill ?? iconesCadastrados[props.nomeIcone].colorFill;
    
  return (
    <Svg viewBox={iconesCadastrados[props.nomeIcone].viewBox} width={props.width ?? 180.339} height={props.height ?? 180.473} {...props}>
      <Path
        data-name={props.nomeIcone}
        d={iconesCadastrados[props.nomeIcone].codigoIcone}
        fill={colorFill}
        opacity={props.opacidade ?? 1.0}
      />
    </Svg>
  );
}

export default RetornaIcone;

