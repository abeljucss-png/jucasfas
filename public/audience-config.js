window.OPINIA_REAL_AUDIENCE = Object.assign({
  endpoint: '',
  provider: '',
  popupDelayMs: 45000
}, window.OPINIA_REAL_AUDIENCE || {});

/*
  endpoint: URL HTTPS do seu backend/automação de captura.
  provider: identificador futuro, por exemplo mailchimp, brevo ou convertkit.
  Nunca coloque chaves privadas de provedores neste arquivo.
*/