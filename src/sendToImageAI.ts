import { stableDiffusionKey } from "./apiKeys"


async function sendToImageAI(msg : string) {

    const options = await stableDiffusionKey();

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