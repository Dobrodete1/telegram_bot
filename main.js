const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
const { message } = require("telegraf/filters");
const {sorryLetters, loveLetters} = require("./content")
config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const text = "Добро пожаловать на мой тестовый телеграмбот ";

// Пример использования:
loveLetters.forEach((message) => {
  console.log(message);
});


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
  (ctx) => ctx.reply("Здарова!!")
);

bot.hears(
  [/dobrodete[l1]/gi, /meder/gi, /медер/gi, /добродетель?/gi, /Медя/gi],
  (ctx) => ctx.reply("Лучше пиши ему самому @Dobrodete1")
);

bot.on(message("sticker"), (ctx) =>
  ctx.reply(`Мой создатель не создал такой функции!!!!`)
);

bot.command("love", (ctx) => {
  ctx.reply(getRandomItem(loveLetters));
});

bot.command("sorry", (ctx) => {
  ctx.reply(getRandomItem(sorryLetters));
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
