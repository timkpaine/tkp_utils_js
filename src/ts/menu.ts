// tslint:disable: no-empty
import { CommandRegistry } from "@phosphor/commands";
import { Menu, MenuBar } from "@phosphor/widgets";

export
interface IMenuDefinition {
    menuName?: string;
    commands: string[];
}

export
function buildMenubar(commands: CommandRegistry, menuName: string, menus: IMenuDefinition[]) {
    const menubar = new MenuBar();

    // Construct top menu
    menubar.addClass("topmenu");
    const menu = new Menu({ commands });
    menu.addClass("settings");
    menu.title.label = menuName;
    menu.title.mnemonic = 0;

    for (const menuDefinition of menus) {
        if (menuDefinition.menuName) {
            const submenu = new Menu({ commands });
            submenu.title.label = menuDefinition.menuName;
            for ( const command of menuDefinition.commands) {
                submenu.addItem({ command });
            }
            menu.addItem({ type: "submenu", submenu });
        } else {
            for (const command of menuDefinition.commands) {
                menu.addItem({ command });
            }
        }
    }
    menubar.addMenu(menu);
    return menubar;
}
