/* Roda no <head>, antes da primeira pintura.
   Por enquanto o site é só tema escuro: o tema claro continua no CSS
   ([data-theme="light"]), mas não há botão para trocar e preferências
   antigas salvas são ignoradas. Para reativar, volte a ler localStorage "pm-theme". */
document.documentElement.setAttribute("data-theme", "dark");
