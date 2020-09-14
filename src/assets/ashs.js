window.addEventListener('beforeinstallprompt',e=>{
    //prevent chrome 67 and earlier from automatically showing the prompot

    e.preventDefault();

    deferredPrompt = e; 

    deferredPrompt.prompt();

    deferredPrompt.useChoice.then(choiceResult=>{
        if(choiceResult.outcome === 'accepted'){
            console.log("User accepted the ashs prompt")
        }
        else{
            console.log("User dismissed the a2hs prompt")
        }

        deferredPrompt = null;
    })
})