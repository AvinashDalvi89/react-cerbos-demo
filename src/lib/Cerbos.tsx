//cerbos.ts
import { HTTP } from "@cerbos/http";

export function getCerbosClient(){
    const cerbos = new HTTP("http://localhost:3592");
    return cerbos;
}


 