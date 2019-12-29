import {each} from "@phosphor/algorithm";
import { DockPanel, SplitPanel, Widget} from "@phosphor/widgets";
import {BaseWidget} from "./widgets/base";
// tslint:disable no-empty variable-name

export class SidebarPanel extends DockPanel {

    constructor(closeCallback = (panel: SidebarPanel) => {}) {
        super({mode: "single-document"});
        this._closeCallback = closeCallback;
        this.addClass("sidebar");
    }

  public addWidget(w: Widget) {
      w.title.closable = true;
      w.addClass("sidebar");
      super.addWidget(w);
      each(this.tabBars(), (t) => {
        t.show();
      });

  }

  protected onChildRemoved(msg: Widget.ChildMessage): void {
      super.onChildRemoved(msg);
      if (this.isEmpty) {
          this._closeCallback(this);
      }
  }

  private _closeCallback = (panel: SidebarPanel) => {};

}

export
function setupSidepanel(mainPage: SplitPanel, right = true) {
    // to track whats in side bar
    let sidePanel: BaseWidget = null;
    const closeWidget = (s: SidebarPanel) => {
        s.close();
        mainPage.setRelativeSizes([1]);
    };
    const sidebar = new SidebarPanel(closeWidget);

    // helper to clear sidebar
    const setSidePanel = (w: BaseWidget) => {
        // close currently open widget
        if (sidePanel) {
            sidePanel.close();
        }

        // add widget to sidebar
        sidebar.addWidget(w);

        // add sidebar to main page
        mainPage.addWidget(sidebar);

        // set to 3/1 if right, else 1/3
        if (right) {
            mainPage.setRelativeSizes([3, 1]);
        } else {
            mainPage.setRelativeSizes([1, 3]);
        }

        // set var to current widget
        sidePanel = w;
    };

    return setSidePanel;
}
