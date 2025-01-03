/*
 * title="HiBO"
 * version="1.7.3"
 * date="29/10/2024"
 * author="Moser Silva Fagundes"
 *
 * This file is part of HiBO (is the past named HBO).
 *
 * HiBO is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HiBO is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HiBO.  If not, see <https://www.gnu.org/licenses/>.
 */

$(function () {
  $('[data-toggle="popover"]').popover({ html: true, container: "body" });
});

$("html").on("mouseup", function (e) {
  var l = $(e.target);
  if (l[0].className.indexOf("popover") == -1) {
    $(".popover").each(function () {
      $(this).popover("hide");
    });
  }
});

const numerosPorExtenso = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte",
  "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove",
  "trinta", "trinta e um", "trinta e dois", "trinta e três", "trinta e quatro", "trinta e cinco", "trinta e seis", "trinta e sete", "trinta e oito", "trinta e nove",
  "quarenta", "quarenta e um", "quarenta e dois", "quarenta e três", "quarenta e quatro", "quarenta e cinco", "quarenta e seis", "quarenta e sete", "quarenta e oito", "quarenta e nove",
  "cinquenta", "cinquenta e um", "cinquenta e dois", "cinquenta e três", "cinquenta e quatro", "cinquenta e cinco", "cinquenta e seis", "cinquenta e sete", "cinquenta e oito", "cinquenta e nove",
  "sessenta", "sessenta e um", "sessenta e dois", "sessenta e três", "sessenta e quatro", "sessenta e cinco", "sessenta e seis", "sessenta e sete", "sessenta e oito", "sessenta e nove",
  "setenta", "setenta e um", "setenta e dois", "setenta e três", "setenta e quatro", "setenta e cinco", "setenta e seis", "setenta e sete", "setenta e oito", "setenta e nove",
  "oitenta", "oitenta e um", "oitenta e dois", "oitenta e três", "oitenta e quatro", "oitenta e cinco", "oitenta e seis", "oitenta e sete", "oitenta e oito", "oitenta e nove",
  "noventa", "noventa e um", "noventa e dois", "noventa e três", "noventa e quatro", "noventa e cinco", "noventa e seis", "noventa e sete", "noventa e oito", "noventa e nove",
  "cem"
];


$("#divOrgaoSP").hide();
$("#divOutroRelacionamento").hide();
$("#divTempoSeparados").hide();
$("#divLocalResidencia").hide();
$("#divProle").hide();
$("#spanRemoverProle").hide();
$("#divAtendimento").hide();
$("#divLocalAtendimento").hide();
$("#divTestemunha").hide();
$("#spanRemoverTestemunha").hide();
$("#divAcaoPrivada").hide();
$("#divOutrosVicios").hide();
$("#divPossuiArmasSim").hide();
$("#divRelacoesSexuais").hide();
$("#divViolenciaGraveAmeaca").hide();
$("#divRelacoesSexuaisNaoSabe").hide();
$("#divDeficiente").hide();
$("#divEntregouMidia").hide();
$("#divTipoMidia").hide();
$("#divLocalMidia").hide();
$("#divHistorico").hide();
$("#divTermo").hide();

$("#aDadosVitima").hide();
$("#aTempoRelacionamento").hide();
$("#aOutroRelacionamento").hide();
$("#aLocalResidencia").hide();
$("#aListaProle").hide();
$("#aConduta").hide();
$("#aLocalAtendimento").hide();
$("#aListaTestemunhas").hide();
$("#aAcaoPrivada").hide();
$("#aParadeiro").hide();
$("#aOutrosVicios").hide();
$("#aTipoMidia").hide();
$("#aLocalMidia").hide();
$("#aPossuiArmasSim").hide();
$("#aRelacoesSexuais").hide();
$("#aRelacoesSexuaisNaoSabe").hide();
$("#aQuandoOnde").hide();
$("#aOutrosHistorico").hide();
$("#aOutrosHistoricoFoneEmail").hide();

$("#rOrgaoSPN").click(function () {
  $("#divOrgaoSP").hide();
});

$("#rOrgaoSPS").click(function () {
  $("#divOrgaoSP").show();
});

$("#rRelacionamento1").click(function () {
  const optionDesde = document.createElement("option");
  optionDesde.setAttribute("value", "desde");
  const optionDesdeContent = document.createTextNode("desde");
  optionDesde.append(optionDesdeContent);

  const optionHa = document.createElement("option");
  optionHa.setAttribute("value", "há");
  const optionHaContent = document.createTextNode("há");
  optionHa.append(optionHaContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionDesde);
  $("#sTempoRelacionamento").append(optionHa);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").hide();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Desde quando vivem em união estável?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // desde
  $("#iTempoRelacionamento").attr("placeholder", "janeiro de 2019");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento1-Ex").click(function () {
  const optionPor = document.createElement("option");
  optionPor.setAttribute("value", "por");
  const optionPorContent = document.createTextNode("por");
  optionPor.append(optionPorContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionPor);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").show();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Por quanto tempo viveram em união estável?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // por
  $("#iTempoRelacionamento").attr("placeholder", "cinco anos");

  $("#lTempoSeparados").text("Há quanto tempo estão separados? ");
  $("#sTempoSeparados").prop("selectedIndex", 1); // há
  $("#iTempoSeparados").attr("placeholder", "dois meses");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento2").click(function () {
  const optionDesde = document.createElement("option");
  optionDesde.setAttribute("value", "desde");
  const optionDesdeContent = document.createTextNode("desde");
  optionDesde.append(optionDesdeContent);

  const optionHa = document.createElement("option");
  optionHa.setAttribute("value", "há");
  const optionHaContent = document.createTextNode("há");
  optionHa.append(optionHaContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionDesde);
  $("#sTempoRelacionamento").append(optionHa);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").hide();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Desde quando estão casados?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // desde
  $("#iTempoRelacionamento").attr("placeholder", "janeiro de 2019");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento2-Ex").click(function () {
  const optionPor = document.createElement("option");
  optionPor.setAttribute("value", "por");
  const optionPorContent = document.createTextNode("por");
  optionPor.append(optionPorContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionPor);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").show();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Por quanto tempo foram casados?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // por
  $("#iTempoRelacionamento").attr("placeholder", "cinco anos");

  $("#lTempoSeparados").text("Há quanto tempo estão separados? ");
  $("#sTempoSeparados").prop("selectedIndex", 1); // há
  $("#iTempoSeparados").attr("placeholder", "dois meses");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento4").click(function () {
  const optionDesde = document.createElement("option");
  optionDesde.setAttribute("value", "desde");
  const optionDesdeContent = document.createTextNode("desde");
  optionDesde.append(optionDesdeContent);

  const optionHa = document.createElement("option");
  optionHa.setAttribute("value", "há");
  const optionHaContent = document.createTextNode("há");
  optionHa.append(optionHaContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionDesde);
  $("#sTempoRelacionamento").append(optionHa);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").hide();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Desde quando estão namorando?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // desde
  $("#iTempoRelacionamento").attr("placeholder", "janeiro de 2019");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento4-Ex").click(function () {
  const optionPor = document.createElement("option");
  optionPor.setAttribute("value", "por");
  const optionPorContent = document.createTextNode("por");
  optionPor.append(optionPorContent);

  $("#sTempoRelacionamento").empty();
  $("#sTempoRelacionamento").append(optionPor);

  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divTempoSeparados").show();
  $("#aOutroRelacionamento").hide();
  $("#aTempoRelacionamento").hide();

  $("#lTempoRelacionamento").text("Por quanto tempo foram namorados?");
  $("#sTempoRelacionamento").prop("selectedIndex", 0); // por
  $("#iTempoRelacionamento").attr("placeholder", "cinco anos");

  $("#lTempoSeparados").text("Há quanto tempo estão separados? ");
  $("#sTempoSeparados").prop("selectedIndex", 1); // há
  $("#iTempoSeparados").attr("placeholder", "dois meses");

  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#rRelacionamento3").click(function () {
  $("#divOutroRelacionamento").show();
  $("#divTempoRelacionamento").hide();
  $("#aTempoRelacionamento").hide();
  $("#divTempoSeparados").hide();
  $("#aTempoRelacionamento").hide();
  $("#taOutroRelacionamento").val("A vítima relata que sofreu violência praticada pelo ___");
  $("#taOutroRelacionamento").css("border-color", "#ced4da");
  $("#iTempoRelacionamento").css("border-color", "#ced4da");
  $("#iTempoSeparados").css("border-color", "#ced4da");
});

$("#sTempoSeparados").change(function () {
  let t = $("#sTempoSeparados option:selected").text();
  switch (t) {
    case "desde":
      $("#lTempoSeparados").text("Desde quando estão separados?");
      $("#iTempoSeparados").attr("placeholder", "janeiro de 2019");
      break;
    case "há":
      $("#lTempoSeparados").text("Há quanto tempo estão separados?");
      $("#iTempoSeparados").attr("placeholder", "dois meses");
      break;
  }
});

$("#sTempoRelacionamento").change(function () {
  let t = $("#sTempoRelacionamento option:selected").text();
  switch (t) {
    case "desde":
      $("#iTempoRelacionamento").attr("placeholder", "janeiro de 2019");
      if (
        $("#rRelacionamento1").is(":checked") ||
        $("#rRelacionamento1-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Desde quando vivem em união estável?");
      } else if (
        $("#rRelacionamento2").is(":checked") ||
        $("#rRelacionamento2-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Desde quando estão casados?");
      } else if (
        $("#rRelacionamento4").is(":checked") ||
        $("#rRelacionamento4-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Desde quando estão namorando?");
      }
      break;
    case "há":
      $("#iTempoRelacionamento").attr("placeholder", "dois anos");
      if (
        $("#rRelacionamento1").is(":checked") ||
        $("#rRelacionamento1-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text(
          "Há quanto tempo vivem em união estável?"
        );
      } else if (
        $("#rRelacionamento2").is(":checked") ||
        $("#rRelacionamento2-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão casados?");
      } else if (
        $("#rRelacionamento4").is(":checked") ||
        $("#rRelacionamento4-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão namorando?");
      }
      break;
    case "por":
      $("#iTempoRelacionamento").attr("placeholder", "dez anos");
      if (
        $("#rRelacionamento1").is(":checked") ||
        $("#rRelacionamento1-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text(
          "Por quanto tempo viveram em união estável?"
        );
      } else if (
        $("#rRelacionamento2").is(":checked") ||
        $("#rRelacionamento2-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text("Por quanto tempo estiveram casados?");
      } else if (
        $("#rRelacionamento4").is(":checked") ||
        $("#rRelacionamento4-Ex").is(":checked")
      ) {
        $("#lTempoRelacionamento").text(
          "Por quanto tempo estiveram namorando?"
        );
      }
      break;
  }
});

$("#rMesmaResidenciaN").click(function () {
  $("#divLocalResidencia").hide();
  $("#iLocalResidencia").css("border-color", "#ced4da");
  $("#aLocalResidencia").hide();
});

$("#rMesmaResidenciaS").click(function () {
  $("#divLocalResidencia").show();
});

$("#rProleN").click(function () {
  $("#divProle").hide();
  $("#aListaProle").hide();
  let n = Number($("#divListaProle").children().length);
  for (let i = 1; i <= n; i++) {
    let label = "#divDadosProle-" + i;
    $(label + " #iNomeProle").css("border-color", "#ced4da");
    $(label + " #iIdadeProle").css("border-color", "#ced4da");
    $(label + " #sIdadeProle").css("border-color", "#ced4da");
    $(label + " #cOutroProle").css("border-color", "#ced4da");
    $(label + " #cJuntoProle").css("border-color", "#ced4da");
  }
});

$("#rProleS").click(function () {
  $("#divProle").show();
});

$("#spanAdicionarProle").click(function () {
  let last = $("#divListaProle").children().length;
  let divClone = $("#divDadosProle-" + last).clone();
  let n = $("#divListaProle").children().length + 1;
  let id = "divDadosProle-" + n;
  divClone.prop("id", id);
  divClone.appendTo("#divListaProle");

  let label = "#divDadosProle-" + n;
  $(label + " #iNomeProle").prop("value", "");
  $(label + " #iNomeProle").css("border-color", "#ced4da");
  $(label + " #iIdadeProle").prop("value", "");
  $(label + " #iIdadeProle").css("border-color", "#ced4da");
  $(label + " #sIdadeProle").css("border-color", "#ced4da");
  $(label + " #cOutroProle").css("border-color", "#ced4da");
  $(label + " #cJuntoProle").css("border-color", "#ced4da");

  if (n > 1) $("#spanRemoverProle").show();
});


$("#spanRemoverProle").click(function () {
  let id = "#divDadosProle-" + $("#divListaProle").children().length;
  $(id).remove();
  let n = $("#divListaProle").children().length;
  if (n == 1)  $("#spanRemoverProle").hide();
});



$("#rLesaoN").click(function () {
  $("#divAtendimento").hide();
  $("#aLocalAtendimento").hide();
});

$("#rLesaoS").click(function () {
  $("#divAtendimento").show();
});

$("#rAtendimentoN").click(function () {
  $("#divLocalAtendimento").hide();
  $("#iLocalAtendimento").css("border-color", "#ced4da");
  $("#aLocalAtendimento").hide();
});

$("#rAtendimentoS").click(function () {
  $("#divLocalAtendimento").show();
});


$("#rTestemunhaN").click(function () {
  $("#divTestemunha").hide();
  $("#aListaTestemunhas").hide();
  let n = Number($("#divListaTestemunhas").children().length);
  for (let i = 1; i <= n; i++) {
    let label = "#divDadosTestemunha-" + i;
    $(label + " #iNomeTestemunha").css("border-color", "#ced4da");
    $(label + " #iContatoTestemunha").css("border-color", "#ced4da");
  }
});

$("#rTestemunhaSQ").click(function () {
  $("#divTestemunha").hide();
  $("#aListaTestemunhas").hide();
  let n = Number($("#divListaTestemunhas").children().length);
  for (let i = 1; i <= n; i++) {
    let label = "#divDadosTestemunha-" + i;
    $(label + " #iNomeTestemunha").css("border-color", "#ced4da");
    $(label + " #iContatoTestemunha").css("border-color", "#ced4da");
  }
});

$("#rTestemunhaS").click(function () {
  $("#divTestemunha").show();
});

$("#spanAdicionarNovaTestemunha").click(function () {
  let divClone = $("#divDadosTestemunha-1").clone();
  let n = $("#divListaTestemunhas").children().length + 1;
  let id = "divDadosTestemunha-" + n;
  divClone.prop("id", id);
  divClone.appendTo("#divListaTestemunhas");

  let label = "#divDadosTestemunha-" + n;
  $(label + " #iNomeTestemunha").prop("value", "");
  $(label + " #iNomeTestemunha").css("border-color", "#ced4da");
  $(label + " #iContatoTestemunha").prop("value", "");
  $(label + " #iContatoTestemunha").css("border-color", "#ced4da");

  if (n > 1) {
    $("#spanRemoverTestemunha").show();
  }
});

$("#spanRemoverTestemunha").click(function () {
  let id = "#divDadosTestemunha-" + $("#divListaTestemunhas").children().length;
  $(id).remove();

  let n = $("#divListaTestemunhas").children().length;
  if (n == 1) {
    $("#spanRemoverTestemunha").hide();
  }
});

$("#rRepresentacaoPrivada").click(function () {
  $("#taAcaoPrivada").val(
    "A vítima fica ciente do prazo decadencial de seis meses para propor queixa-crime através de advogado no tocante às ___"
  );
  $("#divAcaoPrivada").show();
});

$("#rRepresentacaoIncondicionada").click(function () {
  $("#divAcaoPrivada").hide();
  $("#aAcaoPrivada").hide();
  $("#taAcaoPrivada").css("border-color", "#ced4da");
});

$("#rRepresentacaoCondicionadaSim").click(function () {
  $("#divAcaoPrivada").hide();
  $("#aAcaoPrivada").hide();
  $("#taAcaoPrivada").css("border-color", "#ced4da");
});

$("#rRepresentacaoCondicionadaNao").click(function () {
  $("#divAcaoPrivada").hide();
  $("#aAcaoPrivada").hide();
  $("#taAcaoPrivada").css("border-color", "#ced4da");
});




$("#cVicio6").click(function () {
  if ($("#cVicio6").is(":checked")) {
    $("#divOutrosVicios").show();
  } else {
    $("#divOutrosVicios").hide();
    $("#aOutrosVicios").hide();
    $("#iOutrosVicios").css("border-color", "#ced4da");
  }
});

$("#rRegistroMidiaN").click(function () {
  $("#divEntregouMidia").hide();
  $("#divTipoMidia").hide();
  $("#divLocalMidia").hide();
  $("#rEntregouMidiaS").prop("checked", true);
});

$("#rRegistroMidiaS").click(function () {
  $("#divEntregouMidia").show();
  $("#divTipoMidia").show();
  $("#divLocalMidia").hide();
});

$("#rEntregouMidiaN").click(function () {
  $("#divEntregouMidia").show();
  $("#divTipoMidia").show();
  $("#divLocalMidia").show();
});

$("#rEntregouMidiaS").click(function () {
  $("#divEntregouMidia").show();
  $("#divTipoMidia").show();
  $("#divLocalMidia").hide();
});



$("#rPossuiArmasN").click(function () {
  $("#divPossuiArmasSim").hide();
  $("#aPossuiArmasSim").hide();
  $("#taPossuiArmasSim").css("border-color", "#ced4da");
});

$("#rPossuiArmasSim").click(function () {
  $("#taPossuiArmasSim").val(
    "A vítima informou que o suspeito possui ou mantém em sua posse ___ arma(s) de fogo, e que são armazenadas em ___"
  );

  $("#divPossuiArmasSim").show();
  $("#aPossuiArmasSim").hide();
  $("#taPossuiArmasSim").css("border-color", "#ced4da");
});

$("#rPossuiArmasNS").click(function () {
  $("#divPossuiArmasSim").hide();
  $("#aPossuiArmasSim").hide();
  $("#taPossuiArmasSim").css("border-color", "#ced4da");
});



$("#rRelacoesSexuaisS").click(function () {
  $("#divRelacoesSexuaisNaoSabe").hide();
  $("#divRelacoesSexuais").show();
  $("#divViolenciaGraveAmeaca").show();

  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();

  $("#taRelacoesSexuais").css("border-color", "#ced4da");
  $("#aRelacoesSexuaisNaoSabe").css("border-color", "#ced4da");

  funcViolenciaGraveAmeaca();
});

$("#rRelacoesSexuaisN").click(function () {
  $("#divRelacoesSexuaisNaoSabe").hide();
  $("#divRelacoesSexuais").hide();
  $("#divViolenciaGraveAmeaca").hide();

  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();

  $("#taRelacoesSexuais").css("border-color", "#ced4da");
  $("#aRelacoesSexuaisNaoSabe").css("border-color", "#ced4da");
});

$("#rRelacoesSexuaisNS").click(function () {
  $("#divRelacoesSexuais").hide();
  $("#divViolenciaGraveAmeaca").hide();
  $("#divRelacoesSexuaisNaoSabe").show();

  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();

  $("#taRelacoesSexuais").css("border-color", "#ced4da");
  $("#aRelacoesSexuaisNaoSabe").css("border-color", "#ced4da");

  $("#taRelacoesSexuaisNaoSabe").val(
    "Quando perguntada sobre ter sido obrigada a ter relações sexuais ou praticar atos sexuais contra a sua vontade, a vítima respondeu não saber. O motivo de não saber é ___"
  );
});

let funcViolenciaGraveAmeaca = function () {
  let text =
    "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito, sem violência ou grave ameaça. O fato ocorreu no ___";
  if ($("#cViolencia").is(":checked")) {
    if ($("#cGraveAmeaca").is(":checked")) {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante grave ameaça e violência. O fato ocorreu no ___";
    } else {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante violência. O fato ocorreu no ___";
    }
  } else if ($("#cGraveAmeaca").is(":checked")) {
    text =
      "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante grave ameaça. O fato ocorreu no ___";
  }

  $("#taRelacoesSexuais").val(text);
};

$("#cViolencia").click(funcViolenciaGraveAmeaca);

$("#cGraveAmeaca").click(funcViolenciaGraveAmeaca);

$("#rDeficienteN").click(function () {
  $("#divDeficiente").hide();
});

$("#rDeficienteS1").click(function () {
  $("#divDeficiente").show();
});

$("#rDeficienteS2").click(function () {
  $("#divDeficiente").show();
});

$("#rDeficienteS3").click(function () {
  $("#divDeficiente").show();
});

$("#sCidade").change(function () {
  if ($("#sCidade option:selected").index()) {
    $("#divBairro").hide();
  } else {
    $("#divBairro").show();
  }
});

$("#btnGerar").click(function () {
  // LIMPA O HISTORICO E O TERMO
  $("#taHistorico").text("");
  $("#taTermo").text("");

  // VERIFICA OS CAMPOS OBRIGATORIOS E MARCADOS
  let ok = null;
  ok = verificaDadosVitima(ok);
  ok = verificaCamposRelacionamento(ok);
  ok = verificaCamposMesmaResidencia(ok);
  ok = verificaCamposConduta(ok);
  ok = verificaCamposProle(ok);
  ok = verificaLesaoAtendimento(ok);
  ok = verificaCamposTestemunhas(ok);
  ok = verificaCamposAcaoPenal(ok);
  ok = verificaCamposPossuiArmas(ok);
  ok = verificaCamposRelacoesSexuais(ok);
  ok = verificaCamposParadeiro(ok);
  ok = verificaCamposVicios(ok);
  ok = verificaCamposMidias(ok);
  ok = verificaCamposOrientacoesHistorico(ok);

  if (ok) {
    $("#divHistorico").hide();
    $("#divTermo").hide();
    document.getElementById(ok).scrollIntoView();
    return false;
  }

  // *******************************************
  // GERA OS PARAGRAFOS DO HISTORICO
  // *******************************************
  if (localStorage.getItem("settingHistorico1") === "true")
    $("#taHistorico").append(criaParagrafoOrgao()); // 1-2
  if (localStorage.getItem("settingHistorico3") === "true")
    $("#taHistorico").append(criaParagrafoRelacionamento(false)); // 3
  if (localStorage.getItem("settingHistorico4") === "true")
    $("#taHistorico").append(criaParagrafoMesmaResidencia()); // 4
  if (localStorage.getItem("settingHistorico5") === "true")
    $("#taHistorico").append(criaParagrafoProle()); // 5
  if (localStorage.getItem("settingHistorico6") === "true")
    $("#taHistorico").append(criaParagrafoConduta()); // 6
  if (localStorage.getItem("settingHistorico7") === "true")
    $("#taHistorico").append(criaParagrafoLesaoAtendimento()); // 7
  if (localStorage.getItem("settingHistorico8") === "true")
    $("#taHistorico").append(criaParagrafoTestemunhas()); // 8
  if (localStorage.getItem("settingHistorico9") === "true")
    $("#taHistorico").append(criaParagrafoAcaoPenal()); // 9
  if (localStorage.getItem("settingHistorico10") === "true")
    $("#taHistorico").append(criaParagrafoMedidasProtetivas()); // 10
  if (localStorage.getItem("settingHistorico11") === "true")
    $("#taHistorico").append(criaParagrafoPossuiArmas()); // 11
  if (localStorage.getItem("settingHistorico12") === "true")
    $("#taHistorico").append(criaParagrafoArmas()); // 12
  if (localStorage.getItem("settingHistorico13") === "true")
    $("#taHistorico").append(criaParagrafoRelacoesSexuais()); // 13
  if (localStorage.getItem("settingHistorico14") === "true")
    $("#taHistorico").append(criaParagrafoOcorrenciaSuspeito()); // 14
  if (localStorage.getItem("settingHistorico15") === "true")
    $("#taHistorico").append(criaParagrafoParadeiro()); // 15
  if (localStorage.getItem("settingHistorico16") === "true")
    $("#taHistorico").append(criaParagrafoVicios()); // 16
  if (localStorage.getItem("settingHistorico17") === "true")
    $("#taHistorico").append(criaParagrafoMidias()); // 17
  if (localStorage.getItem("settingHistorico18") === "true")
    $("#taHistorico").append(criaParagrafoDependencia()); // 18
  if (localStorage.getItem("settingHistorico19") === "true")
    $("#taHistorico").append(criaParagrafoDeficiencia()); // 19
  if (localStorage.getItem("settingHistorico20") === "true")
    $("#taHistorico").append(criaParagrafoAbrigo()); // 20
  if (localStorage.getItem("settingHistorico21") === "true")
    $("#taHistorico").append(criaParagrafoBuscaPertences()); // 21
  if (localStorage.getItem("settingHistorico22") === "true")
    $("#taHistorico").append(criaParagrafoOrientacoesHistorico()); // 22

  // *******************************************
  // GERA OS PARAGRAFOS DO TERMO DE INFORMAÇÕES
  // *******************************************
  if (localStorage.getItem("settingTermo1") === "true")
    $("#taTermo").append(criaParagrafoOrgao()); // 1
  if (localStorage.getItem("settingTermo3") === "true")
    $("#taTermo").append(criaParagrafoRelacionamento(true)); // 3
  if (localStorage.getItem("settingTermo4") === "true")
    $("#taTermo").append(criaParagrafoMesmaResidencia()); // 4
  if (localStorage.getItem("settingTermo5") === "true")
    $("#taTermo").append(criaParagrafoProle()); // 5
  if (localStorage.getItem("settingTermo6") === "true")
    $("#taTermo").append(criaParagrafoConduta()); // 6
  if (localStorage.getItem("settingTermo7") === "true")
    $("#taTermo").append(criaParagrafoLesaoAtendimento()); // 7
  if (localStorage.getItem("settingTermo8") === "true")
    $("#taTermo").append(criaParagrafoTestemunhas()); // 8
  if (localStorage.getItem("settingTermo9") === "true")
    $("#taTermo").append(criaParagrafoAcaoPenal()); // 9
  if (localStorage.getItem("settingTermo10") === "true")
    $("#taTermo").append(criaParagrafoMedidasProtetivas()); // 10
  if (localStorage.getItem("settingTermo11") === "true")
    $("#taTermo").append(criaParagrafoPossuiArmas()); // 11
  if (localStorage.getItem("settingTermo12") === "true")
    $("#taTermo").append(criaParagrafoArmas()); // 12
  if (localStorage.getItem("settingTermo13") === "true")
    $("#taTermo").append(criaParagrafoRelacoesSexuais()); // 13
  if (localStorage.getItem("settingTermo14") === "true")
    $("#taTermo").append(criaParagrafoOcorrenciaSuspeito()); // 14
  if (localStorage.getItem("settingTermo15") === "true")
    $("#taTermo").append(criaParagrafoParadeiro()); // 15
  if (localStorage.getItem("settingTermo16") === "true")
    $("#taTermo").append(criaParagrafoVicios()); // 16
  if (localStorage.getItem("settingTermo17") === "true")
    $("#taTermo").append(criaParagrafoMidias()); // 17
  if (localStorage.getItem("settingTermo18") === "true")
    $("#taTermo").append(criaParagrafoDependencia()); // 18
  if (localStorage.getItem("settingTermo19") === "true")
    $("#taTermo").append(criaParagrafoDeficiencia()); // 19
  if (localStorage.getItem("settingTermo20") === "true")
    $("#taTermo").append(criaParagrafoAbrigo()); // 20
  if (localStorage.getItem("settingTermo21") === "true")
    $("#taTermo").append(criaParagrafoBuscaPertences()); // 21
  if (localStorage.getItem("settingTermo22") === "true")
    $("#taTermo").append(criaParagrafoOrientacoesHistorico()); // 22

  let maxTamanhoHistorico = 1804;
  let tamanhoHistorico = $("#taHistorico").val().length;

  if (tamanhoHistorico > maxTamanhoHistorico) {
    $("#divInfoHistorico").removeClass("text-primary");
    $("#divInfoHistorico").addClass("text-danger");
    $("#taHistorico").css("border-color", "red");
    let textInfoHistorico = `O histórico gerado tem <span class='font-weight-bold'>${tamanhoHistorico}</span> caracteres. `;
    textInfoHistorico += `<br>O tamanho máximo permitido pelo sistema SPJ é <span class='font-weight-bold'>${maxTamanhoHistorico}</span> caracteres.`;
    $("#divInfoHistorico").html(textInfoHistorico);
  } else {
    $("#divInfoHistorico").removeClass("text-danger");
    $("#divInfoHistorico").addClass("text-primary");
    $("#taHistorico").css("border-color", "#ced4da");
    let textInfoHistorico = `O histórico gerado tem ${tamanhoHistorico} caracteres. `;
    $("#divInfoHistorico").html(textInfoHistorico);
  }

  salvarOrientacoesHistorico();

  bootbox.confirm({
    message:
      "<h4>REVISE O TEXTO GERADO.</h4><p>Caso necessário, é possível realizar alterações diretamente na caixa de texto do histórico e do termo de informações.</p>",
    buttons: {
      confirm: {
        label: "OK",
        className: "btn-success",
      },
      cancel: {
        label: "Cancelar",
        className: "btn-danger",
      },
    },
    callback: async function (result) {
      if (result) {
        $("#divHistorico").show();
        $("#divTermo").show();
        document.getElementById("divHistorico").scrollIntoView();
      } else {
        $("#divHistorico").hide();
        $("#divTermo").hide();
      }
    },
  });
});

$("#btnCopiarHistorico").click(function () {
  let t = document.getElementById("taHistorico");
  t.select();
  t.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

$("#btnCopiarTermo").click(function () {
  let t = document.getElementById("taTermo");
  t.select();
  t.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

function removerPonto(s) {
  s = $.trim(String(s));
  let n = s.length - 1;

  if (s.charAt(n) == ".") {
    return $.trim(s.substring(0, n));
  }
  return $.trim(s);
}

function removerPontoDuplicado(s) {
  s = $.trim(String(s));
  let n = s.length - 1;

  if (s.charAt(n) == "." && s.charAt(n - 1) == ".") {
    return $.trim(s.substring(0, n));
  }
  return $.trim(s);
}

function criaParagrafoOrgao() {

  let nome = String($("#iNomeVitima").val()).trim();
  let idade = String($("#iIdadeVitima").val()).trim();
  let t = "Comparece nesta Delegacia de Policia ";

  if ($("#rOrgaoSPN").is(":checked")) {
    t = t.concat(nome);
    t = t.concat(", com ");
    t = t.concat(idade);
    t = t.concat(" anos de idade, para registrar ocorrência no contexto de violência doméstica e familiar contra a mulher. ");
    return t;
  }

  let orgao = $("#sOrgaoSP option:selected").text();
  orgao = orgao.charAt(0).toLowerCase() + orgao.slice(1);
  t = t.concat(orgao);
  t = t.concat(" para apresentar ocorrência no contexto de violência doméstica e familiar contra a mulher, na qual figura como vítima ");
  t = t.concat(nome);
  t = t.concat(", com ");
  t = t.concat(idade);
  t = t.concat(" anos de idade. ");
  return t;
}

function verificaDadosVitima(ok) {

  let showAlert = false;

  if ($("#iNomeVitima").val()) {
    $("#iNomeVitima").css("border-color", "#ced4da");
  } else {
    $("#iNomeVitima").css("border-color", "red");
    showAlert = true;
    if (!ok) ok = "lDadosVitima";
  }

  if ($("#iIdadeVitima").val() ) {
    $("#iIdadeVitima").css("border-color", "#ced4da");
  } else {
    $("#iIdadeVitima").css("border-color", "red");
    showAlert = true;
    if (!ok) ok = "lDadosVitima";
  }

  if (showAlert) 
    $("#aDadosVitima").show();
  else
    $("#aDadosVitima").hide();
  
  return ok;
}


function verificaCamposRelacionamento(ok) {
  if (!$("#rRelacionamento3").is(":checked")) {
    $("#aTempoRelacionamento").hide();
    $("#taOutroRelacionamento").css("border-color", "#ced4da");
    $("#aOutroRelacionamento").hide();

    let showAlert = false;

    if ($("#iTempoRelacionamento").val().trim()) {
      $("#iTempoRelacionamento").css("border-color", "#ced4da");
    } else {
      $("#iTempoRelacionamento").css("border-color", "red");
      showAlert = true;
      if (!ok) ok = "lTempoRelacionamento";
    }

    if (
      $("#rRelacionamento1-Ex").is(":checked") ||
      $("#rRelacionamento2-Ex").is(":checked") ||
      $("#rRelacionamento4-Ex").is(":checked")
    ) {
      if ($("#iTempoSeparados").val().trim()) {
        $("#iTempoSeparados").css("border-color", "#ced4da");
      } else {
        $("#iTempoSeparados").css("border-color", "red");
        showAlert = true;
        if (!ok) ok = "lTempoSeparados";
      }
    } else {
      $("#iTempoSeparados").css("border-color", "#ced4da");
    }

    if (showAlert) $("#aTempoRelacionamento").show();

    // outro relacionamento
  } else {
    let t = String($("#taOutroRelacionamento").val()).trim();

    if (t.includes("__")) {
      $("#aOutroRelacionamento").show();
      $("#taOutroRelacionamento").css("border-color", "red");
      if (!ok) ok = "lOutroRelacionamento";
    } else {
      $("#taOutroRelacionamento").css("border-color", "#ced4da");
      $("#aOutroRelacionamento").hide();
    }
  }

  return ok;
}

function criaParagrafoRelacionamento(termo) {

  let nome = String($("#iNomeVitima").val()).trim();
  let idade = String($("#iIdadeVitima").val()).trim();
  let t = "";

  // COMPANHEIRO - AINDA ESTAO JUNTOS
  if ($("#rRelacionamento1").is(":checked")) {
    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("viveu em união estável com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("vive em união estável com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("vive em união estável com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    // EX-COMPANHEIRO - SEPARADOS
  } else if ($("#rRelacionamento1-Ex").is(":checked")) {

    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("viveu em união estável com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("vive em união estável com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("vive em união estável com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    }

    // MARIDO - AINDA ESTAO JUNTOS
  } else if ($("#rRelacionamento2").is(":checked")) {
    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve casada com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está casada com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está casada com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    // EX-MARIDO - SEPARADOS
  } else if ($("#rRelacionamento2-Ex").is(":checked")) {
    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve casada com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está casada com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está casada com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    }

    // NAMORADO - AINDA ESTAO JUNTOS
  } else if ($("#rRelacionamento4").is(":checked")) {
    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve namorando com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está namorando com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está namorando com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    // EX-NAMORADO - SEPARADOS
  } else if ($("#rRelacionamento4-Ex").is(":checked")) {
    if(termo) {
      t = t.concat("A vítima, ");
      t = t.concat(nome + ", com " + idade + " anos de idade");
      t = t.concat(", informa que ");
    } else {
      t = t.concat("A vítima informa que ");
    }

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve namorando com o suspeito por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está namorando com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está namorando com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val().trim());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val().trim());
      t = t.concat(tempoSeparados);
    }
  } else {
    let outroRelacionamento = $("#taOutroRelacionamento").val();
    t = t.concat(outroRelacionamento);
  }

  t = removerPonto(t);

  return t;
}

function verificaCamposMesmaResidencia(ok) {
  if ($("#rMesmaResidenciaS").is(":checked")) {
    if ($("#iLocalResidencia").val()) {
      $("#iLocalResidencia").css("border-color", "#ced4da");
      $("#aLocalResidencia").hide();
    } else {
      $("#aLocalResidencia").show();
      $("#iLocalResidencia").css("border-color", "red");
      if (!ok) ok = "lLocalResidencia";
    }
  } else {
    $("#iLocalResidencia").css("border-color", "#ced4da");
    $("#aLocalResidencia").hide();
  }

  return ok;
}

function criaParagrafoMesmaResidencia() {
  if ($("#rMesmaResidenciaN").is(":checked")) {
    return " e que não vivem na mesma residência.";
  }

  let t = " e que vivem na mesma residência (";
  t = t.concat($("#iLocalResidencia").val().trim() + ").");
  return t;
}





function verificaCamposProle(ok) {

  if ($("#rProleS").is(":checked")) {
    let n = Number($("#divListaProle").children().length);

    let aListaProle = false;
    for (let i = 1; i <= n; i++) {
      let label = "#divDadosProle-" + i;

      if ($(label + " #iNomeProle").val()) {
        $(label + " #iNomeProle").css("border-color", "#ced4da");
      } else {
        $(label + " #iNomeProle").css("border-color", "red");
        aListaProle = true;
      }

      if ($(label + " #iIdadeProle").val()) {
        $(label + " #iIdadeProle").css("border-color", "#ced4da");
      } else {
        $(label + " #iIdadeProle").css("border-color", "red");
        aListaProle = true;
      }
    }

    if (aListaProle) {
      $("#aListaProle").show();
      if (!ok) ok = "divProle";
    } else {
      $("#aListaProle").hide();
    }
  }

  return ok;
}



function criaParagrafoProle() {

  let t = "";

  if ($("#rProleN").is(":checked")) {
    return t;
  }

  let proleComum = [];
  let proleOutro = [];

  let n = Number($("#divListaProle").children().length);

  for (let i = 1; i <= n; i++) {
    let label = "#divDadosProle-" + i;

    let nome = String($(label + " #iNomeProle").val()).trim().toUpperCase();
    let idade = String($(label + " #iIdadeProle").val().trim());
    let dma = $(label + " #sIdadeProle option:selected").val();
    dma = (dma === "mes") ? "mês" : dma;
    let outro = Boolean($(label + " #cOutroProle").is(":checked"));
    let junto = Boolean($(label + " #cJuntoProle").is(":checked"));


    if(Number(idade) > 1) {
      dma = (dma === "dia") ? "dias" : dma;
      dma = (dma === "mês") ? "meses" : dma;
      dma = (dma === "ano") ? "anos" : dma;
    }
    
    if(outro)
      proleOutro.push({ nome, idade, dma, junto });
    else 
      proleComum.push({ nome, idade, dma, junto });

  }  

  if(proleComum.length > 0) {
    t = t.concat(" A vítima informa que possui ");
    let sp = (proleComum.length == 1) ? "um filho" : (numerosPorExtenso[proleComum.length] + " filhos");
    t = t.concat(sp + " em comum com o suspeito: ");


    for (let i = 0; i < proleComum.length; i++) {
      if (i == 0) {
        t = t.concat(proleComum[i].nome);
        t = t.concat(" (" + proleComum[i].idade + " " + proleComum[i].dma);
        t = t.concat( proleComum[i].junto ? ", vive com a vítima)" : ", não vive com a vítima)" );
        if (proleComum.length == 1) t = t.concat(".");
      } else if (i == proleComum.length - 1) {
        t = t.concat(" e " + proleComum[i].nome);
        t = t.concat(" (" + proleComum[i].idade + " " + proleComum[i].dma);
        t = t.concat( proleComum[i].junto ? ", vive com a vítima)." : ", não vive com a vítima)." );
      } else {
        t = t.concat(", " + proleComum[i].nome);
        t = t.concat(" (" + proleComum[i].idade + " " + proleComum[i].dma);
        t = t.concat( proleComum[i].junto ? ", vive com a vítima)" : ", não vive com a vítima)" );
      }
    }
  

  }

  if(proleOutro.length > 0) {
    if(proleComum.length > 0) {
      t = t.concat(" Também possui ");
    } else {
      t = t.concat(" A vítima informa que possui ");
    }
    let sp = (proleOutro.length == 1) ? "um filho" : (numerosPorExtenso[proleOutro.length] + " filhos");
    t = t.concat(sp + " de outro(s) relacionamento(s): ");

    for (let i = 0; i < proleOutro.length; i++) {
      if (i == 0) {
        t = t.concat(proleOutro[i].nome);
        t = t.concat(" (" + proleOutro[i].idade + " " + proleOutro[i].dma);
        t = t.concat( proleOutro[i].junto ? ", vive com a vítima)" : ", não vive com a vítima)" );
        if (proleOutro.length == 1) t = t.concat(".");
      } else if (i == proleOutro.length - 1) {
        t = t.concat(" e " + proleOutro[i].nome);
        t = t.concat(" (" + proleOutro[i].idade + " " + proleOutro[i].dma);
        t = t.concat( proleOutro[i].junto ? ", vive com a vítima)." : ", não vive com a vítima)." );
      } else {
        t = t.concat(", " + proleOutro[i].nome);
        t = t.concat(" (" + proleOutro[i].idade + " " + proleOutro[i].dma);
        t = t.concat( proleOutro[i].junto ? ", vive com a vítima)" : ", não vive com a vítima)" );
      }
    }
  }

  t = " " + removerPontoDuplicado(t);
  return t;
}


function verificaCamposConduta(ok) {
  let t = String($("#taConduta").val()).trim();

  if (t.includes("__")) {
    $("#aConduta").show();
    $("#taConduta").css("border-color", "red");
    if (!ok) ok = "lConduta";
  } else {
    $("#taConduta").css("border-color", "#ced4da");
    $("#aConduta").hide();
  }

  return ok;
}

function criaParagrafoConduta() {
  let t = String($("#taConduta").val()).trim() + ".";
  t = " " + removerPontoDuplicado(t);
  return t;
}



function verificaLesaoAtendimento(ok) {
  if (
    $("#rLesaoS").is(":checked") &&
    $("#rAtendimentoS").is(":checked") &&
    !$("#iLocalAtendimento").val()
  ) {
    $("#aLocalAtendimento").show();
    $("#iLocalAtendimento").css("border-color", "red");
    if (!ok) ok = "lLocalAtendimento";
  } else {
    $("#iLocalAtendimento").css("border-color", "#ced4da");
    $("#aLocalAtendimento").hide();
  }

  return ok;
}

function criaParagrafoLesaoAtendimento() {
  let t = "";
  if ($("#rLesaoS").is(":checked")) {

    if ($("#rAtendimentoS").is(":checked")) {
      t = t.concat("A vítima informa que procurou atendimento médico no seguinte local: ");
      t = t.concat($("#iLocalAtendimento").val().trim() + ".");
      t = removerPontoDuplicado(t);
      t = t.concat(" Realizado o seu encaminhamento a exame pericial no PML.");

    } else {
      t = t.concat("A vítima informa que não procurou atendimento médico,");
      t = t.concat(" sendo realizado o seu encaminhamento a exame pericial no PML.");
    }

    t = " " + t;
  }
  
  return t;
}

function verificaCamposTestemunhas(ok) {
  if ($("#rTestemunhaS").is(":checked")) {
    let n = Number($("#divListaTestemunhas").children().length);

    let aListaTestemunhas = false;
    for (let i = 1; i <= n; i++) {
      let label = "#divDadosTestemunha-" + i;

      if ($(label + " #iNomeTestemunha").val()) {
        $(label + " #iNomeTestemunha").css("border-color", "#ced4da");
      } else {
        $(label + " #iNomeTestemunha").css("border-color", "red");
        aListaTestemunhas = true;
      }

      if ($(label + " #iContatoTestemunha").val()) {
        $(label + " #iContatoTestemunha").css("border-color", "#ced4da");
      } else {
        $(label + " #iContatoTestemunha").css("border-color", "red");
        aListaTestemunhas = true;
      }
    }

    if (aListaTestemunhas) {
      $("#aListaTestemunhas").show();
      if (!ok) ok = "divTestemunha";
    } else {
      $("#aListaTestemunhas").hide();
    }
  }

  return ok;
}

function criaParagrafoTestemunhas() {
  if ($("#rTestemunhaN").is(":checked")) {
    return " Não há testemunhas.";
  }

  if ($("#rTestemunhaSQ").is(":checked")) {
    return " As testemunhas foram qualificadas no respectivo campo do SPJ.";
  }

  let nomes = [];
  let contatos = [];
  let n = Number($("#divListaTestemunhas").children().length);

  for (let i = 1; i <= n; i++) {
    let label = "#divDadosTestemunha-" + i;
    nomes.push((String($(label + " #iNomeTestemunha").val()).trim().toUpperCase()));
    contatos.push(String($(label + " #iContatoTestemunha").val().trim()));
  }

  let t = " Indicada como testemunha do fato: ";
  if(n > 1) t = " Indicadas como testemunhas do fato: ";
  for (let i = 0; i < nomes.length; i++) {
    if (i == 0) {
      t = t.concat(String(nomes[i]));
      t = t.concat(" (" + String(contatos[i]) + ")");
      if (nomes.length == 1) t = t.concat(".");
    } else if (i == nomes.length - 1) {
      t = t.concat(" e " + String(nomes[i]));
      t = t.concat(" (" + String(contatos[i]) + ").");
    } else {
      t = t.concat(", " + String(nomes[i]));
      t = t.concat(" (" + String(contatos[i]) + ")");
    }
  }

  t = " " + removerPontoDuplicado(t);
  return t;
}


function verificaCamposAcaoPenal(ok) {
  if ($("#rRepresentacaoPrivada").is(":checked")) {
    let t = String($("#taAcaoPrivada").val()).trim();

    if (t.includes("__")) {
      $("#aAcaoPrivada").show();
      $("#taAcaoPrivada").css("border-color", "red");
      if (!ok) ok = "lAcaoPrivada";
    } else {
      $("#taAcaoPrivada").css("border-color", "#ced4da");
      $("#aAcaoPrivada").hide();
    }
  }

  return ok;
}

function criaParagrafoAcaoPenal() {

  let t = "";

  if ($("#rRepresentacaoIncondicionada").is(":checked")) {
    t = "A vítima foi cientificada de que se trata de crime(s) de ação penal pública incondicionada.";
  } else if ($("#rRepresentacaoCondicionadaSim").is(":checked")) {
    t = "A vítima manifestou o interesse de representar criminalmente contra o(s) autor(es) do(s) fato(s).";
  } else if ($("#rRepresentacaoCondicionadaNao").is(":checked")) {
    t = "A vítima não deseja representar criminalmente contra o(s) autor(es) do(s) fato(s).";
  } else {
    t = String($("#taAcaoPrivada").val()).trim() + ".";
  }

  t = " " + removerPontoDuplicado(t);
  return t;
}




function criaParagrafoMedidasProtetivas() {
  if ($("#rRepresentacaoS").is(":checked")) {
    if ($("#rMedidasN").is(":checked")) {
      return " porém não solicita medidas protetivas.";
    } else return " e solicita medidas protetivas.";
  } 

  if ($("#rMedidasN").is(":checked")) {
    return " Não solicita medidas protetivas.";
  }
  return " Solicita medidas protetivas.";
}




function criaParagrafoArmas() {
  if ($("#rArmasN").is(":checked")) {
    return " Realizada pesquisas nos sistemas ARM/SINARM: nada localizado em nome do suspeito, conforme documentos anexos.";
  }
  return " Realizada pesquisas nos sistemas ARM/SINARM: há registro de arma em nome do suspeito, conforme documentos anexos.";
}

function verificaCamposPossuiArmas(ok) {

  if ($("#rPossuiArmasSim").is(":checked")) {
    let t = String($("#taPossuiArmasSim").val()).trim();

    if (t.includes("__")) {
      $("#aPossuiArmasSim").show();
      $("#taPossuiArmasSim").css("border-color", "red");
      if (!ok) ok = "lPossuiArmasSim";
    } else {
      $("#taPossuiArmasSim").css("border-color", "#ced4da");
      $("#aPossuiArmasSim").hide();
    }
  }

  return ok;
}

function criaParagrafoPossuiArmas() {
  let t = "";

  if ($("#rPossuiArmasSim").is(":checked")) {
    t = String($("#taPossuiArmasSim").val().trim()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rPossuiArmasNS").is(":checked")) {
    t = " A vítima não soube informar se o suspeito possui ou mantém em sua posse arma(s) de fogo.";
  }

  return t;
}

function verificaCamposRelacoesSexuais(ok) {
  if (
    $("#rRelacoesSexuaisS").is(":checked") ||
    $("#rRelacoesSexuaisSV").is(":checked")
  ) {
    let t = String($("#taRelacoesSexuais").val()).trim();

    if (t.includes("__")) {
      $("#aRelacoesSexuais").show();
      $("#taRelacoesSexuais").css("border-color", "red");
      if (!ok) ok = "lRelacoesSexuais";
    } else {
      $("#taRelacoesSexuais").css("border-color", "#ced4da");
      $("#aRelacoesSexuais").hide();
    }
  } else if ($("#rRelacoesSexuaisNS").is(":checked")) {
    let t = String($("#taRelacoesSexuaisNaoSabe").val()).trim();

    if (t.includes("__")) {
      $("#aRelacoesSexuaisNaoSabe").show();
      $("#taRelacoesSexuaisNaoSabe").css("border-color", "red");
      if (!ok) ok = "lRelacoesSexuaisNaoSabe";
    } else {
      $("#taRelacoesSexuaisNaoSabe").css("border-color", "#ced4da");
      $("#aRelacoesSexuaisNaoSabe").hide();
    }
  }

  return ok;
}

function criaParagrafoRelacoesSexuais() {
  let t = "";

  if (
    $("#rRelacoesSexuaisS").is(":checked") ||
    $("#rRelacoesSexuaisSV").is(":checked")
  ) {
    t = String($("#taRelacoesSexuais").val().trim()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rRelacoesSexuaisNS").is(":checked")) {
    t = String($("#taRelacoesSexuaisNaoSabe").val().trim()) + ".";
    t = " " + removerPontoDuplicado(t);
  }

  return t;
}

function criaParagrafoOcorrenciaSuspeito() {
  let t = " A vítima já registrou ocorrência policial contra o suspeito, ";

  if ($("#rOcorrenciaSuspeitoN").is(":checked")) return "";
  if ($("#rOcorrenciaSuspeitoSS").is(":checked"))
    t = t.concat("porém sem MPU.");
  else if ($("#rOcorrenciaSuspeitoSE").is(":checked"))
    t = t.concat(
      "com MPU com prazo de validade expirado."
    );

  return t;
}

function verificaCamposParadeiro(ok) {
  let t = String($("#taParadeiro").val()).trim();

  if (t.includes("__")) {
    $("#aParadeiro").show();
    $("#taParadeiro").css("border-color", "red");
    if (!ok) ok = "lParadeiro";
  } else {
    $("#taParadeiro").css("border-color", "#ced4da");
    $("#aParadeiro").hide();
  }

  return ok;
}

function criaParagrafoParadeiro() {
  let t = String($("#taParadeiro").val()).trim() + ".";
  t = " " + removerPontoDuplicado(t);
  return t;
}

function verificaCamposVicios(ok) {
  if ($("#cVicio6").is(":checked")) {
    if ($("#iOutrosVicios").val()) {
      $("#iOutrosVicios").css("border-color", "#ced4da");
      $("#aOutrosVicios").hide();
    } else {
      $("#aOutrosVicios").show();
      $("#iOutrosVicios").css("border-color", "red");
      if (!ok) ok = "lOutrosVicios";
    }
  } else {
    $("#iOutrosVicios").css("border-color", "#ced4da");
    $("#aOutrosVicios").hide();
  }
  return ok;
}

function criaParagrafoVicios() {
  let t = "";

  let vicios = [];
  for (let i = 1; i <= 6; i++) {
    let label = "#cVicio" + i;
    if ($(label).is(":checked")) {
      if (i == 6) {
        vicios.push(String($("#iOutrosVicios").val().trim()));
      } else {
        vicios.push($(label).val());
      }
    }
  }

  if (vicios.length > 0) {
    t = " Diz que o suspeito é usuário de ";
    if (vicios.length == 1) {
      t = t.concat(String(vicios[0]) + ".");
    } else {
      for (let i = 0; i < vicios.length; i++) {
        if (i == 0) {
          t = t.concat(String(vicios[i]));
        } else if (i == vicios.length - 1) {
          t = t.concat(" e " + String(vicios[i]) + ".");
        } else {
          t = t.concat(", " + String(vicios[i]));
        }
      }
    }
  }

  t = " " + removerPontoDuplicado(t);
  return t;
}

function verificaCamposMidias(ok) {
  if ($("#rRegistroMidiaS").is(":checked")) {
    if (
      !$("#cMidiaAudio").is(":checked") &&
      !$("#cMidiaImagem").is(":checked") &&
      !$("#cMidiaVideo").is(":checked")
    ) {
      $("#aTipoMidia").show();
      $("#divTipoMidia").css("border", "red solid thin");
      $("#divTipoMidia").css("padding", "5px");
      if (!ok) ok = "lTipoMidia";
    } else {
      $("#aTipoMidia").hide();
      $("#divTipoMidia").css("border", "white none 0px");
      $("#divTipoMidia").css("padding", "0px");
    }

    if ($("#rEntregouMidiaN").is(":checked")) {
      let t = String($("#taLocalMidia").val()).trim();

      if (t.includes("__")) {
        $("#aLocalMidia").show();
        $("#taLocalMidia").css("border-color", "red");
        if (!ok) ok = "lLocalMidia";
      } else {
        $("#taLocalMidia").css("border-color", "#ced4da");
        $("#aLocalMidia").hide();
      }
    }
  }

  return ok;
}

function criaParagrafoMidias() {
  if ($("#rRegistroMidiaS").is(":checked")) {
    let t = "A vítima informa que os fatos foram registrados em ";

    let m = [];
    if ($("#cMidiaAudio").is(":checked")) m.push("áudio");
    if ($("#cMidiaImagem").is(":checked")) m.push("imagem");
    if ($("#cMidiaVideo").is(":checked")) m.push("vídeo");

    if(m.length == 1) 
      t = t.concat(m[0]);
    else if(m.length == 2)
      t = t.concat(m[0] + " e " + m[1]);
    else if(m.length == 3)
      t = t.concat(m[0] + ", " + m[1] + " e " + m[2]);

    if ($("#rEntregouMidiaS").is(":checked")) {
      t = t.concat(", e que o material foi entregue na Delegacia de Polícia.");
    } else {
      t = t.concat(". " + $("#taLocalMidia").val().trim() + ".");
    }

    t = " " + removerPontoDuplicado(t) + " ";
    return t;
  }

  return "";
}

function criaParagrafoDependencia() {
  let t = "A vítima informa que depende financeiramente do suspeito.";
  if ($("#rDependenciaN").is(":checked"))
    t = "A vítima informa que não depende financeiramente do suspeito.";

  t = " " + removerPontoDuplicado(t);
  return t;
}

function criaParagrafoDeficiencia() {
  let t = " A vítima alega que não possui deficiência.";

  if ($("#rDeficienteS1").is(":checked")) {
    t =
      " A vítima alega que possui deficiência preexistente ao fato, não sendo essa agravada pela violência sofrida.";
  } else if ($("#rDeficienteS2").is(":checked")) {
    t =
      " A vítima alega que possui deficiência preexistente ao fato, sendo essa agravada pela violência sofrida.";
  } else if ($("#rDeficienteS3").is(":checked")) {
    t =
      " A vítima alega que possui deficiência causada pela violência sofrida.";
  }

  return t;
}

function criaParagrafoAbrigo() {
  let t = "Foi oferecido abrigo para a vítima, tendo ela aceitado.";
  if ($("#rAbrigoN").is(":checked")) {
    t = "Foi oferecido abrigo para a vítima, porém a mesma recusou";
    if ($("#rMedidasS").is(":checked")) {
      t = t.concat(
        ", sendo orientada a aguardar o deferimento da MPU em local seguro. "
      );
    } else {
      t = t.concat(".");
    }
  }
  t = " " + removerPontoDuplicado(t);
  return t;
}

function criaParagrafoBuscaPertences() {
  if ($("#rPertencesN").is(":checked")) {
    return " A vítima diz que não precisa de auxílio para buscar os seus pertences pessoais.";
  }
  return " A vítima diz que precisa de auxílio para buscar os seus pertences pessoais.";
}

function verificaCamposOrientacoesHistorico(ok) {

  let warning = false;


  // Info MPU / Forum e Prazo
  if ($("#cOutrosHistorico1").is(":checked")) {
    if ($("#iLocalInfo").val().trim()) {
      $("#iLocalInfo").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iLocalInfo").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }

    if ($("#iPrazoInfo").val().trim()) {
      $("#iPrazoInfo").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iPrazoInfo").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }
  } else {
    $("#iLocalInfo").css("border-color", "#ced4da");
    $("#iPrazoInfo").css("border-color", "#ced4da");
  }


  // Descumprimento MPU / Revogação MPU
  if ($("#cOutrosHistorico2").is(":checked")) {
    if ($("#iLocalRevogar").val()) {
      $("#iLocalRevogar").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iLocalRevogar").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }
  } else {
    $("#iLocalRevogar").css("border-color", "#ced4da");
  }


  // Provas Complementares
  if ($("#cOutrosHistorico3").is(":checked")) {
    if ($("#iLocalProvas").val().trim()) {
      $("#iLocalProvas").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iLocalProvas").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }

    if ($("#iPrazoProvas").val().trim()) {
      $("#iPrazoProvas").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iPrazoProvas").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }

    if (
      !$("#cOutrosHistorico3Fone").is(":checked") &&
      !$("#cOutrosHistorico3Email").is(":checked")
    ) {
      
      $("#divOutrosHistorico3Email").css("color", "red");
      $("#divOutrosHistorico3Fone").css("color", "red");

      $("#iEmailProvas").css("border-color", "red");
      $("#iFoneProvas").css("border-color", "red");
      $("#iEmailProvas").css("color", "red");
      $("#iFoneProvas").css("color", "red");

      $("#aOutrosHistoricoFoneEmail").show();

      if (!ok) ok = "lOutrosHistorico";
    } else {

      $("#divOutrosHistorico3Email").css("color", "#495057");
      $("#divOutrosHistorico3Fone").css("color", "#495057");

      $("#iEmailProvas").css("border-color", "#ced4da");
      $("#iFoneProvas").css("border-color", "#ced4da");
      $("#iEmailProvas").css("color", "#495057");
      $("#iFoneProvas").css("color", "#495057");

      $("#aOutrosHistoricoFoneEmail").hide();
    }


    if (
        $("#cOutrosHistorico3Email").is(":checked") &&
        (!$("#iEmailProvas").val().trim() || $("#iEmailProvas").val().trim() == "@pc.rs.gov.br")
      ) {
        warning = true;
        $("#iEmailProvas").css("border-color", "red");
        if (!ok) ok = "lOutrosHistorico";
    } else {
      $("#iEmailProvas").css("border-color", "#ced4da");
    }

    if (
        $("#cOutrosHistorico3Fone").is(":checked") &&
        (!$("#iFoneProvas").val().trim() || $("#iFoneProvas").val().trim() == "(51) 9999-99999")
      ) {
        warning = true;
        $("#iFoneProvas").css("border-color", "red");
        if (!ok) ok = "lOutrosHistorico";
    } else {
      $("#iFoneProvas").css("border-color", "#ced4da");
    }


  } else {
    $("#iLocalProvas").css("border-color", "#ced4da");
    $("#iPrazoProvas").css("border-color", "#ced4da");

    $("#divOutrosHistorico3Email").css("color", "#495057");
    $("#divOutrosHistorico3Fone").css("color", "#495057");

    $("#iEmailProvas").css("border-color", "#ced4da");
    $("#iFoneProvas").css("border-color", "#ced4da");
    $("#iEmailProvas").css("color", "#495057");
    $("#iFoneProvas").css("color", "#495057");
  
    $("#aOutrosHistoricoFoneEmail").hide();
  }


  if (warning) {
    $("#aOutrosHistorico").show();
  } else {
    $("#aOutrosHistorico").hide();
  }
  
  return ok;
}

function criaParagrafoOrientacoesHistorico() {
  let t = " ";

  // Info MPU / Forum e Prazo
  if ($("#cOutrosHistorico1").is(":checked")) {
    t = t.concat("Orientada a contatar o ");
    t = t.concat($("#iLocalInfo").val().trim());
    t = t.concat(" para obter informações da MPU em até ");
    t = t.concat($("#iPrazoInfo").val().trim());
    t = t.concat(" horas. ");
  }

  // Descumprimento MPU / Revogação MPU
  if ($("#cOutrosHistorico2").is(":checked")) {
    t = t.concat(
      "Orientada a registrar nova ocorrência, para novos encaminhamentos, caso houver descumprimento da MPU, e orientada a entrar em contato com "
    );
    t = t.concat($("#iLocalRevogar").val().trim());
    t = t.concat(" caso deseje a revogação da medida. ");
  }

  // Provas Complementares
  if ($("#cOutrosHistorico3").is(":checked")) {
    t = t.concat("Orientada a encaminhar ");
    t = t.concat($("#iLocalProvas").val().trim());
    t = t.concat(" no prazo de ");
    t = t.concat($("#iPrazoProvas").val().trim());
    t = t.concat(" dias úteis, provas complementares caso surjam, através ");

    if (
      $("#cOutrosHistorico3Email").is(":checked") &&
      $("#cOutrosHistorico3Fone").is(":checked")
    ) {
      t = t.concat("do E-mail ");
      t = t.concat($("#iEmailProvas").val().trim());
      t = t.concat(" e do Whatsapp ");
      t = t.concat($("#iFoneProvas").val().trim());
    } else if ($("#cOutrosHistorico3Email").is(":checked")) {
      t = t.concat("do E-mail ");
      t = t.concat($("#iEmailProvas").val().trim());
    } else if ($("#cOutrosHistorico3Fone").is(":checked")) {
      t = t.concat("do Whatsapp ");
      t = t.concat($("#iFoneProvas").val().trim());
    }

    t = t.concat(". ");
  }

    // Comparecimento CRAM
    if ($("#cOutrosHistorico4").is(":checked")) {
      t = t.concat("Orientada a comparecer ao CRAM (Centro de Referência de Atendimento à Mulher) para buscar atendimento psicológico, jurídico e de assistência social. ");
    }

    // Encaminhamento Exame Corpo Delito
    if ($("#cOutrosHistorico5").is(":checked")) {
      t = t.concat("Houve o encaminhamento da vítima a exame de corpo de delito. ");
    }

    // Autorizou Registro Lesao
    if ($("#cOutrosHistorico6").is(":checked")) {
      t = t.concat("A vítima autorizou o(a) servidor(a) policial responsável pelo atendimento da ocorrência a realizar o registro fotográfico da(s) lesão(ões) corporal(is) indicada(s). ");
    }
    
    // NAO Autorizou Registro Lesao
    if ($("#cOutrosHistorico7").is(":checked")) {
      t = t.concat("A vítima NÃO autorizou o(a) servidor(a) policial responsável pelo atendimento da ocorrência a realizar o registro fotográfico da(s) lesão(ões) corporal(is) indicada(s). ");
    }

    // Remover espaço em branco
    t = " " + removerPontoDuplicado(t);
    return t;
}


$("#cOutrosHistorico6").click(function () {
  $("#cOutrosHistorico7").prop('checked', false);
});

$("#cOutrosHistorico7").click(function () {
  $("#cOutrosHistorico6").prop('checked', false);
});


function salvarOrientacoesHistorico() {
  localStorage.setItem(
    "cOutrosHistorico1",
    $("#cOutrosHistorico1").is(":checked") ? true : false
  );
  localStorage.setItem("iLocalInfo", $("#iLocalInfo").val());
  localStorage.setItem("iPrazoInfo", $("#iPrazoInfo").val());
  localStorage.setItem(
    "cOutrosHistorico2",
    $("#cOutrosHistorico2").is(":checked") ? true : false
  );
  localStorage.setItem("iLocalRevogar", $("#iLocalRevogar").val());
  localStorage.setItem(
    "cOutrosHistorico3",
    $("#cOutrosHistorico3").is(":checked") ? true : false
  );
  localStorage.setItem("iLocalProvas", $("#iLocalProvas").val());
  localStorage.setItem("iPrazoProvas", $("#iPrazoProvas").val());
  localStorage.setItem(
    "cOutrosHistorico3Email",
    $("#cOutrosHistorico3Email").is(":checked") ? true : false
  );
  localStorage.setItem("iEmailProvas", $("#iEmailProvas").val());
  localStorage.setItem(
    "cOutrosHistorico3Fone",
    $("#cOutrosHistorico3Fone").is(":checked") ? true : false
  );
  localStorage.setItem("iFoneProvas", $("#iFoneProvas").val());
}

$("#programa").click(function () {
  bootbox.alert({
    size: "large",
    message: `<h4>O Programa</h4>
            <p class="mt-3 small">
                
                O <strong>HiBO</strong> (acrônimo de <span class="text-primary">Hi</span>stórico de 
                <span class="text-primary">B</span>oletim de <span class="text-primary">O</span>corrência) é 
                um <strong>sistema de apoio na construção de históricos e termos de informações</strong> para boletins de ocorrência 
                em casos de <strong>violência doméstica e familiar</strong>. O programa auxilia a construção dos textos
                por meio de uma sequência de perguntas fundamentadas no 
                <a href="https://atos.cnj.jus.br/atos/detalhar/3218" target="_blank" class="text-primary">
                <span>Formulário Nacional de Avaliação de Risco</span></a>, porém não restritas ao mesmo, havendo 
              agregado uma série de contribuições oriundas da experiência diária das Delegacias de Polícia do Estado do Rio Grande do Sul.
              </p>

              <p class="mt-3 small">
                Por motivos de segurança, <span class="text-danger"><strong>os dados inseridos nos campos do formulário não são
                salvos</strong></span>, sendo que os mesmos serão perdidos após o fechamento da aba do navegador ou caso
                a página seja recarregada pelo usuário. Também por motivos de segurança, <span class="text-danger"><strong>nenhum 
                dado inserido no formulário é enviado para qualquer servidor</strong></span>, sendo que os dados informados
                permanecerão somente no navegador de modo temporário até o momento que o usuário saia
                da página ou a recarregue. Deste modo, buscamos que o programa seja apenas uma <strong>ferramenta de apoio</strong>,
                sendo que os <strong>dados privados permanecem de modo temporário exclusivamente no computador do usuário que está 
                realizando o registro</strong>.`,
  });
});

$("#config").click(function () {
  bootbox.dialog({
    message: `<div class="small mb-4"><h4>Configurações</h4>
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th class="text-center" scope="col">Histórico</th>
                        <th class="text-center" scope="col">Termo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Comunicante da ocorrência</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico1" id="settingHistorico1">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo1" id="settingTermo1">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Dados da vítima</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico2" id="settingHistorico2">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo2" id="settingTermo2">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Relacionamento entre as partes</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico3" id="settingHistorico3">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo3" id="settingTermo3">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Residencia das partes</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico4" id="settingHistorico4">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo4" id="settingTermo4">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Filhos</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico5" id="settingHistorico5">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo5" id="settingTermo5">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">6</th>
                        <td>Conduta delitiva</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico6" id="settingHistorico6">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo6" id="settingTermo6">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">7</th>
                        <td>Lesão corporal</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico7" id="settingHistorico7">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo7" id="settingTermo7">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">8</th>
                        <td>Testemunhas</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico8" id="settingHistorico8">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo8" id="settingTermo8">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">9</th>
                        <td>Natureza da ação penal</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico9" id="settingHistorico9">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo9" id="settingTermo9">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">10</th>
                        <td>Medida Protetiva de Urgência</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico10" id="settingHistorico10">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo10" id="settingTermo10">
                            </div>
                        </td>
                        </tr>

                    
                        <tr>
                        <th scope="row">11</th>
                        <td>Ameaça ou uso de arma de fogo</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico11" id="settingHistorico11">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo11" id="settingTermo11">
                            </div>
                        </td>
                        </tr>


                        <tr>
                        <th scope="row">12</th>
                        <td>Armas no ARM/SINARM</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico12" id="settingHistorico12">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo12" id="settingTermo12">
                            </div>
                        </td>
                        </tr>


                        <tr>
                        <th scope="row">13</th>
                        <td>Relações ou atos sexuais contra vontade</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico13" id="settingHistorico13">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo13" id="settingTermo13">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">14</th>
                        <td>Registro de ocorrência anterior</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico14" id="settingHistorico14">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo14" id="settingTermo14">
                            </div>
                        </td>
                        </tr>


                        <tr>
                        <th scope="row">15</th>
                        <td>Paradeiro do suspeito</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico15" id="settingHistorico15">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo15" id="settingTermo15">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">16</th>
                        <td>Substâncias das quais o suspeito é usuário</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico16" id="settingHistorico16">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo16" id="settingTermo16">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">17</th>
                        <td>Registros em áudio e/ou vídeo</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico17" id="settingHistorico17">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo17" id="settingTermo17">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">18</th>
                        <td>Dependência financeira</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico18" id="settingHistorico18">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo18" id="settingTermo18">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">19</th>
                        <td>Deficiências da vítima</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico19" id="settingHistorico19">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo19" id="settingTermo19">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">20</th>
                        <td>Abrigo</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico20" id="settingHistorico20">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo20" id="settingTermo20">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">21</th>
                        <td>Auxílio para buscar pertences</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico21" id="settingHistorico21">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo21" id="settingTermo21">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">22</th>
                        <td>Orientações no histórico</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingHistorico22" id="settingHistorico22">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="settingTermo22" id="settingTermo22">
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table></div>`,

    size: "large",

    buttons: {
      cancel: {
        label: "Cancelar",
        className: "btn btn-outline-primary",
      },

      noclose: {
        label: "Reset",
        className: "btn btn-outline-primary",
        callback: function () {
          localConfig.forEach((i) => {});

          localConfig.forEach((i) => {
            localStorage.setItem(`settingHistorico${i}`, i <= 10 || i == 22 ? true : false);
            localStorage.setItem(`settingTermo${i}`, i <= 2 || i == 22 ? false : true);
            document.getElementById(`settingHistorico${i}`).checked =
              localStorage.getItem(`settingHistorico${i}`) === "true" ? true : false;
            document.getElementById(`settingTermo${i}`).checked =
              localStorage.getItem(`settingTermo${i}`) === "true" ? true : false;
            document.getElementById(`settingHistorico${i}`).disabled =
              disabledConfig.includes(i) ? true : false;
            document.getElementById(`settingTermo${i}`).disabled = true;
          });

          return true;
        },
      },

      ok: {
        label: "Salvar",
        className: "btn-primary",
        callback: function (result) {
          if (result) {
            localConfig.forEach((i) => {
              localStorage.setItem(
                `settingHistorico${i}`,
                document.getElementById(`settingHistorico${i}`).checked ? true : false
              );
            });
          }
        },
      },
    },
  });

  localConfig.forEach((i) => {
    document.getElementById(`settingHistorico${i}`).checked =
      localStorage.getItem(`settingHistorico${i}`) === "true" ? true : false;
    document.getElementById(`settingTermo${i}`).checked =
      localStorage.getItem(`settingTermo${i}`) === "true" ? true : false;
    document.getElementById(`settingHistorico${i}`).disabled = disabledConfig.includes(i)
      ? true
      : false;
    document.getElementById(`settingTermo${i}`).disabled = true;
  });
});

var localConfig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
var disabledConfig = [1, 2, 3, 4, 5, 6, 9, 10, 22];

function inicializaConfig() {
  localConfig.forEach((i) => {
    if (!localStorage.getItem(`settingHistorico${i}`))
      localStorage.setItem(`settingHistorico${i}`, i <= 10 || i == 22 ? true : false);

    if (!localStorage.getItem(`settingTermo${i}`))
      localStorage.setItem(`settingTermo${i}`, i <= 2 || i == 22 ? false : true);
  });
}

function inicializaOrientacoes() {
  if (localStorage.getItem("cOutrosHistorico1"))
    $("#cOutrosHistorico1").attr(
      "checked",
      localStorage.getItem("cOutrosHistorico1") === "true" ? true : false
    );
  if (localStorage.getItem("iLocalInfo"))
    $("#iLocalInfo").attr("value", localStorage.getItem("iLocalInfo"));
  if (localStorage.getItem("iPrazoInfo"))
    $("#iPrazoInfo").attr("value", localStorage.getItem("iPrazoInfo"));
  if (localStorage.getItem("cOutrosHistorico2"))
    $("#cOutrosHistorico2").attr(
      "checked",
      localStorage.getItem("cOutrosHistorico2") === "true" ? true : false
    );
  if (localStorage.getItem("iLocalRevogar"))
    $("#iLocalRevogar").attr("value", localStorage.getItem("iLocalRevogar"));
  if (localStorage.getItem("cOutrosHistorico3"))
    $("#cOutrosHistorico3").attr(
      "checked",
      localStorage.getItem("cOutrosHistorico3") === "true" ? true : false
    );
  if (localStorage.getItem("iLocalProvas"))
    $("#iLocalProvas").attr("value", localStorage.getItem("iLocalProvas"));
  if (localStorage.getItem("iPrazoProvas"))
    $("#iPrazoProvas").attr("value", localStorage.getItem("iPrazoProvas"));
  if (localStorage.getItem("cOutrosHistorico3Email"))
    $("#cOutrosHistorico3Email").attr(
      "checked",
      localStorage.getItem("cOutrosHistorico3Email") === "true" ? true : false
    );
  if (localStorage.getItem("iEmailProvas"))
    $("#iEmailProvas").attr("value", localStorage.getItem("iEmailProvas"));
  if (localStorage.getItem("cOutrosHistorico3Fone"))
    $("#cOutrosHistorico3Fone").attr(
      "checked",
      localStorage.getItem("cOutrosHistorico3Fone") === "true" ? true : false
    );
  if (localStorage.getItem("iFoneProvas"))
    $("#iFoneProvas").attr("value", localStorage.getItem("iFoneProvas"));
}

inicializaConfig();
inicializaOrientacoes();
