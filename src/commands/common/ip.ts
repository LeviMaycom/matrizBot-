import {ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";


export default new Command({
    name: "server",
    description: "Mostra o IP do servidor",
    type: ApplicationCommandType.ChatInput,
    run({interaction}){
        interaction.reply({
            ephemeral: true,
            content:
                `
                 🌐 IP: 189.127.165.165:2372
                `
    })
    }
})