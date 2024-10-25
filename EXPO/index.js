let band1 = 0, band2 = 0, multiplier = 1, tolerance = "N/A";
let selectedBand = 'band1'; // Banda seleccionada por defecto

// Información de colores: valor y tolerancia
const colorInfo = [
    { value: 0, multiplier: null, tolerance: null },      // Negro
    { value: 1, multiplier: 10, tolerance: "±1%" },       // Marrón
    { value: 2, multiplier: 100, tolerance: "±2%" },      // Rojo
    { value: 3, multiplier: 1000, tolerance: null },      // Naranja
    { value: 4, multiplier: 10000, tolerance: null },       // Amarillo
    { value: 5, multiplier: 100000, tolerance: "±0.5%" }, // Verde
    { value: 6, multiplier: 1000000, tolerance: "±0.25%" }, // Azul
    { value: 7, multiplier: 10000000, tolerance: "±0.1%" }, // Violeta
    { value: 8, multiplier: null, tolerance: null },       // Gris
    { value: 9, multiplier: null, tolerance: null },       // Blanco
    { value: null, multiplier: null, tolerance: "±5%" },   // Oro
    { value: null, multiplier: null, tolerance: "±10%" },  // Plata
];

function selectColor(colorIndex, isTolerance = false) {
    if (isTolerance && (colorIndex < 10 || colorIndex > 11)) {
        return; // No cambiar color si no es válido
    }

    if (selectedBand === 'band1') {
        band1 = colorIndex;
        document.getElementById('band1Resistor').className = 'band band1 color-' + colorIndex;
    } else if (selectedBand === 'band2') {
        band2 = colorIndex;
        document.getElementById('band2Resistor').className = 'band band2 color-' + colorIndex;
    } else if (selectedBand === 'multiplier') {
        multiplier = colorInfo[colorIndex].multiplier;
        document.getElementById('multiplierResistor').className = 'band multiplier color-' + colorIndex;
    } else if (selectedBand === 'tolerance') {
        tolerance = colorInfo[colorIndex].tolerance;
        document.getElementById('toleranceResistor').className = 'band tolerance color-' + colorIndex;
    }
}

function updateSelectedBand() {
    const selectElement = document.getElementById('band-selector');
    selectedBand = selectElement.value;
}

function calculate() {
    const resistanceValue = (band1 * 10 + band2) * (multiplier || 1);
    const toleranceValue = tolerance || "N/A";
    const resultText = `Valor de resistencia: ${resistanceValue} Ω con una tolerancia de ${toleranceValue}`;
    document.getElementById('result').innerText = resultText;
}
