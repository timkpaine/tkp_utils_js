import { IRequestResult, request } from "requests-helper";
import { basepath } from "./path";

export
const loggedIn = () => {
    return (window as any).user;
};

export
const checkLoggedIn = async (loginUrl: string) => {
    request("post", basepath() + loginUrl, {}, {}).then((res: IRequestResult) => {
        if (res.ok) {
            const username = (res.json() as { [key: string]: string }).username;
            (window as any).user = username;
            return username;
        } else {
            return undefined;
        }
    });
};
