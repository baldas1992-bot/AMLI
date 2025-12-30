const euroFormatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function toNumber(value) {
  if (value === undefined || value === null) return 0;
  const parsed = parseFloat(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function toCents(value) {
  return Math.round(toNumber(value) * 100);
}

function applyPercentage(amountCents, percentage) {
  return Math.round(amountCents * (percentage / 100));
}

function formatEuroFromCents(cents) {
  return euroFormatter.format(cents / 100);
}

function calculateRendita(form) {
  if (!form) return;

  const retribuzioneCents = toCents(form.retribuzione.value);
  const grado = Math.min(Math.max(toNumber(form.grado.value), 0), 100) / 100;
  const quotaBiologicaPerc = Math.max(toNumber(form.quotaBiologica.value), 0);
  const quotaPatrimonialePerc = Math.max(toNumber(form.quotaPatrimoniale.value), 0);
  const coeffPatrimoniale = Math.max(toNumber(form.coeffPatrimoniale.value), 0);
  const rivalutazionePerc = Math.max(toNumber(form.rivalutazione.value), 0);

  const quotaBiologicaAnnua = Math.round(
    applyPercentage(retribuzioneCents, quotaBiologicaPerc) * grado
  );
  const quotaPatrimonialeAnnua = Math.round(
    applyPercentage(retribuzioneCents, quotaPatrimonialePerc) * grado * coeffPatrimoniale
  );

  const totaleAnnua = Math.round(
    (quotaBiologicaAnnua + quotaPatrimonialeAnnua) * (1 + rivalutazionePerc / 100)
  );

  const totaleMensile = Math.round(totaleAnnua / 12);

  const renditaResults = document.getElementById("rendita-results");
  if (!renditaResults) return;

  const mapping = {
    "rendita-annua": totaleAnnua,
    "rendita-mensile": totaleMensile,
    "quota-biologica": quotaBiologicaAnnua,
    "quota-patrimoniale": quotaPatrimonialeAnnua,
  };

  Object.entries(mapping).forEach(([dataKey, value]) => {
    const el = renditaResults.querySelector(`[data-result="${dataKey}"]`);
    if (el) el.textContent = formatEuroFromCents(value);
  });
}

function calculateDanno(form) {
  if (!form) return;

  const grado = Math.min(Math.max(toNumber(form.grado.value), 0), 100);
  const valorePuntoCents = toCents(form.valorePunto.value);
  const coeffEta = Math.max(toNumber(form.coeffEta.value), 0);
  const rivalutazionePerc = Math.max(toNumber(form.rivalutazione.value), 0);

  const valorePuntoApplicato = Math.round(valorePuntoCents * coeffEta);
  const indennizzo = Math.round(valorePuntoApplicato * grado);
  const indennizzoRivalutato = Math.round(indennizzo * (1 + rivalutazionePerc / 100));

  const dannoResults = document.getElementById("danno-results");
  if (!dannoResults) return;

  const mapping = {
    "danno-totale": indennizzoRivalutato,
    "danno-punto": valorePuntoApplicato,
  };

  Object.entries(mapping).forEach(([dataKey, value]) => {
    const el = dannoResults.querySelector(`[data-result="${dataKey}"]`);
    if (el) el.textContent = formatEuroFromCents(value);
  });
}

function handleRenditaCalculation(event) {
  event.preventDefault();
  calculateRendita(event.currentTarget);
}

function handleDannoCalculation(event) {
  event.preventDefault();
  calculateDanno(event.currentTarget);
}

function attachCalculatorHandlers() {
  const renditaForm = document.getElementById("rendita-form");
  const dannoForm = document.getElementById("danno-form");

  if (renditaForm) {
    calculateRendita(renditaForm);
    renditaForm.addEventListener("submit", handleRenditaCalculation);
    renditaForm.addEventListener("reset", () => {
      setTimeout(() => calculateRendita(renditaForm), 0);
    });
  }

  if (dannoForm) {
    calculateDanno(dannoForm);
    dannoForm.addEventListener("submit", handleDannoCalculation);
    dannoForm.addEventListener("reset", () => {
      setTimeout(() => calculateDanno(dannoForm), 0);
    });
  }
}

function initializeCalculators() {
  attachCalculatorHandlers();
}

document.addEventListener("DOMContentLoaded", initializeCalculators);
