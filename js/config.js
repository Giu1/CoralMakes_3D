/**
 * FORMA — site config
 * 1. Put your email in ownerEmail (FormSubmit.co, free, works on GitHub Pages).
 *    The first real submission sends you a confirmation link — click it once.
 * 2. Or use a Formspree form id instead (https://formspree.io).
 */
window.FORMA_CONFIG = {
  ownerEmail: "",
  formspreeId: "",
  instagram: "",
  shopYear: "2026",
  quote: {
    currency: "EUR",
    minPrice: 8,
    markup: 2.15,
    setupFee: 3.5,
    hourlyMachine: 4.5,
    laborHour: 12,
    waste: 0.12,
    cm3PerHour: 18,
    bed: { x: 330, y: 320, z: 325 },
    materials: {
      pla: { density: 1.24, pricePerKg: 22 },
      petg: { density: 1.27, pricePerKg: 28 }
    }
  }
};
