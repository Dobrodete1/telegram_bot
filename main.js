const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
const { message } = require("telegraf/filters");
config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const text = "Idi nahui";

const loveLetters = [
  "Мой дорогой, с каждым днем моя любовь к тебе становится только сильнее. Ты - свет в моей жизни, моя опора и мое счастье.",
  "Твои глаза, полные нежности и искренности, заставляют мое сердце биться быстрее, а твоя улыбка - это самое прекрасное зрелище, которое я когда-либо видела.",
  "Ты меня понимаешь без слов, чувствуешь мои эмоции и всегда готов поддержать. Ты видишь во мне то, чего я сама не замечаю, и веришь в мои возможности больше, чем я сама.",
  "С тобой я чувствую себя настоящей, свободной и любимой. Ты - человек, которому я безоговорочно доверяю, которого я бесконечно уважаю и ценю.",
  "С тобой я могу быть собой и быть уверенной, что ты всегда будешь рядом, поддерживать и защищать меня. Твоя любовь дарит мне силы преодолевать все трудности и смело идти вперед.",
  "Каждый наш момент вместе - это для меня ценный подарок. Мы создаем воспоминания, которые будут жить в моем сердце навсегда.",
  "Я благодарна судьбе за то, что она свела наши пути и дала мне возможность познакомиться с тобой. Я обещаю тебе свою верность, заботу и безграничную любовь.",
  "Вместе мы сможем пройти через все преграды, которые жизнь нам поставит, потому что я верю в нашу силу и в наше взаимопонимание.",
  "Спасибо, что ты рядом, мой дорогой. Ты делаешь мою жизнь счастливой и полной смысла. Я обещаю тебе, что буду рядом всегда, чтобы твоя жизнь была наполнена любовью, радостью и счастьем.",
];

const getRandomItem = (arr = []) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

bot.start((ctx) => {
  ctx.reply(text);
});

const help = `Зачем ты задаешь глупые вопросы 
    Иди работай и не мешай
`;

bot.help((ctx) => ctx.reply(help));
bot.hears(
  ["hi", /hello/gi, /Привет/gi, /Здарова/gi, /арбаныз/gi, /салам/gi],
  (ctx) => ctx.reply("Здарова заебал!!")
);

bot.hears(
  [/dobrodete[l1]/gi, /meder/gi, /медер/gi, /добродетель?/gi, /Медя/gi],
  (ctx) => ctx.reply("Он занят лучше позвони +996999932901")
);

bot.on(message("sticker"), (ctx) =>
  ctx.reply(`Мой создатель не создал такой функции!!!!`)
);

bot.command("love", (ctx) => {
  ctx.reply(getRandomItem(loveLetters));
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

// // const promise = new Promise();//Обещание
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random() * 100;
//     if (randomNumber > 50) {
//       resolve(randomNumber);
//     } else {
//       reject("Error: " + randomNumber);
//     }
//   }, 3000);
// });

// // async/await

// const foo = async () => {
//   const data = await promise;

//   console.log({ data });

//   return 42;
// };

// const bar = async () => {
//   await foo();
//   await foo();
//   await foo();
//     const results = await Promise.all([foo(), foo(), foo()])//3s

//     // foo();
//     // foo();
//     // foo();

// };

// promise
//   .then((data) => {
//     //Ждет пока promise закончится и Вызывается если всё ок
//     console.log({ data });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// //2*2 == 4
// //2+4 == 6
