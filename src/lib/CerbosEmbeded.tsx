import { Embedded as Cerbos } from "@cerbos/embedded";

export function getCerbosClient(){
    // Obtain the URL to use from the Cerbos Hub decision points screen.
    const cerbos = new Cerbos(fetch("https://lite.cerbos.cloud/bundle?workspace=EMHB1317DMX0&label=f481a2c9c90ee3ae4deae7b7f656d65d1cd608828f5853d21e9ca383d479223a"));

    // The cerbos.checkResource() method can now be used to check permissions locally
    return cerbos;

}