import { CommandRegistry } from "@phosphor/commands";

export
interface ICommandDefinition {
    execute: () => any;
    iconClass: string;
    isEnabled: () => boolean;
    label: string;
    name: string;
}

export
function constructCommands(commands: CommandRegistry, commandDefinitions: ICommandDefinition[]) {
    for (const commandDefinition of commandDefinitions) {
        commands.addCommand(commandDefinition.name, {
            execute: commandDefinition.execute,
            iconClass: commandDefinition.iconClass,
            isEnabled: commandDefinition.isEnabled,
            label: commandDefinition.label,
        });
    }
}
