/*
 * title="HiBO"
 * version="1.7"
 * date="10/04/2024"
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
 
 window.addEventListener("load", () => {
  if (!navigator.onLine) {
    const h1 = document.createElement("h1");
    const h1Content = document.createTextNode("Sem conexão com a Internet");
    h1.append(h1Content);

    const p = document.createElement("p");
    const pContent = document.createTextNode(
      "Para executar o HiBO é preciso estar conectado à Internet pois as seguintes bibliotecas (acessadas via CDN) são necessárias:"
    );
    p.append(pContent);

    const ul = document.createElement("ul");
    const bibliotecas = [
      "bootstrap@4.6.2",
      "jquery@3.5.1",
      "popper.js@1.16.1",
      "bootbox.js@4.4.0",
      "font-awesome@5.13.0",
    ];

    bibliotecas.forEach((e) => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(e);
      li.append(liContent);
      ul.append(li);
    });

    const div = document.createElement("div");
    div.classList.add("offline");
    div.append(h1);
    div.append(p);
    div.append(ul);

    document.querySelector("body").replaceChildren(div);
    return;
  }
});

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

$("#divOrgaoSP").hide();
$("#divOutroRelacionamento").hide();
$("#divTempoSeparados").hide();
$("#divLocalResidencia").hide();
$("#divFilhos").hide();
$("#divAtendimento").hide();
$("#divLocalAtendimento").hide();
$("#divTestemunha").hide();
$("#spanRemoverTestemunha").hide();
$("#divAcaoPrivada").hide();
$("#divOutrosVicios").hide();
$("#divAmeacaArmaUsou").hide();
$("#divAmeacaArmaAmeacou").hide();
$("#divAmeacaArmaFacil").hide();
$("#divAmeacaArmaNaoSabe").hide();
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
$("#aConduta").hide();
$("#aLocalAtendimento").hide();
$("#aListaTestemunhas").hide();
$("#aAcaoPrivada").hide();
$("#aParadeiro").hide();
$("#aOutrosVicios").hide();
$("#aTipoMidia").hide();
$("#aLocalMidia").hide();
$("#aAmeacaArmaUsou").hide();
$("#aAmeacaArmaAmeacou").hide();
$("#aAmeacaArmaFacil").hide();
$("#aAmeacaArmaNaoSabe").hide();
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

  $("#taOutroRelacionamento").val(
    "A vítima relata que sofreu violência praticada pelo "
  );
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

$("#rFilhosN").click(function () {
  $("#divFilhos").hide();
});

$("#rFilhosS").click(function () {
  $("#divFilhos").show();
});

$("#sNumeroFilhos").change(function () {
  let options = [
    "<option value='nenhum'>nenhum</option>",
    "<option value='um'>um</option>",
    "<option value='dois'>dois</option>",
    "<option value='três'>três</option>",
    "<option value='quatro'>quatro</option>",
    "<option value='cinco'>cinco</option>",
    "<option value='seis'>seis</option>",
    "<option value='sete'>sete</option>",
    "<option value='oito'>oito</option>",
    "<option value='nove'>nove</option>",
    "<option value='todos'>todos</option>",
  ];

  let n = 1 + $("#sNumeroFilhos option:selected").index();
  let t = options[0];
  t = t.concat(options[1]);

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      t = t.concat(options[i]);
    }
    t = t.concat(options[10]);
  }

  $("#sNumeroFilhosMenores").html(t);
  $("#sNumeroFilhosVivendo").html(t);
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

$("#rAcaoPrivadaS").click(function () {
  $("#taAcaoPrivada").val(
    "A vítima fica ciente do prazo decadencial de seis meses para propor queixa-crime através de advogado no tocante às "
  );
  $("#divAcaoPrivada").show();
});

$("#rAcaoPrivadaN").click(function () {
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

$("#rAmeacaArmaN").click(function () {
  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").hide();

  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();

  $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
  $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
  $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
  $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
});

$("#rAmeacaArmaSU").click(function () {
  $("#taAmeacaArmaUsou").val(
    "A vítima informou que o suspeito usou arma de fogo ..."
  );

  $("#divAmeacaArmaUsou").show();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").hide();

  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();

  $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
  $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
  $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
  $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
});

$("#rAmeacaArmaSA").click(function () {
  $("#taAmeacaArmaAmeacou").val(
    "A vítima informou que o suspeito ameaçou usar arma de fogo ..."
  );

  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").show();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").hide();

  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();

  $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
  $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
  $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
  $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
});

$("#rAmeacaArmaSF").click(function () {
  $("#taAmeacaArmaFacil").val(
    "A vítima informou que o suspeito tem fácil acesso a arma de fogo ..."
  );

  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").show();
  $("#divAmeacaArmaNaoSabe").hide();

  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();

  $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
  $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
  $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
  $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
});

$("#rAmeacaArmaNS").click(function () {
  $("#taAmeacaArmaNaoSabe").val(
    "Quando perguntada sobre o suspeito ter usado ou ameaçado usar arma de fogo, ou ter fácil acesso a arma, a vítima respondeu não saber. O motivo de não saber é ..."
  );

  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").show();

  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();

  $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
  $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
  $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
  $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
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
    "Quando perguntada sobre ter sido obrigada a ter relações sexuais ou praticar atos sexuais contra a sua vontade, a vítima respondeu não saber. O motivo de não saber é ..."
  );
});

let funcViolenciaGraveAmeaca = function () {
  let text =
    "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito, sem violência ou grave ameaça. O fato ocorreu no ...";
  if ($("#cViolencia").is(":checked")) {
    if ($("#cGraveAmeaca").is(":checked")) {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante grave ameaça e violência. O fato ocorreu no ...";
    } else {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante violência. O fato ocorreu no ...";
    }
  } else if ($("#cGraveAmeaca").is(":checked")) {
    text =
      "A vítima informa que foi obrigada a praticar relações sexuais com o suspeito mediante grave ameaça. O fato ocorreu no ...";
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
  ok = verificaLesaoAtendimento(ok);
  ok = verificaCamposTestemunhas(ok);
  ok = verificaCamposAcaoPrivada(ok);
  ok = verificaCamposParadeiro(ok);
  ok = verificaCamposVicios(ok);
  ok = verificaCamposMidias(ok);
  ok = verificaCamposAmeacaArmas(ok);
  ok = verificaCamposRelacoesSexuais(ok);
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
  if (localStorage.getItem("ch1") === "true")
    $("#taHistorico").append(criaParagrafoOrgao()); // 1-2
  if (localStorage.getItem("ch3") === "true")
    $("#taHistorico").append(criaParagrafoRelacionamento(false)); // 3
  if (localStorage.getItem("ch4") === "true")
    $("#taHistorico").append(criaParagrafoMesmaResidencia()); // 4
  if (localStorage.getItem("ch5") === "true")
    $("#taHistorico").append(criaParagrafoProle()); // 5
  if (localStorage.getItem("ch6") === "true")
    $("#taHistorico").append(criaParagrafoConduta()); // 6
  if (localStorage.getItem("ch7") === "true")
    $("#taHistorico").append(criaParagrafoLesaoAtendimento()); // 7
  if (localStorage.getItem("ch8") === "true")
    $("#taHistorico").append(criaParagrafoTestemunhas()); // 8
  if (localStorage.getItem("ch9") === "true")
    $("#taHistorico").append(criaParagrafoAcaoPenal()); // 9
  if (localStorage.getItem("ch10") === "true")
    $("#taHistorico").append(criaParagrafoMedidasProtetivas()); // 10
  if (localStorage.getItem("ch11") === "true")
    $("#taHistorico").append(criaParagrafoAcaoPrivada()); // 11
  if (localStorage.getItem("ch12") === "true")
    $("#taHistorico").append(criaParagrafoArmas()); // 12
  if (localStorage.getItem("ch13") === "true")
    $("#taHistorico").append(criaParagrafoAmeacaArmas()); // 13
  if (localStorage.getItem("ch14") === "true")
    $("#taHistorico").append(criaParagrafoRelacoesSexuais()); // 14
  if (localStorage.getItem("ch15") === "true")
    $("#taHistorico").append(criaParagrafoOcorrenciaSuspeito()); // 15
  if (localStorage.getItem("ch16") === "true")
    $("#taHistorico").append(criaParagrafoParadeiro()); // 16
  if (localStorage.getItem("ch17") === "true")
    $("#taHistorico").append(criaParagrafoVicios()); // 17
  if (localStorage.getItem("ch18") === "true")
    $("#taHistorico").append(criaParagrafoMidias()); // 18
  if (localStorage.getItem("ch19") === "true")
    $("#taHistorico").append(criaParagrafoDependencia()); // 19
  if (localStorage.getItem("ch20") === "true")
    $("#taHistorico").append(criaParagrafoDeficiencia()); // 20
  if (localStorage.getItem("ch21") === "true")
    $("#taHistorico").append(criaParagrafoAbrigo()); // 21
  if (localStorage.getItem("ch22") === "true")
    $("#taHistorico").append(criaParagrafoBuscaPertences()); // 22
  if (localStorage.getItem("ch23") === "true")
    $("#taHistorico").append(criaParagrafoOrientacoesHistorico()); // 23

  // *******************************************
  // GERA OS PARAGRAFOS DO TERMO DE INFORMAÇÕES
  // *******************************************
  if (localStorage.getItem("ct1") === "true")
    $("#taTermo").append(criaParagrafoOrgao()); // 1
  if (localStorage.getItem("ct3") === "true")
    $("#taTermo").append(criaParagrafoRelacionamento(true)); // 3
  if (localStorage.getItem("ct4") === "true")
    $("#taTermo").append(criaParagrafoMesmaResidencia()); // 4
  if (localStorage.getItem("ct5") === "true")
    $("#taTermo").append(criaParagrafoProle()); // 5
  if (localStorage.getItem("ct6") === "true")
    $("#taTermo").append(criaParagrafoConduta()); // 6
  if (localStorage.getItem("ct7") === "true")
    $("#taTermo").append(criaParagrafoLesaoAtendimento()); // 7
  if (localStorage.getItem("ct8") === "true")
    $("#taTermo").append(criaParagrafoTestemunhas()); // 8
  if (localStorage.getItem("ct9") === "true")
    $("#taTermo").append(criaParagrafoAcaoPenal()); // 9
  if (localStorage.getItem("ct10") === "true")
    $("#taTermo").append(criaParagrafoMedidasProtetivas()); // 10
  if (localStorage.getItem("ct11") === "true")
    $("#taTermo").append(criaParagrafoAcaoPrivada()); // 11
  if (localStorage.getItem("ct12") === "true")
    $("#taTermo").append(criaParagrafoArmas()); // 12
  if (localStorage.getItem("ct13") === "true")
    $("#taTermo").append(criaParagrafoAmeacaArmas()); // 13
  if (localStorage.getItem("ct14") === "true")
    $("#taTermo").append(criaParagrafoRelacoesSexuais()); // 14
  if (localStorage.getItem("ct15") === "true")
    $("#taTermo").append(criaParagrafoOcorrenciaSuspeito()); // 15
  if (localStorage.getItem("ct16") === "true")
    $("#taTermo").append(criaParagrafoParadeiro()); // 16
  if (localStorage.getItem("ct17") === "true")
    $("#taTermo").append(criaParagrafoVicios()); // 17
  if (localStorage.getItem("ct18") === "true")
    $("#taTermo").append(criaParagrafoMidias()); // 18
  if (localStorage.getItem("ct19") === "true")
    $("#taTermo").append(criaParagrafoDependencia()); // 19
  if (localStorage.getItem("ct20") === "true")
    $("#taTermo").append(criaParagrafoDeficiencia()); // 20
  if (localStorage.getItem("ct21") === "true")
    $("#taTermo").append(criaParagrafoAbrigo()); // 21
  if (localStorage.getItem("ct22") === "true")
    $("#taTermo").append(criaParagrafoBuscaPertences()); // 22
  if (localStorage.getItem("ct23") === "true")
    $("#taTermo").append(criaParagrafoOrientacoesHistorico()); // 23

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

    if ($("#iTempoRelacionamento").val()) {
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
      if ($("#iTempoSeparados").val()) {
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
    let s = "A vítima relata que sofreu violência praticada pelo";
    let t = String($("#taOutroRelacionamento").val()).trim();

    if (t == "" || t == s) {
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("vive em união estável com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("vive em união estável com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("vive em união estável com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("vive em união estável com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está casada com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está casada com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está casada com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está casada com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está namorando com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está namorando com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
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
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está namorando com o suspeito desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está namorando com o suspeito há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    t = t.concat(", que estão separados");
    if ($("#sTempoSeparados option:selected").text() == "desde") {
      t = t.concat(" desde ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
      t = t.concat(tempoSeparados);
    } else if ($("#sTempoSeparados option:selected").text() == "há") {
      t = t.concat(" há ");
      let tempoSeparados = removerPonto($("#iTempoSeparados").val());
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
  t = t.concat($("#iLocalResidencia").val() + ").");
  return t;
}

function criaParagrafoProle() {
  let t = "";

  if ($("#rFilhosS").is(":checked")) {
    let numeroFilhos = $("#sNumeroFilhos option:selected").text();
    let numeroFilhosMenores = $("#sNumeroFilhosMenores option:selected").text();
    let numeroFilhosVivendo = $("#sNumeroFilhosVivendo option:selected").text();

    t = t.concat(" A vítima informa que possui ");

    // UM FILHO
    if (numeroFilhos == "um") {
      t = t.concat("um filho");

      if (numeroFilhosMenores == "um") t = t.concat(" menor de idade ");
      else t = t.concat(" maior de idade ");

      if (numeroFilhosVivendo == "um") t = t.concat("que reside com ela.");
      else t = t.concat("que não reside com ela.");

      // MAIS DE UM FILHO
    } else {
      t = t.concat(numeroFilhos);
      t = t.concat(" filhos, ");

      if (numeroFilhosMenores == "todos")
        t = t.concat("todos menores de idade, ");
      else if (numeroFilhosMenores == "nenhum")
        t = t.concat("nenhum deles menor de idade, ");
      else if (numeroFilhosMenores == "um")
        t = t.concat("um deles menor de idade, ");
      else {
        t = t.concat(numeroFilhosMenores);
        t = t.concat(" deles menores de idade, ");
      }

      if (numeroFilhosVivendo == "todos")
        t = t.concat("todos residindo com ela.");
      else {
        t = t.concat(numeroFilhosVivendo);
        t = t.concat(" deles residindo com ela.");
      }
    }

    return t;
  }

  return t;
}

function verificaCamposConduta(ok) {
  let s = "Relata, ainda, que NA DATA DO FATO, o suspeito";
  let t = String($("#taConduta").val()).trim();

  if (t == "" || t == s) {
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
  let t = String($("#taConduta").val()) + ".";
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
      t = t.concat($("#iLocalAtendimento").val() + ".");
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
    nomes.push((String($(label + " #iNomeTestemunha").val()).toUpperCase()));
    contatos.push(String($(label + " #iContatoTestemunha").val()));
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


function criaParagrafoAcaoPenal() {
  if ($("#rRepresentacaoN").is(":checked")) {
    return " A vítima NÃO DESEJA REPRESENTAR CRIMINALMENTE e fica ciente do prazo decadencial de seis meses para fazê-lo. ";
  }

  return " A vítima DESEJA REPRESENTAR CRIMINALMENTE, ";
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

function verificaCamposAcaoPrivada(ok) {
  if ($("#rAcaoPrivadaS").is(":checked")) {
    let s =
      "A vítima fica ciente do prazo decadencial de seis meses para propor queixa-crime através de advogado no tocante às";
    let t = String($("#taAcaoPrivada").val()).trim();

    if (t == "" || t == s) {
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

function criaParagrafoAcaoPrivada() {
  if ($("#rAcaoPrivadaS").is(":checked")) {
    let t = String($("#taAcaoPrivada").val()).trim() + ".";
    t = " " + removerPontoDuplicado(t);
    return t;
  }
  return "";
}



function criaParagrafoArmas() {
  if ($("#rArmasN").is(":checked")) {
    return " Realizada pesquisas nos sistemas ARM/SINARM: nada localizado em nome do suspeito, conforme documentos anexos.";
  }
  return " Realizada pesquisas nos sistemas ARM/SINARM: há registro de arma em nome do suspeito, conforme documentos anexos.";
}

function verificaCamposAmeacaArmas(ok) {
  if ($("#rAmeacaArmaSU").is(":checked")) {
    let s = "A vítima informou que o suspeito usou arma de fogo ...";
    let t = String($("#taAmeacaArmaUsou").val()).trim();

    if (t == "" || t == s) {
      $("#aAmeacaArmaUsou").show();
      $("#taAmeacaArmaUsou").css("border-color", "red");
      if (!ok) ok = "lAmeacaArmaUsou";
    } else {
      $("#taAmeacaArmaUsou").css("border-color", "#ced4da");
      $("#aAmeacaArmaUsou").hide();
    }
  } else if ($("#rAmeacaArmaSA").is(":checked")) {
    let s = "A vítima informou que o suspeito ameaçou usar arma de fogo ...";
    let t = String($("#taAmeacaArmaAmeacou").val()).trim();

    if (t == "" || t == s) {
      $("#aAmeacaArmaAmeacou").show();
      $("#taAmeacaArmaAmeacou").css("border-color", "red");
      if (!ok) ok = "lAmeacaArmaAmeacou";
    } else {
      $("#taAmeacaArmaAmeacou").css("border-color", "#ced4da");
      $("#aAmeacaArmaAmeacou").hide();
    }
  } else if ($("#rAmeacaArmaSF").is(":checked")) {
    let s =
      "A vítima informou que o suspeito tem fácil acesso a arma de fogo ...";
    let t = String($("#taAmeacaArmaFacil").val()).trim();

    if (t == "" || t == s) {
      $("#aAmeacaArmaFacil").show();
      $("#taAmeacaArmaFacil").css("border-color", "red");
      if (!ok) ok = "lAmeacaArmaFacil";
    } else {
      $("#taAmeacaArmaFacil").css("border-color", "#ced4da");
      $("#aAmeacaArmaFacil").hide();
    }
  } else if ($("#rAmeacaArmaNS").is(":checked")) {
    let s =
      "Quando perguntada sobre o suspeito ter usado ou ameaçado usar arma de fogo, ou ter fácil acesso a arma, a vítima respondeu não saber. O motivo de não saber é ...";
    let t = String($("#taAmeacaArmaNaoSabe").val()).trim();

    if (t == "" || t == s) {
      $("#aAmeacaArmaNaoSabe").show();
      $("#taAmeacaArmaNaoSabe").css("border-color", "red");
      if (!ok) ok = "lAmeacaArmaNaoSabe";
    } else {
      $("#taAmeacaArmaNaoSabe").css("border-color", "#ced4da");
      $("#aAmeacaArmaNaoSabe").hide();
    }
  }

  return ok;
}

function criaParagrafoAmeacaArmas() {
  let t = "";

  if ($("#rAmeacaArmaSU").is(":checked")) {
    t = String($("#taAmeacaArmaUsou").val()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rAmeacaArmaSA").is(":checked")) {
    t = String($("#taAmeacaArmaAmeacou").val()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rAmeacaArmaSF").is(":checked")) {
    t = String($("#taAmeacaArmaFacil").val()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rAmeacaArmaNS").is(":checked")) {
    t = String($("#taAmeacaArmaNaoSabe").val()) + ".";
    t = " " + removerPontoDuplicado(t);
  }

  return t;
}

function verificaCamposRelacoesSexuais(ok) {
  if (
    $("#rRelacoesSexuaisS").is(":checked") ||
    $("#rRelacoesSexuaisSV").is(":checked")
  ) {
    let s = "O fato ocorreu no ...";
    let t = String($("#taRelacoesSexuais").val()).trim();

    if (t == "" || t.endsWith(s)) {
      $("#aRelacoesSexuais").show();
      $("#taRelacoesSexuais").css("border-color", "red");
      if (!ok) ok = "lRelacoesSexuais";
    } else {
      $("#taRelacoesSexuais").css("border-color", "#ced4da");
      $("#aRelacoesSexuais").hide();
    }
  } else if ($("#rRelacoesSexuaisNS").is(":checked")) {
    let s =
      "Quando perguntada sobre ter sido obrigada a ter relações sexuais ou praticar atos sexuais contra a sua vontade, a vítima respondeu não saber. O motivo de não saber é ...";
    let t = String($("#taRelacoesSexuaisNaoSabe").val()).trim();

    if (t == "" || t == s) {
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
    t = String($("#taRelacoesSexuais").val()) + ".";
    t = " " + removerPontoDuplicado(t);
  } else if ($("#rRelacoesSexuaisNS").is(":checked")) {
    t = String($("#taRelacoesSexuaisNaoSabe").val()) + ".";
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
  let s =
    "Sobre o paradeiro do suspeito, acredita-se que possa ser encontrado na";
  let t = String($("#taParadeiro").val()).trim();

  if (t == "" || t == s) {
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
  let t = String($("#taParadeiro").val()) + ".";
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
        vicios.push(String($("#iOutrosVicios").val()));
      } else {
        vicios.push($(label).val());
      }
    }
  }

  if (vicios.length > 0) {
    t = " Diz que o suspeito é viciado em ";
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
      let s =
        "O material não foi entregue na Delegacia de Polícia, e pode ser encontrado ...";
      let t = String($("#taLocalMidia").val()).trim();

      if (t == "" || t == s) {
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

    if ($("#cMidiaAudio").is(":checked") && $("#cMidiaVideo").is(":checked")) {
      t = t.concat("áudio e vídeo");
    } else if ($("#cMidiaAudio").is(":checked")) {
      t = t.concat("áudio");
    } else if ($("#cMidiaVideo").is(":checked")) {
      t = t.concat("vídeo");
    }

    if ($("#rEntregouMidiaS").is(":checked")) {
      t = t.concat(", e que o material foi entregue na Delegacia de Polícia.");
    } else {
      t = t.concat(". " + $("#taLocalMidia").val() + ".");
    }

    t = " " + removerPontoDuplicado(t) + " ";
    return t;
  }

  return "";
}

function criaParagrafoDependencia() {
  if ($("#rDependenciaN").is(":checked"))
    return "A vítima informa que não depende financeiramente do suspeito.";

  return "A vítima informa que depende financeiramente do suspeito.";
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

  // Info MPU
  if ($("#cOutrosHistorico1").is(":checked")) {
    if ($("#iLocalInfo").val()) {
      $("#iLocalInfo").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iLocalInfo").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }

    if ($("#iPrazoInfo").val()) {
      $("#iPrazoInfo").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iPrazoInfo").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }
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
  }

  // Provas Complementares
  if ($("#cOutrosHistorico3").is(":checked")) {
    if ($("#iLocalProvas").val()) {
      $("#iLocalProvas").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iLocalProvas").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }

    if ($("#iPrazoProvas").val()) {
      $("#iPrazoProvas").css("border-color", "#ced4da");
    } else {
      warning = true;
      $("#iPrazoProvas").css("border-color", "red");
      if (!ok) ok = "lOutrosHistorico";
    }
  } else {
    $("#iLocalProvas").css("border-color", "#ced4da");
    $("#iPrazoProvas").css("border-color", "#ced4da");
  }

  if (
    $("#cOutrosHistorico3").is(":checked") &&
    $("#cOutrosHistorico3Email").is(":checked") &&
    (!$("#iEmailProvas").val() || $("#iEmailProvas").val() == "@pc.rs.gov.br")
  ) {
    warning = true;
    $("#iEmailProvas").css("border-color", "red");
    if (!ok) ok = "lOutrosHistorico";
  } else {
    $("#iEmailProvas").css("border-color", "#ced4da");
  }

  if (
    $("#cOutrosHistorico3").is(":checked") &&
    $("#cOutrosHistorico3Fone").is(":checked") &&
    (!$("#iFoneProvas").val() || $("#iFoneProvas").val() == "(51) 9999-99999")
  ) {
    warning = true;
    $("#iFoneProvas").css("border-color", "red");
    if (!ok) ok = "lOutrosHistorico";
  } else {
    $("#iFoneProvas").css("border-color", "#ced4da");
  }

  if (warning) {
    $("#aOutrosHistorico").show();
  } else {
    $("#aOutrosHistorico").hide();
  }

  if (
    $("#cOutrosHistorico3").is(":checked") &&
    !$("#cOutrosHistorico3Fone").is(":checked") &&
    !$("#cOutrosHistorico3Email").is(":checked")
  ) {
    $("#aOutrosHistoricoFoneEmail").show();
    if (!ok) ok = "lOutrosHistorico";
  } else {
    $("#aOutrosHistoricoFoneEmail").hide();
  }

  return ok;
}

function criaParagrafoOrientacoesHistorico() {
  let t = " ";

  // Info MPU
  if ($("#cOutrosHistorico1").is(":checked")) {
    t = t.concat("Orientada a contatar o ");
    t = t.concat($("#iLocalInfo").val());
    t = t.concat(" para obter informações da MPU em até ");
    t = t.concat($("#iPrazoInfo").val());
    t = t.concat(" horas. ");
  }

  // Descumprimento MPU / Revogação MPU
  if ($("#cOutrosHistorico2").is(":checked")) {
    t = t.concat(
      "Orientada a registrar nova ocorrência, para novos encaminhamentos, caso houver descumprimento da MPU, e orientada a entrar em contato com "
    );
    t = t.concat($("#iLocalRevogar").val());
    t = t.concat(" caso deseje a revogação da medida. ");
  }

  // Provas Complementares
  if ($("#cOutrosHistorico3").is(":checked")) {
    t = t.concat("Orientada a encaminhar ");
    t = t.concat($("#iLocalProvas").val());
    t = t.concat(" no prazo de ");
    t = t.concat($("#iPrazoProvas").val());
    t = t.concat(" dias úteis, provas complementares caso surjam, através ");

    if (
      $("#cOutrosHistorico3Email").is(":checked") &&
      $("#cOutrosHistorico3Fone").is(":checked")
    ) {
      t = t.concat("do E-mail ");
      t = t.concat($("#iEmailProvas").val());
      t = t.concat(" e do Whatsapp ");
      t = t.concat($("#iFoneProvas").val());
    } else if ($("#cOutrosHistorico3Email").is(":checked")) {
      t = t.concat("do E-mail ");
      t = t.concat($("#iEmailProvas").val());
    } else if ($("#cOutrosHistorico3Fone").is(":checked")) {
      t = t.concat("do Whatsapp ");
      t = t.concat($("#iFoneProvas").val());
    }

    t = t.concat(".");
  }

  return t;
}

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
                O <strong>Sistema de Apoio para Geração de Históricos e Termos de Informações</strong>, 
                chamado <strong>HiBO</strong> (acrônimo de <span class="text-primary">Hi</span>stórico de 
                <span class="text-primary">B</span>oletim de <span class="text-primary">O</span>corrência) é 
                um sistema de apoio na construção de históricos e termos de informações para boletins de ocorrência 
                em casos de violência doméstica e familiar. O programa auxilia a construção dos textos
                por meio de uma sequência de perguntas fundamentada no 
                <a href="https://atos.cnj.jus.br/atos/detalhar/3218" target="_blank" class="text-primary">
                <span>Formulário Nacional de Avaliação de Risco</span></a>.
              </p>

              <p class="mt-3 small">
                Por motivos de segurança, <span class="text-danger"><strong>os dados inseridos nos campos do formulário não são
                salvos</strong></span>, sendo que os mesmos serão perdidos após o fechamento da aba do navegador ou caso
                a página seja recarregada pelo usuário. Também por motivos de segurança, <span class="text-danger"><strong>nenhum 
                dado inserido no formulário é enviado para qualquer servidor</strong></span>, sendo que os dados informados
                permanecerão somente no navegador de modo temporário até o momento que o usuário saia
                da página ou a recarregue. Deste modo, buscamos que o programa seja apenas uma <strong>ferramenta de apoio</strong>,
                sendo que os <strong>dados privados permanecem de modo temporário exclusivamente no computador do usuário que está 
                realizando o registro</strong>.
              
              <h4 class="mt-4">Contato</h4>
              <p class="small mt-3">
                Para mais informações sobre o programa, entre em contato através do email 
                <a class="text-primary" href="mailto:hibo.app@gmail.com"><span>hibo.app@gmail.com</span></a>.
                Você também pode visitar o nosso repositório no GitHub no seguinte endereço  
                <a href="https://github.com/msfagundes/hibo" target="_blank" class="text-primary"><span>
                https://github.com/msfagundes/hibo</span></a>.
              </p>
              
              <h4 class="mt-4">Licença</h4>
              
              <p class="small mt-3">
                <span>HiBO</span> (antes chamado HBO) é um software livre; você pode redistribuí-lo e/ou
                modificá-lo dentro dos termos da <span>Licença Pública Geral GNU</span> como
                publicada pela Free Software Foundation (FSF); na versão 3 da
                Licença, ou (a seu critério) qualquer versão posterior.

                Este programa é distribuído na esperança de que possa ser útil,
                mas <span>SEM NENHUMA GARANTIA</span>; sem uma garantia implícita de <span>ADEQUAÇÃO</span>
                a qualquer <span>MERCADO</span> ou <span>APLICAÇÃO EM PARTICULAR</span>. Veja a
                Licença Pública Geral GNU para maiores detalhes.

                Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
                com este programa, Caso não tenha, veja em 
                <a href="https://www.gnu.org/licenses/" target="_blank" class="text-primary">
                <span>http://www.gnu.org/licenses/</span></a>.
              </p>`,
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
                        <td>Ocorrência apresentada por órgão de segurança pública?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch1" id="ch1">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct1" id="ct1">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Dados da vítima</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch2" id="ch2">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct2" id="ct2">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Relacionamento entre a vítima e o suspeito</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch3" id="ch3">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct3" id="ct3">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>As partes vivem na mesma residência?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch4" id="ch4">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct4" id="ct4">
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Deseja incluir filhos da vítima no histórico?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch5" id="ch5">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct5" id="ct5">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">6</th>
                        <td>Conduta delitiva</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch6" id="ch6">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct6" id="ct6">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">7</th>
                        <td>Há lesão corporal na vítima?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch7" id="ch7">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct7" id="ct7">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">8</th>
                        <td>Há testemunhas?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch8" id="ch8">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct8" id="ct8">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">9</th>
                        <td>A vítima deseja representar?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch9" id="ch9">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct9" id="ct9">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">10</th>
                        <td>A vítima solicita Medida Protetiva de Urgência?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch10" id="ch10">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct10" id="ct10">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">11</th>
                        <td>Há delito de ação penal privada?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch11" id="ch11">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct11" id="ct11">
                            </div>
                        </td>
                        </tr>

                       

                        <tr>
                        <th scope="row">12</th>
                        <td>Há armas no ARM/SINARM em nome do suspeito?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch12" id="ch12">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct12" id="ct12">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">13</th>
                        <td>O suspeito usou ou ameaçou usar arma de fogo?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch13" id="ch13">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct13" id="ct13">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">14</th>
                        <td>O suspeito já obrigou a vítima a praticar relações?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch14" id="ch14">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct14" id="ct14">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">15</th>
                        <td>Já registrou ocorrência policial contra o suspeito?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch15" id="ch15">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct15" id="ct15">
                            </div>
                        </td>
                        </tr>


                        <tr>
                        <th scope="row">16</th>
                        <td>Paradeiro do suspeito</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch16" id="ch16">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct16" id="ct16">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">17</th>
                        <td>Vícios do suspeito</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch17" id="ch17">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct17" id="ct17">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">18</th>
                        <td>Os fatos foram registrados através de áudio ou vídeo?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch18" id="ch18">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct18" id="ct18">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">19</th>
                        <td>A vítima depende financeiramente do suspeito?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch19" id="ch19">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct19" id="ct19">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">20</th>
                        <td>A vítima possui alguma deficiência?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch20" id="ch20">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct20" id="ct20">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">21</th>
                        <td>A vítima deseja ser abrigada?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch21" id="ch21">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct21" id="ct21">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">22</th>
                        <td>A vítima solicita auxílio para buscar seus pertences?</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch22" id="ch22">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct22" id="ct22">
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">23</th>
                        <td>Orientações a serem incluídas no histórico</td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ch23" id="ch23">
                            </div>
                        </td>
                        <td>
                            <div class="form-check text-center">
                                <input class="form-check-input my-0" type="checkbox" value="ct23" id="ct23">
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
            localStorage.setItem(`ch${i}`, i <= 12 || i == 23 ? true : false);
            localStorage.setItem(`ct${i}`, i <= 2 || i == 23 ? false : true);
            document.getElementById(`ch${i}`).checked =
              localStorage.getItem(`ch${i}`) === "true" ? true : false;
            document.getElementById(`ct${i}`).checked =
              localStorage.getItem(`ct${i}`) === "true" ? true : false;
            document.getElementById(`ch${i}`).disabled =
              disabledConfig.includes(i) ? true : false;
            document.getElementById(`ct${i}`).disabled = true;
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
                `ch${i}`,
                document.getElementById(`ch${i}`).checked ? true : false
              );
            });
          }
        },
      },
    },
  });

  localConfig.forEach((i) => {
    document.getElementById(`ch${i}`).checked =
      localStorage.getItem(`ch${i}`) === "true" ? true : false;
    document.getElementById(`ct${i}`).checked =
      localStorage.getItem(`ct${i}`) === "true" ? true : false;
    document.getElementById(`ch${i}`).disabled = disabledConfig.includes(i)
      ? true
      : false;
    document.getElementById(`ct${i}`).disabled = true;
  });
});

var localConfig = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
];
var disabledConfig = [1, 2, 3, 4, 5, 6, 9, 10, 12, 23];

function inicializaConfig() {
  localConfig.forEach((i) => {
    if (!localStorage.getItem(`ch${i}`))
      localStorage.setItem(`ch${i}`, i <= 12 || i == 23 ? true : false);
    if (!localStorage.getItem(`ct${i}`))
      localStorage.setItem(`ct${i}`, i <= 2 || i == 23 ? false : true);
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
