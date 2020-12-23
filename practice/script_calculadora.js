function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            // limpar o visor id resultado
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ) {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            // efetua o cálculo matemático
            var valor_resultado = eval(document.getElementById('resultado').value) // eval transforma a string em uma operação nativa javascript

            document.getElementById('resultado').value = valor_resultado   

        }

    } else if (tipo === 'valor') {
        
        document.getElementById('resultado').value += valor
    }
}