// import "isomorphic-fetch";
// first
// Object.defineProperty(window, 'MutationObserver', { value: class {
//     constructor(callback: any) {}
//     disconnect() {}
//     observe(element: any, initObject: any) {}
// }});

import { Header,
    constructCommands,
    loggedIn, 
    checkLoggedIn,
    buildMenubar,
    basepath,
    wspath,
    setupSidepanel,
    SidebarPanel,
    APIKeysWidget,
    BaseWidget,
    LoginWidget,
    LogoutWidget,
    RegisterWidget
} from '../../src/ts/index';

describe('Checks exports', () => {
    test("Check import header", () => {
        console.log(Header);
    });
    test("Check import constructCommands", () => {
        console.log(constructCommands);
    });
    test("Check import loggedIn", () => {
        console.log(loggedIn);
    });
    test("Check import checkLoggedIn", () => {
        console.log(checkLoggedIn);
    });
    test("Check import buildMenubar", () => {
        console.log(buildMenubar);
    });
    test("Check import basepath", () => {
        console.log(basepath);
    });
    test("Check import wspath", () => {
        console.log(wspath);
    });
    test("Check import setupSidepanel", () => {
        console.log(setupSidepanel);
    });
    test("Check import SidebarPanel", () => {
        console.log(SidebarPanel);
    });
    test("Check import APIKeysWidget", () => {
        console.log(APIKeysWidget);
    });
    test("Check import BaseWidget", () => {
        console.log(BaseWidget);
    });
    test("Check import LoginWidget", () => {
        console.log(LoginWidget);
    });
    test("Check import LogoutWidget", () => {
        console.log(LogoutWidget);
    });
    test("Check import RegisterWidget", () => {
        console.log(RegisterWidget);
    });
});



// import * as puppeteer from"puppeteer";
// import * as path from "path";
describe('Checks browser interactions', () => {
    test("Check extension", () => {

    });
});

