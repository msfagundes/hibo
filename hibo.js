/**
 * title="HBO"
 * version="1.5"
 * date="27/09/2023"
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
 *
 **/

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

$("#divOutroRelacionamento").hide();
$("#divTempoSeparados").hide();
$("#divFilhos").hide();
$("#divAtendimento").hide();
$("#divLocalAtendimento").hide();
$("#divTestemunha").hide();
$("#spanRemoverTestemunha").hide();
$("#divAcaoPenal").hide();
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
$("#divHistorico").hide();
$("#divTermo").hide();

$("#aTempoRelacionamento").hide();
$("#aOutroRelacionamento").hide();
$("#aTempoSeparados").hide();
$("#aConduta").hide();
$("#aLocalAtendimento").hide();
$("#aListaTestemunhas").hide();
$("#aAcaoPenal").hide();
$("#aAcaoPrivada").hide();
$("#aParadeiro").hide();
$("#aOutrosVicios").hide();
$("#aAmeacaArmaUsou").hide();
$("#aAmeacaArmaAmeacou").hide();
$("#aAmeacaArmaFacil").hide();
$("#aAmeacaArmaNaoSabe").hide();
$("#aRelacoesSexuais").hide();
$("#aRelacoesSexuaisNaoSabe").hide();
$("#aLocalAlbergue").hide();
$("#aQuandoOnde").hide();

$("#rRelacionamento1").click(function () {
  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divSeparados").show();
  $("#aOutroRelacionamento").hide();

  if ($("#sTempoRelacionamento option:selected").text() == "por") {
    $("#lTempoRelacionamento").text("Por quanto tempo viveram em união estável?");
  } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
    $("#lTempoRelacionamento").text("Desde quando vivem em união estável?");
  } else {
    $("#lTempoRelacionamento").text("Há quanto tempo vivem em união estável?");
  }

  if ($("#rSeparadosS").is(":checked")) {
    $("#divTempoSeparados").show();
  } else {
    $("#divTempoSeparados").hide();
  }
});

$("#rRelacionamento2").click(function () {
  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divSeparados").show();
  $("#aOutroRelacionamento").hide();

  if ($("#sTempoRelacionamento option:selected").text() == "por") {
    $("#lTempoRelacionamento").text("Por quanto tempo estiveram casados?");
  } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
    $("#lTempoRelacionamento").text("Desde quando estão casados?");
  } else {
    $("#lTempoRelacionamento").text("Há quanto tempo estão casados?");
  }

  if ($("#rSeparadosS").is(":checked")) {
    $("#divTempoSeparados").show();
  } else {
    $("#divTempoSeparados").hide();
  }
});

$("#rRelacionamento4").click(function () {
  $("#divOutroRelacionamento").hide();
  $("#divTempoRelacionamento").show();
  $("#divSeparados").show();
  $("#aOutroRelacionamento").hide();

  if ($("#sTempoRelacionamento option:selected").text() == "por") {
    $("#lTempoRelacionamento").text("Por quanto tempo estiveram namorando?");
  } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
    $("#lTempoRelacionamento").text("Desde quando estão namorando?");
  } else {
    $("#lTempoRelacionamento").text("Há quanto tempo estão namorando?");
  }

  if ($("#rSeparadosS").is(":checked")) {
    $("#divTempoSeparados").show();
  } else {
    $("#divTempoSeparados").hide();
  }
});

$("#rRelacionamento3").click(function () {
  $("#divOutroRelacionamento").show();
  $("#divTempoRelacionamento").hide();
  $("#aTempoRelacionamento").hide();
  $("#divSeparados").hide();
  $("#divTempoSeparados").hide();
  $("#aTempoSeparados").hide();
});

$("#rSeparadosN").click(function () {
  $("#divTempoSeparados").hide();
  $("#aTempoSeparados").hide();
});

$("#rSeparadosS").click(function () {
  $("#divTempoSeparados").show();
});

$("#sTempoSeparados").change(function () {
  let t = $("#sTempoSeparados option:selected").text();
  switch (t) {
    case "desde":
      $("#iTempoSeparados").attr("placeholder", "janeiro de 2020");
      break;
    case "há":
      $("#iTempoSeparados").attr("placeholder", "dois meses");
      break;
  }
});

$("#sTempoRelacionamento").change(function () {
  let t = $("#sTempoRelacionamento option:selected").text();
  switch (t) {
    case "desde":
      $("#iTempoRelacionamento").attr("placeholder", "janeiro de 2019");
      if ($("#rRelacionamento1").is(":checked")) {
        $("#lTempoRelacionamento").text(
          "Há quanto tempo vivem em união estável?"
        );
      } else if ($("#rRelacionamento2").is(":checked")) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão casados?");
      } else if ($("#rRelacionamento4").is(":checked")) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão namorando?");
      }
      break;
    case "há":
      $("#iTempoRelacionamento").attr(
        "placeholder",
        "dois anos e quatro meses"
      );
      if ($("#rRelacionamento1").is(":checked")) {
        $("#lTempoRelacionamento").text(
          "Há quanto tempo vivem em união estável?"
        );
      } else if ($("#rRelacionamento2").is(":checked")) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão casados?");
      } else if ($("#rRelacionamento4").is(":checked")) {
        $("#lTempoRelacionamento").text("Há quanto tempo estão namorando?");
      }
      break;
    case "por":
      $("#iTempoRelacionamento").attr("placeholder", "dez anos");
      if ($("#rRelacionamento1").is(":checked")) {
        $("#lTempoRelacionamento").text(
          "Por quanto tempo viveram em união estável?"
        );
      } else if ($("#rRelacionamento2").is(":checked")) {
        $("#lTempoRelacionamento").text("Por quanto tempo estiveram casados?");
      } else if ($("#rRelacionamento4").is(":checked")) {
        $("#lTempoRelacionamento").text(
          "Por quanto tempo estiveram namorando?"
        );
      }
      break;
  }
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
  $("#aLocalAtendimento").hide();
});

$("#rAtendimentoS").click(function () {
  $("#divLocalAtendimento").show();
});

$("#rTestemunhaN").click(function () {
  $("#divTestemunha").hide();
  $("#aListaTestemunhas").hide();
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

$("#rRepresentacaoS").click(function () {
  $("#taAcaoPenal").text("A vítima deseja representar.");
  $("#divAcaoPenal").show();
});

$("#rRepresentacaoN").click(function () {
  $("#taAcaoPenal").text(
    "A vítima não deseja representar e fica ciente do prazo decadencial de seis meses para fazê-lo."
  );
  $("#divAcaoPenal").hide();
});

$("#rAcaoPrivadaS").click(function () {
  $("#divAcaoPrivada").show();
});

$("#rAcaoPrivadaN").click(function () {
  $("#divAcaoPrivada").hide();
});

$("#cVicio6").click(function () {
  if ($("#cVicio6").is(":checked")) {
    $("#divOutrosVicios").show();
  } else {
    $("#divOutrosVicios").hide();
    $("#aOutrosVicios").hide();
  }
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
});

$("#rAmeacaArmaSU").click(function () {
  $("#divAmeacaArmaUsou").show();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").hide();
  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();
});

$("#rAmeacaArmaSA").click(function () {
  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").show();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").hide();
  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();
});

$("#rAmeacaArmaSF").click(function () {
  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").show();
  $("#divAmeacaArmaNaoSabe").hide();
  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();
});

$("#rAmeacaArmaNS").click(function () {
  $("#divAmeacaArmaUsou").hide();
  $("#divAmeacaArmaAmeacou").hide();
  $("#divAmeacaArmaFacil").hide();
  $("#divAmeacaArmaNaoSabe").show();
  $("#aAmeacaArmaUsou").hide();
  $("#aAmeacaArmaAmeacou").hide();
  $("#aAmeacaArmaFacil").hide();
  $("#aAmeacaArmaNaoSabe").hide();
});

$("#rRelacoesSexuaisS").click(function () {
  $("#divRelacoesSexuaisNaoSabe").hide();
  $("#divRelacoesSexuais").show();
  $("#divViolenciaGraveAmeaca").show();
  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();
});

$("#rRelacoesSexuaisN").click(function () {
  $("#divRelacoesSexuaisNaoSabe").hide();
  $("#divRelacoesSexuais").hide();
  $("#divViolenciaGraveAmeaca").hide();
  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();
});

$("#rRelacoesSexuaisNS").click(function () {
  $("#divRelacoesSexuais").hide();
  $("#divViolenciaGraveAmeaca").hide();
  $("#divRelacoesSexuaisNaoSabe").show();
  $("#aRelacoesSexuais").hide();
  $("#aRelacoesSexuaisNaoSabe").hide();
});

let funcViolenciaGraveAmeaca = function () {
  let text =
    "A vítima informa que foi obrigada a praticar relações sexuais com o acusado, sem violência ou grave ameaça. O fato ocorreu no ...";
  if ($("#cViolencia").is(":checked")) {
    if ($("#cGraveAmeaca").is(":checked")) {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o acusado mediante grave ameaça e violência. O fato ocorreu no ...";
    } else {
      text =
        "A vítima informa que foi obrigada a praticar relações sexuais com o acusado mediante violência. O fato ocorreu no ...";
    }
  } else if ($("#cGraveAmeaca").is(":checked")) {
    text =
      "A vítima informa que foi obrigada a praticar relações sexuais com o acusado mediante grave ameaça. O fato ocorreu no ...";
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

$("#rAlbergueN").click(function () {
  $("#divLocalAlbergue").show();
});

$("#rAlbergueS").click(function () {
  $("#divLocalAlbergue").hide();
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

  // VERIFICA OS CAMPOS
  let ok = null;
  ok = verificaCamposRelacionamento(ok);
  ok = verificaCamposConduta(ok);
  ok = verificaLesaoAtendimento(ok);
  ok = verificaCamposTestemunhas(ok);
  ok = verificaCamposAcaoPenal(ok);
  ok = verificaCamposAcaoPrivada(ok);
  ok = verificaCamposParadeiro(ok);
  ok = verificaCamposVicios(ok);
  ok = verificaCamposAmeacaArmas(ok);
  ok = verificaCamposRelacoesSexuais(ok);
  ok = verificaCamposAlbergue(ok);

  if (ok) {
    $("#divHistorico").hide();
    $("#divTermo").hide();
    document.getElementById(ok).scrollIntoView();
    return false;
  }

  // GERA OS PARAGRAFOS DO HISTORICO
  $("#taHistorico").append(criaParagrafoRelacionamento());
  $("#taHistorico").append(criaParagrafoProle());
  $("#taHistorico").append(criaParagrafoConduta());
  $("#taHistorico").append(criaParagrafoLesaoAtendimento());
  $("#taHistorico").append(criaParagrafoTestemunhas());
  $("#taHistorico").append(criaParagrafoAcaoPenal());
  $("#taHistorico").append(criaParagrafoAcaoPrivada());
  $("#taHistorico").append(criaParagrafoMedidasProtetivas());
  $("#taHistorico").append(criaParagrafoArmas());

  // GERA OS PARAGRAFOS DO TERMO DE DECLARAÇÕES
  $("#taTermo").append(criaParagrafoRelacionamento());
  $("#taTermo").append(criaParagrafoProle());
  $("#taTermo").append(criaParagrafoConduta());
  $("#taTermo").append(criaParagrafoLesaoAtendimento());
  $("#taTermo").append(criaParagrafoTestemunhas());
  $("#taTermo").append(criaParagrafoAcaoPenal());
  $("#taTermo").append(criaParagrafoAcaoPrivada());
  $("#taTermo").append(criaParagrafoMedidasProtetivas());
  $("#taTermo").append(criaParagrafoArmas());

  $("#taTermo").append(criaParagrafoParadeiro());
  $("#taTermo").append(criaParagrafoVicios());
  $("#taTermo").append(criaParagrafoAmeacaArmas());
  $("#taTermo").append(criaParagrafoRelacoesSexuais());
  $("#taTermo").append(criaParagrafoDeficiencia());
  $("#taTermo").append(criaParagrafoAlbergue());
  $("#taTermo").append(criaParagrafoBuscaPertences());
  $("#taTermo").append(criaParagrafoMediar());

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

  bootbox.confirm({
    message:
      "<h4>REVISE O TEXTO GERADO.</h4><p>Caso necessário, é possível realizar alterações diretamente na caixa de texto do histórico e do termo de declarações.</p>",
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

function verificaCamposRelacionamento(ok) {
  if (!$("#rRelacionamento3").is(":checked")) {
    if ($("#iTempoRelacionamento").val()) {
      $("#aTempoRelacionamento").hide();
      $("#iTempoRelacionamento").css("border-color", "#ced4da");
    } else {
      $("#aTempoRelacionamento").show();
      $("#iTempoRelacionamento").css("border-color", "red");
      if (!ok) ok = "iTempoRelacionamento";
    }

    if ($("#rSeparadosS").is(":checked")) {
      if ($("#iTempoSeparados").val()) {
        $("#aTempoSeparados").hide();
        $("#iTempoSeparados").css("border-color", "#ced4da");
      } else {
        $("#aTempoSeparados").show();
        $("#iTempoSeparados").css("border-color", "red");
        if (!ok) ok = "iTempoSeparados";
      }
    } else {
      $("#aTempoSeparados").hide();
    }
  } else {
    let s =
      "Comparece a vítima para noticiar que sofreu violência doméstica e familiar praticada pelo";
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

function criaParagrafoRelacionamento() {
  let t = "";
  if ($("#rRelacionamento1").is(":checked")) {
    t = t.concat(
      "Comparece a vítima para noticiar que sofreu violência doméstica e familiar praticada pelo "
    );
    t = t.concat("companheiro. ");
    t = t.concat("Informa que ");

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("viveu em união estável com o acusado por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("vive em união estável com o acusado desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("vive em união estável com o acusado há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    if ($("#rSeparadosS").is(":checked")) {
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

      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", mas ainda vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(" e não vivem na mesma residência.");
      }
    } else if ($("#rSeparadosN").is(":checked")) {
      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", e que vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(", mas que não vivem na mesma residência.");
      }
    }
  } else if ($("#rRelacionamento2").is(":checked")) {
    t = t.concat(
      "Comparece a vítima para noticiar que sofreu violência doméstica e familiar praticada pelo "
    );
    t = t.concat("marido. ");
    t = t.concat("Informa que ");

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve casada com o acusado por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está casada com o acusado desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está casada com o acusado há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    if ($("#rSeparadosS").is(":checked")) {
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

      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", mas ainda vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(" e não vivem na mesma residência.");
      }
    } else if ($("#rSeparadosN").is(":checked")) {
      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", e que vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(", mas que não vivem na mesma residência.");
      }
    }
  } else if ($("#rRelacionamento4").is(":checked")) {
    t = t.concat(
      "Comparece a vítima para noticiar que sofreu violência doméstica e familiar praticada pelo "
    );
    t = t.concat("namorado. ");
    t = t.concat("Informa que ");

    // POR / PRETÉRITO
    if ($("#sTempoRelacionamento option:selected").text() == "por") {
      t = t.concat("esteve namorando com o acusado por ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
      // DESDE E HÁ / PRESENTE
    } else if ($("#sTempoRelacionamento option:selected").text() == "desde") {
      t = t.concat("está namorando com o acusado desde ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    } else if ($("#sTempoRelacionamento option:selected").text() == "há") {
      t = t.concat("está namorando com o acusado há ");
      let tempoRelacionamento = removerPonto($("#iTempoRelacionamento").val());
      t = t.concat(tempoRelacionamento);
    }

    if ($("#rSeparadosS").is(":checked")) {
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

      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", mas ainda vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(" e não vivem na mesma residência.");
      }
    } else if ($("#rSeparadosN").is(":checked")) {
      if ($("#rMesmaCasaS").is(":checked")) {
        t = t.concat(", e que vivem na mesma residência.");
      } else if ($("#rMesmaCasaN").is(":checked")) {
        t = t.concat(", mas que não vivem na mesma residência.");
      }
    }
  } else {
    let outroRelacionamento = $("#taOutroRelacionamento").val() + ".";
    t = t.concat(removerPontoDuplicado(outroRelacionamento));
    if ($("#rMesmaCasaS").is(":checked")) {
      t = t.concat(" Informa que vivem na mesma residência.");
    } else if ($("#rMesmaCasaN").is(":checked")) {
      t = t.concat(" Informa que não vivem na mesma residência.");
    }
  }

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
  let s = "A vítima comunica que, NA DATA DO FATO, o acusado";
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
    t =
      "Em relação às lesões, a vítima fica ciente que foi encaminhada para exame no PML. ";

    if ($("#rAtendimentoS").is(":checked")) {
      t = t.concat(
        "A vítima informa que procurou atendimento médico no seguinte local: "
      );
      t = t.concat($("#iLocalAtendimento").val() + ".");
    } else {
      t = t.concat("A vítima informa que não procurou atendimento médico.");
    }
  }

  t = " " + removerPontoDuplicado(t);
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

  let nomes = [];
  let contatos = [];
  let n = Number($("#divListaTestemunhas").children().length);

  for (let i = 1; i <= n; i++) {
    let label = "#divDadosTestemunha-" + i;
    nomes.push(String($(label + " #iNomeTestemunha").val()));
    contatos.push(String($(label + " #iContatoTestemunha").val()));
  }

  let t = " São testemunhas: ";
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
  let t = String($("#taAcaoPenal").val()).trim();
  if (t == "") {
    $("#aAcaoPenal").show();
    $("#taAcaoPenal").css("border-color", "red");
    if (!ok) ok = "lAcaoPenal";
  } else {
    $("#taAcaoPenal").css("border-color", "#ced4da");
    $("#aAcaoPenal").hide();
  }
  return ok;
}

function criaParagrafoAcaoPenal() {
  if ($("#rRepresentacaoN").is(":checked")) {
    return " A vítima não deseja representar e fica ciente do prazo decadencial de seis meses para fazê-lo.";
  }

  let t = String($("#taAcaoPenal").val()).trim() + ".";
  t = " " + removerPontoDuplicado(t);
  return t;
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

function criaParagrafoMedidasProtetivas() {
  if ($("#rMedidasN").is(":checked")) {
    return " Não solicita medidas protetivas.";
  }
  return " Solicita medidas protetivas.";
}

function criaParagrafoArmas() {
  if ($("#rArmasN").is(":checked")) {
    return " ARM/SINARM: nada localizado em nome do acusado, conforme documentos anexos.";
  }
  return " ARM/SINARM: há registro de arma em nome do acusado, conforme documentos anexos.";
}

function verificaCamposParadeiro(ok) {
  let s =
    "Sobre o paradeiro do acusado, acredita-se que possa ser encontrado na";
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
    t = " Diz que o acusado é viciado em ";
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

function verificaCamposAmeacaArmas(ok) {
  if ($("#rAmeacaArmaSU").is(":checked")) {
    let s = "A vítima informou que o acusado usou arma de fogo ...";
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
    let s = "A vítima informou que o acusado ameaçou usar arma de fogo ...";
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
      "A vítima informou que o acusado tem fácil acesso a arma de fogo ...";
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
      "Quando perguntada sobre o acusado ter usado ou ameaçado usar arma de fogo, ou ter fácil acesso a arma, a vítima respondeu não saber. O motivo de não saber é ...";
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

function verificaCamposAlbergue(ok) {
  if ($("#rAlbergueN").is(":checked")) {
    if ($("#iLocalAlbergue").val()) {
      $("#iLocalAlbergue").css("border-color", "#ced4da");
      $("#aLocalAlbergue").hide();
    } else {
      $("#aLocalAlbergue").show();
      $("#iLocalAlbergue").css("border-color", "red");
      if (!ok) ok = "lLocalAlbergue";
    }
  } else {
    $("#iLocalAlbergue").css("border-color", "#ced4da");
    $("#aLocalAlbergue").hide();
  }

  return ok;
}

function criaParagrafoAlbergue() {
  let t = "Foi oferecido albergamento para a vítima, tendo ela aceitado.";
  if ($("#rAlbergueN").is(":checked")) {
    t = "Foi oferecido albergamento para a vítima, tendo ela recusado; ";
    if ($("#rMedidasS").is(":checked")) {
      t = t.concat("até o deferimento das medidas, ");
    }
    t = t.concat("a vítima informou que ficará no seguinte local: ");
    t = t.concat($("#iLocalAlbergue").val() + ".");
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

function criaParagrafoMediar() {
  if ($("#rMediarN").is(":checked")) {
    return " A vítima diz que não deseja participar do Programa Mediar da Polícia Civil.";
  }
  return " A vítima diz que deseja participar do Programa Mediar da Polícia Civil, sendo informada que haverá avaliação dos requisitos de participação por parte da autoridade policial; caso sejam preenchidos os requisitos, será realizado um contato para confirmar a sua participação no programa.";
}

$("#seguranca").click(function () {
  bootbox.alert({
    size: "large",
    message: `<h4>SEGURANÇA DE DADOS</h4>
                  <p class="mt-4">
                    Por motivos de segurança, <span class="text-danger"><strong>os dados inseridos nos campos do formulário não são
                    salvos</strong></span>, sendo que os mesmos serão perdidos após o fechamento da aba do navegador ou caso
                    a página seja recarregada pelo usuário. Também por motivos de segurança, <span class="text-danger"><strong>nenhum 
                    dado inserido no formulário é enviado para qualquer servidor</strong></span>, sendo que os dados informados
                    permanecerão somente no navegador de modo temporário até o momento que o usuário saia
                    da página ou a recarregue. Deste modo, buscamos que o HiBO seja apenas uma <strong>ferramenta de apoio</strong>,
                    sendo que os <strong>dados privados permanecem exclusivamente no computador do usuário que está 
                    realizando o registro</strong>.
                  </p>`,
  });
});

$("#programa").click(function () {
  bootbox.alert({
    size: "large",
    message: `<h4>O PROGRAMA</h4>
                <p class="mt-4">
                    O <strong>HiBO é um sistema de apoio na construção de históricos e termos de declarações</strong> para boletins de ocorrência 
                    em casos de violência doméstica e familiar, sendo a que a sua primeira versão foi desenvolvida em meados de 2020. 
                    Atualmente, o HiBO se encontra na versão 1.5, havendo incorporado diversas melhorias desde a sua primeira versão.
                  </p>

                  <p>
                    O programa auxilia na construção do texto dos históricos e dos termos de declarações
                    por meio de uma sequência de perguntas necessárias para o completo detalhamento do
                    registro, sendo que parte das perguntas é fundamentada no 
                    <a href="https://atos.cnj.jus.br/atos/detalhar/3218" target="_blank" class="text-primary">
                    <strong>Formulário Nacional de Avaliação de Risco</strong></a>, construído em conjunto pelo Conselho Nacional de 
                    Justiça (CNJ) e o Conselho Nacional do Ministério Público (CNMP) com o intuito de coletar 
                    dados referentes à violência doméstica no Brasil.
                  </p>
                  
                  <p>
                    Para mais informações sobre o programa HiBO, acesse o 
                    <a href="./Manual-HiBO.pdf" target="_blank" class="text-primary"><strong>
                    manual</strong></a> 
                    ou entre em contato através do email 
                    <a class="text-primary" href="mailto:hibo.app@gmail.com"><strong>hibo.app@gmail.com</strong></a>.
                    Você também pode visitar o nosso repositório no GitHub no seguinte endereço  
                    <a href="https://github.com/msfagundes/hibo" target="_blank" class="text-primary"><strong>
                    https://github.com/msfagundes/hibo</strong></a>.
                  </p>`,
  });
});

$("#licenca").click(function () {
  bootbox.alert({
    size: "large",
    message: `<h4>LICENÇA</h4>
                  <h6 class="mt-4"><strong>Author</strong>: Moser Silva Fagundes</h6>
                  <h6><strong>Email</strong>: <a class="text-primary" href="mailto:hibo.app@gmail.com">hibo.app@gmail.com</a></h6>
                  <h6><strong>Repository</strong>: <a href="https://github.com/msfagundes/hibo" target="_blank" class="text-primary">https://github.com/msfagundes/hibo</a></h6>
                  <h6><strong>Version</strong>: 1.5</h6>
                  <h6 class="mb-4"><strong>Date</strong>: 27/09/2023</h6>
                  
                  <p class="small">
                  <strong>HiBO</strong> (in the past named HBO) is free software: 
                    you can redistribute it and/or modify
                    it under the terms of the <strong>
                    GNU General Public License</strong> as published by
                    the Free Software Foundation, either version 3 of the License, or
                    (at your option) any later version.
                    <strong>HiBO</strong> is distributed in the hope that it will be useful,
                    but <strong>WITHOUT ANY WARRANTY</strong>; without even the implied warranty of
                    <strong>MERCHANTABILITY</strong> or <strong>FITNESS FOR A PARTICULAR PURPOSE</strong>.  See the
                    GNU General Public License for more details.
                    You should have received a copy of the GNU General Public License
                    along with <strong>HiBO</strong>.  If not, see 
                    <a href="https://www.gnu.org/licenses/" target="_blank" class="text-primary">
                    <strong>https://www.gnu.org/licenses/</strong></a>.
                  </p>

                  <p class="small">
                    <strong>HiBO</strong> (antes chamado HBO) é um software livre; você pode redistribuí-lo e/ou
                    modificá-lo dentro dos termos da <strong>Licença Pública Geral GNU</strong> como
                    publicada pela Free Software Foundation (FSF); na versão 3 da
                    Licença, ou (a seu critério) qualquer versão posterior.

                    Este programa é distribuído na esperança de que possa ser útil,
                    mas <strong>SEM NENHUMA GARANTIA</strong>; sem uma garantia implícita de <strong>ADEQUAÇÃO</strong>
                    a qualquer <strong>MERCADO</strong> ou <strong>APLICAÇÃO EM PARTICULAR</strong>. Veja a
                    Licença Pública Geral GNU para maiores detalhes.

                    Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
                    com este programa, Caso não tenha, veja em 
                    <a href="https://www.gnu.org/licenses/" target="_blank" class="text-primary">
                    <strong>http://www.gnu.org/licenses/</strong></a>.
                  </p>`,
  });
});
