document.getElementById('square-option').addEventListener('click', function() {
    showCalculator('Persegi', true);
});

document.getElementById('rectangle-option').addEventListener('click', function() {
    showCalculator('Persegi Panjang', false);
});

document.getElementById('calculate').addEventListener('click', function() {
    calculate();
});

function showCalculator(shape, isSquare) {
    document.getElementById('shape-title').innerText = shape;
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('width-label').style.display = isSquare ? 'none' : 'block';
    document.getElementById('width').style.display = isSquare ? 'none' : 'block';
    document.getElementById('calculator').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden'); // Sembunyikan hasil sebelumnya
}

function calculate() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value) || length; // Jika persegi, lebar sama dengan panjang
    let area, perimeter;
}
    if (isNaN(length) || (width !== undefined && isNaN(width))) {
        alert("Silakan masukkan angka yang valid.");
   
    }