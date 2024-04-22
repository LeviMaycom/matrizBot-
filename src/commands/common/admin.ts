import { ApplicationCommandType, User } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "admin",
    description: "Mostra o admin do servidor",
    type: ApplicationCommandType.ChatInput,
    run({interaction}){
        interaction.reply({
            ephemeral: true,
            content: User.name
        })
    }
})