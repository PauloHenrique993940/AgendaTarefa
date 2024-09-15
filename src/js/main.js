$(document).ready(function() {
    $('#inCadastrar').click(function() {
        const tarefa = $('#inTarefa').val().trim();  

        if (tarefa !== '') {
            // Cria um novo elemento <li> para a tarefa
            const novaTarefaElemento = $('<li>');

            // Cria um elemento <span> para exibir o nome da tarefa
            const nomeTarefa = $('<span>').text(tarefa);

            // Adiciona um evento de clique para riscar a tarefa
            nomeTarefa.click(function() {
                $(this).toggleClass('riscado'); // Adiciona ou remove a classe "riscado"
            });

            // Adiciona um botão para remover a tarefa
            const botaoRemover = $('<button>').text('Remover').addClass('btn-remover');

            // Quando o botão for clicado, remove a tarefa
            botaoRemover.click(function() {
                $(this).parent().remove();
            });

            // Anexa o nome da tarefa e o botão de remover ao <li>
            novaTarefaElemento.append(nomeTarefa).append(botaoRemover);

            // Adiciona o <li> à lista de tarefas
            $('#listaTarefas').append(novaTarefaElemento);

            // Limpa o campo de entrada após cadastrar a tarefa
            $('#inTarefa').val('');
        } else {
            alert('Por favor, insira uma tarefa válida.');
        }
    });
});



