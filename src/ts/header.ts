import {Widget} from "@phosphor/widgets";
import {basepath} from "./path";

export
class Header extends Widget {
    public static createNode(iconLink?: string): HTMLElement {
        const node = document.createElement("div");
        node.classList.add("header");
        const a = document.createElement("a");
        a.href = basepath();

        const img = document.createElement("img");
        img.src = a.href + iconLink;
        a.appendChild(img);
        node.appendChild(a);

        const username = document.createElement("span");
        username.textContent = (document as any).user;
        username.classList.add("username");

        node.appendChild(username);
        return node;
    }

    constructor(iconLink?: string) {
        super({ node: Header.createNode(iconLink) });
        this.setFlag(Widget.Flag.DisallowLayout);
        this.title.closable = false;
    }
}
