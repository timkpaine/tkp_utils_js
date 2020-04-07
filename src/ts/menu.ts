// tslint:disable: no-empty
import { CommandRegistry } from "@phosphor/commands";
import { Menu, MenuBar } from "@phosphor/widgets";

export
interface IMenuDefinition {
    name?: string;
    commands: string[];
    class?: string;
}

export
function buildMenubar(commands: CommandRegistry, menuName: string, menuClass: string, menus: IMenuDefinition[]) {
    const menubar = new MenuBar();

    // Construct top menu
    const menu = new Menu({ commands });
    menu.addClass(menuClass);
    menu.title.label = menuName;
    menu.title.mnemonic = 0;

    for (const menuDefinition of menus) {
        if (menuDefinition.name) {
            const submenu = new Menu({commands});
            submenu.title.label = menuDefinition.name;
            for (const command of menuDefinition.commands) {
                submenu.addItem({command});
            }
            if (menuDefinition.class) {
                submenu.addClass(menuDefinition.class);
            }
            menu.addItem({type: "submenu", submenu});
        } else {
            for (const command of menuDefinition.commands) {
                menu.addItem({ command });
            }
        }
    }
    menubar.addMenu(menu);
    return menubar;
}
