//cerbos.ts
import { HTTP } from "@cerbos/http";

export function getCerbosClient(){
    let usePlayground = false;
    if(usePlayground){
        const cerbos = new HTTP("https://demo-pdp.cerbos.cloud", {
            playgroundInstance: "LnQCrZuCzZ660bda75BB9iF2qQdLutza", // The playground instance ID to test
       });
       return cerbos;
    }
    else{
        const cerbos = new HTTP("http://localhost:3592");
        return cerbos;
    }
   
    
}


 