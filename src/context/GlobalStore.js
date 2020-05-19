import { useState } from "react";
import { createContainer } from "unstated-next";


function useGlobalStore() {
    const [sysMsg, setSysMsg] = useState("");
    const [error, setError] = useState("");
    return { sysMsg, setSysMsg, error, setError };
}

export const GlobalStore = createContainer(useGlobalStore);
