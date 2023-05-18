
// Définitions des constantes PIXIjs
const application = PIXI.Application;
const app = new application({
    width:912,
    height:512,
    antialias: false
});
let apples = 0
const graphics = PIXI.Graphics;

// Ajout de l'application au body
document.body.appendChild(app.view);

// Background bleu
// app.renderer.background.color = 0x22FFC

function playGame() {

        // Ajout d'un texte test
    let myText = new PIXI.Text(`Je suis Gilbert et j'ai ${apples} pommes`);
    myText.x = 400
    app.stage.addChild(myText);

    // Ajout du background
    const preBackground = PIXI.BaseTexture.from('sprites/background_out_game.png')
    preBackground.scaleMode = 'linear'
    const background = PIXI.Sprite.from(preBackground);
    background.anchor.x = 0.5
    background.anchor.y = 0.5 
    background.x = app.screen.width /2
    background.y = app.screen.height /2
    background.scale.x = 4
    background.scale.y = 4
    app.stage.addChild(background);

    // Ajout de l'arbre
    const preArbre = PIXI.BaseTexture.from('sprites/arbre.png')
    preArbre.scaleMode = 'linear'
    const arbre = PIXI.Sprite.from(preArbre);
    arbre.anchor.x = 0.5
    arbre.anchor.y = 0.5 
    arbre.x = app.screen.width /2
    arbre.y = app.screen.height /2
    arbre.scale.x = 3.9
    arbre.scale.y = 3.9
    app.stage.addChild(arbre);

    // Ajout de la grange
    const preGrange = PIXI.BaseTexture.from('sprites/grange-ouverte.png')
    preGrange.scaleMode = 'linear'
    const grange = PIXI.Sprite.from(preGrange);
    grange.anchor.x = 2.5
    grange.anchor.y = 0.35
    grange.x = app.screen.width /2
    grange.y = app.screen.height /2
    grange.scale.x = 2.5
    grange.scale.y = 2.5
    app.stage.addChild(grange);

    // Ajout de l'alambic
    const preAlambic = PIXI.BaseTexture.from('sprites/alambic_no1_baignoire.png')
    preAlambic.scaleMode = 'linear'
    const alambic = PIXI.Sprite.from(preAlambic);
    alambic.anchor.x = -0.5
    alambic.anchor.y = 0.3
    alambic.x = app.screen.width /2
    alambic.y = app.screen.height /1.5
    alambic.scale.x = 2.9
    alambic.scale.y = 2.9
    app.stage.addChild(alambic);

    // Ajout de la fusée
    const preFusee = PIXI.BaseTexture.from('sprites/fusee.png')
    preFusee.scaleMode = 'linear'
    const fusee = PIXI.Sprite.from(preFusee);
    fusee.anchor.x = -1.6
    fusee.anchor.y = 0.5
    fusee.x = app.screen.width /2
    fusee.y = app.screen.height /1.88
    fusee.scale.x = 4
    fusee.scale.y = 4
    app.stage.addChild(fusee);




    // Gestion de l'interactivité de l'arbre
    background.eventMode = 'dynamic';
    background.buttonMode = true;

    // Création d'un container pour les pommes
    let appless = new PIXI.Container();

    // Fonction asynchrone qui va gérer toute la partie dynamique du jeu
    async function init() {

        // Initialisation de des variables
        let appleFall = 0 // Compteur de pommes sur l'écran
        nbAppleGen = 10 // Nb de pommes générées intialement
        nbAppleGenRuns = 0 // Compteur de pommes 
        let allApples = new PIXI.Container(); // Container pour gérer les pommes
        let appleBehaviourControl = [] // Liste de données par pomme
            
        // Fonction qui génère les pommes initiales
        function genApples(nbAppleGenRuns) {
            for(let i = 0; i < nbAppleGen; i++) {
                let apple = PIXI.Sprite.from('sprites/apple_asset.png');
                apple.x = Math.round(Math.random() * (app.screen.width - 100))
                apple.y = Math.round(Math.random() * (app.screen.height - 100))
                appless.addChild(apple)
                
                
                
                // Génération d'une liste qui stocke des données pour chaque pomme
                for(let i = 0; i < nbAppleGen; i++) {
                    let pushingApple = false
                    let appleHasFallen = false
                    appleBehaviourControl.push([pushingApple, appleHasFallen])
                                }
            }
                allApples.addChild(appless);
                nbAppleGenRuns += 1 
            }
            // Fonction qui génère 1 pomme (utilisation au click pour garder un nombre de pommes constant dans l'arbre)
            function gen1Apple() {
                let apple = PIXI.Sprite.from('sprites/apple_asset.png');
                apple.x = Math.round(Math.random() * (app.screen.width - 100))
                apple.y = Math.round(Math.random() * (app.screen.height - 100))
                appless.addChild(apple)
                allApples.addChild(appless)
                let pushingApple = false
                let appleHasFallen = false
                appleBehaviourControl.push([pushingApple, appleHasFallen])
            }
            app.stage.addChild(allApples);
            genApples(nbAppleGenRuns);
            // const texture = await PIXI.Assets.load('sprites/sprites.png')
            // Données json pour l'animation de gilbert
            const gilbertData = {"frames": {

                "Walk0.png":
                {
                    "frame": {"x":0,"y":0,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk1.png":
                {
                    "frame": {"x":0,"y":21,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk2.png":
                {
                    "frame": {"x":0,"y":42,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk3.png":
                {
                    "frame": {"x":0,"y":63,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk4.png":
                {
                    "frame": {"x":0,"y":84,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk5.png":
                {
                    "frame": {"x":0,"y":105,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                },
                "Walk6.png":
                {
                    "frame": {"x":0,"y":126,"w":16,"h":21},
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {"x":0,"y":0,"w":16,"h":21},
                    "sourceSize": {"w":16,"h":21},
                    "anchor": {"x":0.5,"y":0.5}
                }},
                animations: {
                    walk: ["Walk1.png","Walk2.png","Walk3.png","Walk4.png","Walk5.png","Walk6.png"]
                },
                meta: {
                    "app": "https://www.codeandweb.com/texturepacker",
                    "version": "1.1",
                    image: "sprites/gilbert_walkanim.png",
                    "format": "RGBA8888",
                    "size": {"w":16,"h":147},
                    "scale": "0.1",
                    "smartupdate": "$TexturePacker:SmartUpdate:a0a05d7a15f3ff1de732a52382db2deb:cee98a9ff1f089164529e5f11f98e94c:b57a075d1b40d777eddb5859f31e37d7$"
                }
                }
                
                // Gestion des textures et de l'animation de Gilbert
                snek = PIXI.BaseTexture.from(gilbertData.meta.image)
                snek.scaleMode = 'linear'
                const spriteGilbert = new PIXI.Spritesheet(snek, gilbertData);
                await spriteGilbert.parse();
                const anim =  new PIXI.AnimatedSprite(spriteGilbert.animations.walk);
                anim.animationSpeed = 0.1666
                anim.play()
                anim.x = app.screen.width / 2;
                anim.y = app.screen.height / 2;
                app.stage.addChild(anim)
                
                const groove = 5 // Vitesse de marche de gilbert et conséquemment de déplacement pour les pommes
                
                // Initialisation des variables pour la boucle
                app.ticker.add(delta => loop(delta));
                let movingRight = true
                
                // Fonction bouclée qui gère le comportement des pommes 
                function loop(delta) {
                    if (anim.x < app.screen.width - 25 && movingRight == true) {
                    anim.x += groove
                    for (let i = 0; i < appless.children.length; i++) {
                        if (appless.children[i].x >= anim.x -10 && appless.children[i].x <= anim.x + 10 && movingRight == true && appleBehaviourControl[i][1] == true) {
                            console.log('?');
                            appleBehaviourControl[i][0] = true
                        }
                        if (appleBehaviourControl[i][0] == true && appleBehaviourControl[i][1] == true) {
                            appless.children[i].x += groove
                        }
                    }
                    } else {
                        anim.scale.x = -1
                        movingRight = false
                        anim.x = anim.x - groove
                        if (anim.x <= 25 && movingRight == false) {
                            movingRight = true
                            anim.scale.x = 1
                        }
                    }
                }
                // Fonction lancée au click qui gère le changement de  comportement des pommes au click
                background.on('pointerdown', function() {
                    console.log(appleFall)
                    myText.text = `Je suis Gilbert et j'ai ${apples} pommes`;
                    appless.children[appleFall].y = anim.y
                    appleBehaviourControl[appleFall][1] = true
                    gen1Apple();
                    apples += 1;
                    appleFall += 1;
                    // for(let i = 0; i < appless.children.length; i++) {
                    //     if(appless.children[i].x > app.screen.width) {
                    //         appless.removeChild(appless.children[i])
                    //         appleFall -= 1
                    //     }
                    // }
                })    
    }


    init();
}
playGame();


        