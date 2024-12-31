$(document).ready(function () {
    // Ao submeter o formulário
    $("#task-form").submit(function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Pega o valor do campo de entrada
        const task = $("#task-input").val();

        // Adiciona a tarefa na lista
        if (task) {
            $("#task-list").append(`<li>${task}</li>`);
            $("#task-input").val(""); // Limpa o campo
        }
    });

    // Ao clicar em um item da lista, aplica ou remove o efeito de "line-through"
    $("#task-list").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});