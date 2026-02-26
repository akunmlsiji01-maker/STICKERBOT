const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  if (msg.photo) {
    const fileId = msg.photo[msg.photo.length - 1].file_id;
    await bot.sendMessage(chatId, "Membuat sticker...");
    await bot.sendSticker(chatId, fileId);
  } else {
    bot.sendMessage(chatId, "Kirim foto untuk dijadikan sticker!");
  }
});
