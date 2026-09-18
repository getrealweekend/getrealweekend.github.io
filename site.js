(() => {
  const measurementId = window.GET_REAL_GA_ID;
  if (measurementId && /^G-[A-Z0-9]+$/.test(measurementId)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
  }

  const track = (eventName) => {
    if (typeof window.gtag === "function") window.gtag("event", eventName);
  };
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => track(element.dataset.track));
  });

  const checkbox = document.querySelector("#human-check");
  const button = document.querySelector("#reveal-email");
  const email = document.querySelector("#email-address");
  checkbox.addEventListener("change", () => { button.disabled = !checkbox.checked; });
  button.addEventListener("click", () => {
    if (!checkbox.checked) return;
    const address = ["getrealweekend", "gmail.com"].join("@");
    email.textContent = address;
    email.href = `mailto:${address}`;
    email.hidden = false;
    checkbox.closest("label").hidden = true;
    button.hidden = true;
  });
})();
