import { Serie } from './serie.js'; 
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    let tbody: HTMLElement = document.getElementById('series')!;
    series.map(s => {
        let tr: HTMLElement = document.createElement('tr');
        tr.classList.add('CadaSerie'); // Agrega la clase 'CadaSerie' a los elementos 'tr'
        let html: string = `<td> <b>${s.id}</b> </td>
                              <td> ${s.titulo}</a> </td>
                              <td> ${s.productora} </td>
                              <td> ${s.no_temporadas} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
        for (let i = 0; i < tbody.children.length; i++) {
            tbody.children[i].classList.add('table-row');
        }
    });
}

function insertPromedio(series: Serie[]): void {
    let total: number = 0;
    series.map(s => {total += s.no_temporadas});
    const avrg: number = total / series.length;
    let promedioContainer: HTMLElement = document.getElementById('promedio-container')!;
    const html: string = '<p>Seasons average: '+avrg+'</p>'
    promedioContainer.innerHTML = html;
}

function mostrarInformacion(series: Serie[]): void {
    const filasSeries: NodeList = document.querySelectorAll('tr.CadaSerie');
    let informacionContainer: HTMLElement = document.getElementById('informacion')!;
  
    for(let i: number = 0; i < filasSeries.length; i++) {
      filasSeries[i].addEventListener('click', function() {
        const html: string = `
          <div class="card" style="width: 450px;">
            <img class="card-img-top" src=${series[i].logo} style="width: 100%;">
            <div class="card-body" style="word-wrap: break-word;">
              <h5 class="card-title">${series[i].titulo}</h5>
              <p class="card-text" >
                ${series[i].descripcion}<br><br>
                <a href=${series[i].link}>${series[i].link}</a>
                <br><br>
              </p>
            </div>
          </div>`;
        informacionContainer.innerHTML = html;
      });
    }
  }
  
  
  
  
insertSeries(series);
insertPromedio(series);
mostrarInformacion(series); 