import { ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "regras",
    description: "Mostra as regras do server.",
    type: ApplicationCommandType.ChatInput,
    run({interaction}){
        interaction.reply({
            ephemeral: true,
            content: `
                  GERAL

                1- É proibido fazer spam ou autopromoção (convites de servidor, anúncios, etc..) sem permissão de um membro da equipe. Isso inclui mandar MDs para outros membros.
                
                2- Trate todos com respeito. Nenhum tipo de assédio, caça às bruxas, sexismo, racismo ou discurso de ódio será tolerado.
                
                3- Para denunciar algo ocorrido no Discord ou in game, deve enviar prova do ocorrido. Denúncias sem provas serão ignoradas, podendo caber punição a quem fez a denúncia infundada.
                
                4- É proibido divulgar outros servidores no Discord e dentro do nosso servidor, Passível de BAN PERMANENTE.
                
                5- Uso de qualquer ‘’bug’’, glitch, hack ou ajuda artificial para lhe beneficiar in game resultará em BAN permanente no servidor e na conta da Steam.
                
                6- Em caso de morte acidental de um Adm/GM e estritamente proibido pegar o loot dele, arriscando  de levar BAN.
                
                7- O burlamento do sistema de seguros resulta em Ban e exclusão total de seus itens e base.
                
                8- Você deve utilizar o mesmo nome do Discord dentro do jogo, caso contrario poderá ser kikado do servidor.
                
                9- Todo RAID deve ser feito com alguma ferramenta de gravação de tela ligado, pois será solicitado em casos que o dono ou admin da base desconfie. Caso não gravar, poderá ser solicitado a devolução dos itens e também correndo o risco de levar alguma punição.
                
                10- Proibido qualquer tipo de RESHADE ou alterações/modificações que não façam parte do servidor ou do jogo base.
                
            
            `
        })
    }
})