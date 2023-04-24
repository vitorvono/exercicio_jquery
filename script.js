$(document).ready(function () {
  $("#lista-tarefas li").on("click", function () {
    $(this).toggleClass("tarefa-concluida");
  });
  $("form").submit(function (e) {
    e.preventDefault();

    const novaTarefa = $("#nova-tarefa").val();
    const novaPendencia = $(`<li>${novaTarefa}</li>`);
    novaPendencia.appendTo("#lista-tarefas");

    $("#nova-tarefa").val("");

    novaPendencia.on("click", function () {
      $(this).toggleClass("tarefa-concluida");
    });
  });
});
