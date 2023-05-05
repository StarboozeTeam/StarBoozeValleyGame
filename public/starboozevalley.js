
const Booze = PIXI.Application;
const app = new Booze(228,128);
let apples = 0
document.body.appendChild(app.view);

const graphics = PIXI.Graphics;


app.renderer.background.color = 0x22FFC

let myText = new PIXI.Text(`Je suis Gilbert et j'ai ${apples} pommes`);

myText.x = 400
app.stage.addChild(myText);


const background = PIXI.Sprite.from('sprites/orig.png');
background.anchor.x = 0.5
background.anchor.y = 0.5
app.stage.addChild(background);

background.interactive = true;
background.buttonMode = true;
let appless = new PIXI.Container();
async function init() {

let appleFall = 0
nbAppleGen = 10
nbAppleGenRuns = 0
let allApples = new PIXI.Container();
    function genApples(nbAppleGenRuns) {
        for(let i = 0; i < nbAppleGen; i++) {
            let apple = PIXI.Sprite.from('sprites/apple_asset.png');
            apple.x = Math.round(Math.random() * (app.screen.width - 100))
            apple.y = Math.round(Math.random() * (app.screen.height - 100))
            appless.addChild(apple)
        }
        allApples.addChild(appless);
        nbAppleGenRuns += 1 
    }
    app.stage.addChild(allApples);
    genApples(nbAppleGenRuns);
    // const texture = await PIXI.Assets.load('sprites/sprites.png')
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
        
        const groove = 5
        app.ticker.add(delta => loop(delta));
        let movingRight = true
        let pushingApples = []
        
        function loop(delta) {
            for(let i = 0; i < nbAppleGen; i++) {
                let pushingApple = false
                let appleHasFallen = false
                pushingApples.push([pushingApple, appleHasFallen])
            }
        if (anim.x < app.screen.width - 25 && movingRight == true) {
        anim.x += groove
        for (let i = 0; i < nbAppleGen; i++) {
            if (appless.children[i].x >= anim.x -10 && appless.children[i].x <= anim.x + 10 && movingRight == true && pushingApples[i][1] == true) {
                console.log('?');
                pushingApples[i][0] = true
            }
            if (pushingApples[i][0] == true && pushingApples[i][1] == true) {
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
     background.on('pointerdown', function() {
         console.log(appleFall)
         myText.text = `Je suis Gilbert et j'ai ${apples} pommes`;
         appless.children[appleFall].y = anim.y
         pushingApples[appleFall][1] = true
         if(appleFall >= 9) {
             appleFall = 0
             allApples.parent.removeChild(allApples.children[0]);
             appless = new PIXI.Container();
             genApples();
             pushingApples = []
            }
        apples += 1;
        appleFall += 1;
        })    
}


// Call that async function

init();



    