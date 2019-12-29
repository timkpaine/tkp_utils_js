import { CommandRegistry } from "@phosphor/commands";

export const commands = new CommandRegistry();

export
interface ICommandDefinition {
    execute: () => any;
    iconClass: string;
    isEnabled: () => boolean;
    label: string;
    name: string;
}

export
function constructCommands(commandDefinitions: ICommandDefinition[]) {
    for (const commandDefinition of commandDefinitions) {
        commands.addCommand(commandDefinition.name, {
            execute: commandDefinition.execute,
            iconClass: commandDefinition.iconClass,
            isEnabled: commandDefinition.isEnabled,
            label: commandDefinition.label,
        });
    }
}
