import logo from "./logo.svg";
import "./App.css";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import React from "react";
import ImportarJson from "./ImpotarJson";
import {useState } from 'react';

import './App.css';

function EleccionDeVariables() {
const [Indicador, setIndicador] = useState("");
const [Año, setAño] = useState("");
const [Mes, setMes] = useState("");

const onChangeIndicador = function (valor) {
    setIndicador(valor.target.value);
};

const onChangeAño = function (valor) {
    setAño(valor.target.value);
};

const onChangeMes = function (valor) {
    setMes(valor.target.value);
};



return (

    <div className="eleccionDeVariables">
        <button>Indicador</button>
        <select href="#" class="button" onChange={onChangeIndicador}>
            <option value="Unidad de fomento UF ">Unidad de fomento UF</option>  
            <option value="Bitcoin ">Bitcoin</option>
            <option value="Dólar acuerdo ">Dólar acuerdo</option>
            <option value="Dólar observado ">Dólar observado</option>
            <option value="Euro ">Euro</option>
            <option value="Imacec ">Imacec</option>
            <option value="Indice de Precios al Consumidor IPC ">Indice de Precios al Consumidor IPC</option>
            <option value="Indice de valor promedio IVP ">Indice de valor promedio IVP
            </option>
            <option value="Libra de Cobre ">Libra de Cobre</option>
            <option value="Tasa de desempleo ">Tasa de desempleo</option>
            <option value="Tasa Política Monetaria TPM ">Tasa Política Monetaria TPM
            </option>
            <option value="Unidad de fomento UF ">Unidad de fomento UF</option>
            <option value="Unidad Tributaria Mensual UTM ">Unidad Tributaria Mensual UTM</option>
        </select>

        <button>Año</button>
        <select href="#" class="button" onChange={onChangeAño}>
            <option value="2022">2022</option>   
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>

        </select>
        
        <button>  Mes  </button>           
        <select href="#" class="button" onChange={onChangeMes}>
            <option value="Enero">1</option>
            <option value="Febrero">2</option>
            <option value="Marzo">3</option>
            <option value="Abril">4</option>
            <option value="Mayo">5</option>
            <option value="Junio">6</option>
            <option value="Julio">7</option>
            <option value="Agosto">8</option>
            <option value="Septiembre">9</option>
            <option value="Octubre">10</option>
            <option value="Noviembre">11</option>
            <option value="Diciembre">12</option>
        </select>

        <span>{" " + Indicador + " , "}</span>
        <span>{"  de  " + Año}</span>
        <span>{", mes " + Mes}</span>

        <div>
            <body>
                <p> Valores en pesos </p>

                <script>
                    var h1 = document.getElementsByTagName('h1')[0];
                    h1.innerHTML = '<span>' + h1.innerHTML.split('').join('</span><span>') + '</span>';
                </script>
            </body>

        </div>
        <LineChart />

    </div>



);
}

export default EleccionDeVariables;
        








//function App() {

//    return (EleccionDeVariables);
//}

//export default EleccionDeVariables;
