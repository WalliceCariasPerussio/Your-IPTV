// Determina o ambiente baseado na variável de ambiente NODE_ENV.
// No ambiente da Vercel, NODE_ENV será "production".
var env = process.env.NODE_ENV === 'production' ? 'beamup' : 'local';

// Configurações padrão do addon.
var config = {
    addon: 'started',
};

// Define as configurações específicas para cada ambiente (produção ou local).
switch (env) {
    // Configurações para o ambiente de produção.
    case 'beamup':
        config.port = process.env.PORT; // Porta fornecida automaticamente pela Vercel.
        config.local = "https://your-production-url.com"; // Atualize com a URL correta de produção.
        break;

    // Configurações para o ambiente local (desenvolvimento).
    case 'local':
        config.port = 3649; // Porta padrão para o ambiente local.
        config.local = "http://127.0.0.1:" + config.port; // URL local.
        break;
}

// Exporta o objeto de configuração para ser utilizado em outras partes da aplicação.
module.exports = config;
