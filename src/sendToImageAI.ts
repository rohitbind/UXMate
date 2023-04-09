
async function sendToImageAI(msg : string) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1567d100dcmshe4bb4a1618d084cp1b4c3bjsn1eca5283b17d',
            'X-RapidAPI-Host': 'stable-diffusion-v2.p.rapidapi.com'
        }
    };

    const imagePrompt = msg;

    (async () => {
        figma.ui.postMessage({ imageRenderLoader:  "show"});
        try {
          const response = await fetch('https://stable-diffusion-v2.p.rapidapi.com/stable-diffusion?description='+imagePrompt, options);
          const data = await response.json();
          figma.ui.postMessage({ imageRenderLoader:  "hide"});
          figma.ui.postMessage({ imageOutput: data });
        } catch (error) {
          console.error(error);
          figma.ui.postMessage({ imageRenderLoader:  "hide"});
        }
    })();
  }

  export {sendToImageAI};