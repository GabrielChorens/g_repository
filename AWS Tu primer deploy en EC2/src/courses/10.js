export default {
    title: "10  Deployando nuestra aplicación NodeJS",
    videoId: "5TN_g53XeOg",
    notes: [
        { type: "text", content: "Ahora ya sabemos cómo arrancar un servidor, pero lo verdaderamente interesante es tener una aplicación funcionando en ese servidor." },
        { type: "text", content: "En esta lección vamos a desplegar una sencilla aplicación escrita con NodeJS, aunque lo que vamos a ver es independiente del lenguaje en el que se haya programado la aplicación." },
        { type: "text", content: "Para arrancar la aplicación, usaremos " },
        { type: "named-link", content: "este script", url: "https://gist.github.com/sdecandelario/19199d1ed55e737722cfc2a8dcf059ee" },
        {
            type: "code", content: `#!/bin/bash
apt-get update
apt-get install -y nodejs npm
git clone https://github.com/juanmaguitar/fullstack-mini-project.git "$HOME/application"
cd "$HOME/application" || exit 0
git checkout 99c6efa
npm install

cat <<EOT > /etc/rc.local
#!/bin/bash
cd "$HOME/application"
nodejs app.js &
exit 0
EOT

nodejs app.js &` }
    ]
}; 