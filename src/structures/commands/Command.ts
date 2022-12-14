/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Serval } from "../../Serval";
import { CommandCategory } from "../CommandCategory";
import { CommandData } from "../interfaces/CommandData";

export class Command {
    /**
     * The name of the command.
     */ 
    public label: string;
    public description: string;
    /**
     * The category  of the command.
     */
    public category?: CommandCategory;

    constructor(data?: CommandData) {
        this.label = data?.label || "";
        this.description = data?.description || "No description provided...";
        this.category = undefined;
    }

    async run(client: Serval, interaction: CommandInteraction): Promise<void> {
        client;
        interaction.reply("This command has not been implemented yet.");
    }

    build(builder: SlashCommandBuilder): SlashCommandBuilder {
        return builder;
    }
}