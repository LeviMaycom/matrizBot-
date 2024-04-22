import {ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";


export default new Command({
    name: "ip",
    description: "Mostra o IP do servidor",
    type: ApplicationCommandType.ChatInput,
    run({interaction}){
        for(let i = 0; i < 0; i++){
            content: "Ola"
        }
    }
   
})