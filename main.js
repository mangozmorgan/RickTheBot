const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const cheerio = require("cheerio");
let fs = require("fs");
require("dotenv").config();

let random = (array) => {
  let random = array[Math.floor(Math.random() * array.length)];
  return random;
};

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
  console.log("RickTheBot is ready ! blurp..");
});

const generalArray = require("./array");
const cssNewsArray = [];
const funNewsFinal = [];

//COMPTEUR
const newsTArray = [];
const newsFArray = [];
const cssGetArray = [];
const commandGetArray = [];
const mortyArray = [];
const danseArray = [];
const feelingGoodArray = [];
const finalCount = [];

let message;

// Répondre à un message¨
client.on("message", function (message, clientObject) {
  //SAUVEGARDE DU NOMBRE DE COMMANDE UTILISEE //

  setTimeout(() => {
    let statsUser = () => {
      let data =
        "Commande !css : " +
        cssGetArray.length +
        "\n" +
        "Commande !newsF : " +
        newsTArray.length +
        "\n" +
        "Commande !newsF : " +
        newsFArray.length +
        "\n" +
        "Commande !morty : " +
        mortyArray.length +
        "\n" +
        "Commande !danse : " +
        danseArray.length +
        "\n" +
        "Commande 'Feeling' : " +
        feelingGoodArray.length;
      fs.writeFile("data.txt", data, (err) => {
        console.log("err : " + err);
      });
    };
    statsUser();
  }, 1200000);

  //FIN//

  if (generalArray.hello.includes(message.content)) {
    feelingGoodArray.push(message.author.username);
    let rand = random(generalArray.answer1);
    let randEmoji = random(generalArray.emojiFeeling);
    message.react("👋");
    message.react(randEmoji);

    message.reply(rand);
  } else if (message.content == "!stats") {
    message.delete();
    message.author.send("Voici les derniers chiffres , blurp..");
    message.author.send(
      "Commande !css : " +
        cssGetArray.length +
        "\n" +
        "Commande !newsF : " +
        newsTArray.length +
        "\n" +
        "Commande !newsF : " +
        newsFArray.length +
        "\n" +
        "Commande !morty : " +
        mortyArray.length +
        "\n" +
        "Commande !danse : " +
        danseArray.length +
        "\n" +
        "Commande 'Feeling' : " +
        feelingGoodArray.length
    );
  } else if (generalArray.howU.includes(message.content)) {
    feelingGoodArray.push(message.author.username);
    var rand = random(generalArray.answer2);
    let rand2 = random(generalArray.emojiFeeling);
    message.react(rand2);
    message.reply(rand);
  } else if (message.content == "!presentation") {
    message.channel.send(
      "Blurp ... Bon pour faire court je suis l'une des personnes les plus intelligente sur cette planète , sûrement aussi l'une des plus alcoolique .. L'ironie est mon dada ainsi que l'humour noir et j'ai une connaissance accrue de l'univers ! "
    );

    setTimeout(() => {
      message.channel.send(
        "  Non blague a pars je suis là pour vous faciliter la vie ( Enfin pas trop quand même ! )"
      );
    }, 5000);

    setTimeout(() => {
      message.channel.send(
        "J'ai quelques fonctionnalités sympatiques qui méritent d'être explorées . Toutes les commandes me concernant commenceront par ' ! ' pour éviter que j'intèrfère avec vos conversations personnelles"
      );
    }, 9500);

    setTimeout(() => {
      message.channel.send({ files: ["rick1.png"] });
    }, 16000);

    setTimeout(() => {
      message.channel.send(
        "Me voici ! Je suis schwifty non ? Bon , petite astuce , pour connaître toutes les commandes disponibles tapez : !command"
      );
    }, 18000);

    setTimeout(() => {
      message.channel.send(" Tu connais Morty ? essaye ' !morty ' ");
    }, 19000);

    setTimeout(() => {
      message.channel.send(" Bon aller , a + ! ");
    }, 21000);
  } else if (generalArray.danse.includes(message.content)) {
    message.react("🎉");
    message.react("🥳");
    danseArray.push(message.author.username);
    message.reply("Yeaaaaah Baby !!! :love_you_gesture: :love_you_gesture: ");
    var rand = random(generalArray.answerDance);
    message.reply(rand);
  } else if (message.content == "!newsT") {
    message.react("📰");
    newsTArray.push(message.author.username);
    var rand = random(generalArray.answer3);
    message.reply(rand);
    message.author.send("Alors pour les nouvelles Techno de la journée : ");

    setTimeout(() => {
      const worldInfoFinal = generalArray.worldInfoNews.toString().split(",");
      let rand = random(worldInfoFinal);
      let rand3 = random(worldInfoFinal);
      const nextImpactFinal = generalArray.nextImpactInfo.toString().split(",");
      let rand2 = random(nextImpactFinal);

      message.author.send(
        rand + "\n" + ("https://www.nextinpact.com/" + rand2 + "\n" + rand3)
      );

      message.author.send(
        "```diff" +
          "\n" +
          "N'hésite pas a taper la commande plusieurs fois j'ai plusieurs articles en stock . " +
          "\n" +
          "```"
      );
      message.react("☑️");
    }, 2200);
  } else if (message.content == "!clean") {
    message.channel.bulkDelete();
    message.channel.bulkDelete();
    message.channel.bulkDelete();
    message.channel.bulkDelete();
  } else if (message.content == "!newsF") {
    message.react("📰");
    newsFArray.push(message.author.username);
    message.reply(
      "Allé , un peu d'humour ça ne peut pas faire de mal :sunglasses: tu va recevoir ça en MP"
    );

    setTimeout(() => {
      const funNewsFinal = generalArray.funNewsArray.toString().split(",");
      let rand = random(funNewsFinal);
      message.author.send(rand);
      message.react("☑️");
    }, 2200);
  } else if (message.content == "!command") {
    commandGetArray.push(message.author.username);
    let rand =
      generalArray.commandArray[
        Math.floor(Math.random() * generalArray.commandArray.length)
      ];

    message.reply(rand);
    message.author.send(
      "Tu as déja oublié mes commandes ? Voici un récapitulatif : "
    );
    message.author.send({ files: ["command.png"] });
    message.react("☑️");
  } else if (message.content == "!morty") {
    message.react("❤️");
    mortyArray.push(message.author.username);
    message.reply(
      "Super sympa de vouloir en connaïtre plus sur ma famille , je t'envoie ça en mp"
    );

    message.author.send(
      "Morty ? C'est mon petit fils , il est un peu débile mais on ne choisi pas sa famille non ? C'est aussi lui qui m'accompagne dans toutes mes aventures a travers THE galaxy  :sunglasses: "
    );

    setTimeout(() => {
      message.author.send({ files: ["morty.png"] });
    }, 6000);
    setTimeout(() => {
      message.author.send(
        "Regardez moi si il est pas mignon comme tout ! Voici une des phrases les plus celèbres :"
      );
    }, 8000);
    setTimeout(() => {
      message.author.send(
        "'Personne n’existe volontairement, personne n’appartient à un endroit, tout le monde va mourir. Viens regarder la télé."
      );
      message.author.send("Morty");
    }, 10000);
  } else if (message.content == "!start") {
    message.delete();
    let checkTime = () => {
      let test = new Date();

      let dayNumber = test.getDay();
      let date2 = test.toLocaleString("en-GB", { timeZone: "UTC" });
      let hours = ("0" + test.getHours()).slice(-2);
      let minutes = ("0" + test.getMinutes()).slice(-2);
      let seconds = ("0" + test.getSeconds()).slice(-2);
      let month = date2[0];
      let day = date2[2] + date2[3];
      let dayLetter = test.toDateString();
      let dayArray = dayLetter.split(" ");
      /*PAUSE DU WEEKEND*/

      console.log(day);
      if (dayArray[0] == "Sat" || dayArray[0] == "Sun") {
        // PAUSE DU WEEKEND //
      } else {
        /* ANNIVERSAIRES */
        /*
                if (day == 8 && month == 5) {
                  if (hours == 8 && minutes == 45 && seconds == 30) {
                    client.users.cache.get('689935168626229392').send("Askip c'est ton anniv' aujourdhui ! Alors passe un bonne journée frère ! ( c'est comme ça qu'on dit non ? :sunglasses: )")
                  }
                }
                else if (day == 9 && month == 4) {
                  console.log("yepaaa")
                }
                else if (day == 4 && month == 5) {
                  if (hours == 8 && minutes == 45 && seconds == 30) {
                    client.users.cache.get('273448933265768449').send("Bon anniv Dylan ! Passe une bonne journée :sunglasses:")
                  }
                }
                else if (day == 23 && month == 5) {
                  if (hours == 8 && minutes == 45 && seconds == 30) {
                    client.users.cache.get('821766534002376736').send("Bon anniv Amine ! Passe une bonne journée :sunglasses:")
                  }
                }
                else if (day == 16 && month == 4) {
                  if (hours == 8 && minutes == 45 && seconds == 30) {
                    client.users.cache.get('812300853129773126').send("Bon anniv Yann ! Passe une bonne journée :sunglasses:")
                  }
                }
                else if (day == 3 && month == 9) {
                  if (hours == 8 && minutes == 45 && seconds == 30) {
                    client.users.cache.get('822391997259317249').send("Bon anniv Dania ! Passe une bonne journée :sunglasses:")
                    client.users.cache.get('821762334698504212').send("Bon anniv Dania ! Passe une bonne journée :sunglasses:")
                  }
                }
                else if (day == 22 && month == 4) {
                  if (hours == 15 && minutes == 57 && seconds == 30) {
        
                    // client.users.cache.get('821765265774739466').send("Bon anniv Yoann ! Passe une bonne journée :sunglasses:")
                    client.users.cache.get('822386651715207179').send("Salut toi ")
                    console.log("j'ai envoyé un message a yohan")
                  }
                }*/

        /* ASTUCE CSS DAYLI */

        if (hours == 16 && minutes == 30 && seconds == 1) {
          message.channel.send(
            "Blurp.. Ce ne serait pas l'heure du gouté là ?"
          );
        } else if (hours == 11 && minutes == 59 && seconds == 59) {
          message.channel.send(" A table !! :fork_and_knife_with_plate: ");
        } else if (hours == 8 && minutes == 25 && seconds == 10) {
          let rand1 = random(generalArray.sayTipsCss);
          message.channel.send(rand1 + "\n" + "\n");
          let finalArray = [];

          for (let i = 0; i < generalArray.proprieteArray.length; i++) {
            finalArray.push(
              "```yaml" +
                "\n" +
                "Propriété : " +
                "\n" +
                "```" +
                "```" +
                "\n" +
                generalArray.proprieteArray[i] +
                "\n" +
                "```" +
                "\n" +
                "```yaml" +
                "\n" +
                "Description : " +
                "\n" +
                "```" +
                "```" +
                "\n" +
                generalArray.descriptionArray[i] +
                "\n" +
                "```" +
                "\n" +
                "```yaml" +
                "\n" +
                "Pour en savoir plus c'est ici ( exemples )! : " +
                "\n" +
                "```" +
                "     " +
                "(" +
                "https://developer.mozilla.org/fr/docs/Web/CSS/" +
                generalArray.proprieteArray[i] +
                ")"
            );
          }

          let rand = random(finalArray);
          message.channel.send(rand);
        }

        if (hours == 12 && minutes == 55 && seconds == 10) {
          let rand1 = random(generalArray.coucouRaccourci);
          let rand = random(generalArray.raccourcisClavier);
          message.channel.send(rand1 + "\n" + "\n");

          setTimeout(() => {
            message.channel.send("```yaml" + "\n" + rand + "\n" + "```");
          });
        } else if (hours == 10 && minutes == 15 && seconds == 10) {
          setTimeout(() => {
            let randomQuotes = random(generalArray.HEYJS);
            let random1 = random(generalArray.JSTIPS);
            let random2 = random(random1);
            message.channel.send(randomQuotes + "\n" + random2);
          }, 500);
        }
      }

      setTimeout(checkTime, 1000);
    };

    checkTime();
  } else if (message.content == "!css") {
    message.react("💪");

    cssGetArray.push(message.author.username);

    message.reply(
      "C'est une bonne idée ça ! je t'envoie une astuce css en MP "
    );
    setTimeout(() => {
      message.author.send(
        "Hm voyons voir , je pense que ceci pourrait t'intéresser "
      );
    }, 1200);

    setTimeout(() => {
      cssNewsArray.push(generalArray.cssNews.toString().split(","));
      const cssFinalNews = generalArray.cssNews.toString().split(",");
      let rand = random(cssFinalNews);
      message.author.send("https://www.lafermeduweb.net" + rand);
      message.react("☑️");
    }, 2200);
  } else if (message.content == "!html") {
    const htmlArray = [];
    message.react("💪");
    message.reply(
      "Super idée ça , j'aurais pu l'avoir moi-même , je t'envoie une nouvelle balise html par mp :sunglasses:"
    );

    setTimeout(() => {
      let array1 = generalArray.htmlArray.toString();
      let arrayFinal = array1.split(",");
      let rand = random(arrayFinal);

      message.author.send(
        "Voyons voyons , quelle balise vais-je te donner ... ..."
      );
      setTimeout(() => {
        message.react("☑️");
        message.author.send(
          "Connais tu celle ci ? " +
            "\n" +
            "\n" +
            "```yaml" +
            "\n" +
            "<" +
            rand +
            ">" +
            "\n" +
            "```" +
            "\n" +
            "**Réponses et lien MDN** : " +
            "\n" +
            "\n" +
            "||https://developer.mozilla.org/fr/docs/Web/HTML/Element/" +
            rand +
            "||"
        );
      }, 1500);
    }, 1000);
  } else if (message.content == "!pickle") {
    message.react("🥒");
    message.channel.send(
      "https://tenor.com/view/rick-and-morty-pickle-gif-9423093"
    );
  } else if (
    message.content.includes("rick") ||
    message.content.includes("Rick") ||
    message.content.includes("bot") ||
    message.content.includes("Bot")
  ) {
    message.react("❤️");
  } else if (
    message.content.includes("pickle") ||
    message.content.includes("Pickle") ||
    message.content.includes("cornichon") ||
    message.content.includes("Cornichon")
  ) {
    message.react("🥒");
  } else if (message.content.startsWith("!sondage")) {
    message.delete();
    let messageSondage = message.content.replace("!sondage", "");
    let getOption = messageSondage.split("||");

    let optionsArray = getOption.splice(1);
    message.channel.send(
      "@everyone" +
        "```yaml" +
        "\n" +
        "⚠️    " +
        getOption[0] +
        "    ⚠️" +
        "\n" +
        "```"
    );
    optionsArray.forEach((element) => {
      let rand = random(generalArray.emojiSondage);
      message.channel.send("```" + "\n" + rand + "  " + element + "\n" + "```");
    });

    /*
    message.channel.send("@everyone" + '```' + '\n' + messageSondage + "\n" + "```" + "```" + "\n" + "oui" + "  " + " 👍 " + "     " + "non" + "  " + "👎" + "\n" + "```")
*/
  } else if (message.content == "!js") {
    message.delete();

    setTimeout(() => {
      let randomQuotes = random(generalArray.JSUSERSREPLY);
      let random1 = random(generalArray.JSTIPS);
      let random2 = random(random1);
      message.reply(randomQuotes);
      message.author.send("Hé voila !" + "\n" + random2);
    }, 500);
  }
});

client.login("");
