function adicionar(){
    var tarefas = window.document.getElementById('tarefa');
    var tTarefas = [ tarefas.value];
    var res = window.document.getElementById('div#res');
    res.innerHTML = `<p>${tTarefas}</p>`;
}