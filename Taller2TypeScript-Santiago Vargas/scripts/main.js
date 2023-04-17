import { series } from './data.js';
function insertSeries(series) {
    var tbody = document.getElementById('series');
    series.map(function (s) {
        var tr = document.createElement('tr');
        tr.classList.add('CadaSerie'); // Agrega la clase 'CadaSerie' a los elementos 'tr'
        var html = "<td> <b>".concat(s.id, "</b> </td>\n                              <td> ").concat(s.titulo, "</a> </td>\n                              <td> ").concat(s.productora, " </td>\n                              <td> ").concat(s.no_temporadas, " </td>");
        tr.innerHTML = html;
        tbody.appendChild(tr);
        for (var i = 0; i < tbody.children.length; i++) {
            tbody.children[i].classList.add('table-row');
        }
    });
}
function insertPromedio(series) {
    var total = 0;
    series.map(function (s) { total += s.no_temporadas; });
    var avrg = total / series.length;
    var promedioContainer = document.getElementById('promedio-container');
    var html = '<p>Seasons average: ' + avrg + '</p>';
    promedioContainer.innerHTML = html;
}
function mostrarInformacion(series) {
    var filasSeries = document.querySelectorAll('tr.CadaSerie');
    var informacionContainer = document.getElementById('informacion');
    var _loop_1 = function (i) {
        filasSeries[i].addEventListener('click', function () {
            var html = "\n          <div class=\"card\" style=\"width: 450px;\">\n            <img class=\"card-img-top\" src=".concat(series[i].logo, " style=\"width: 100%;\">\n            <div class=\"card-body\" style=\"word-wrap: break-word;\">\n              <h5 class=\"card-title\">").concat(series[i].titulo, "</h5>\n              <p class=\"card-text\" >\n                ").concat(series[i].descripcion, "<br><br>\n                <a href=").concat(series[i].link, ">").concat(series[i].link, "</a>\n                <br><br>\n              </p>\n            </div>\n          </div>");
            informacionContainer.innerHTML = html;
        });
    };
    for (var i = 0; i < filasSeries.length; i++) {
        _loop_1(i);
    }
}
insertSeries(series);
insertPromedio(series);
mostrarInformacion(series);
