import {
    useRive,
    Layout,
    Fit,
    Alignment,
} from "@rive-app/react-webgl2";

import catFile from "../assets/cat.riv";

function Pawly() {
    const { RiveComponent } = useRive({
        src: catFile,
        artboard: "Artboard 1",
        stateMachines: "State Machine 1",
        autoplay: true,
        autoBind: true,

        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),

        onLoadError: (error) => {
            console.error("Rive load error:", error);
        },
    });

    return (
        <div className="w-2/4 h-dvh">
            <RiveComponent className="w-full h-full" />
        </div>
    );
}

export default Pawly;