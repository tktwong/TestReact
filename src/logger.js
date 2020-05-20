let logsToRender = [];
let intervalId = null;

const renderQueue = () => {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(() => {
        if (logsToRender.length > 0) {
            const li = document.createElement("li");
            li.innerHTML = logsToRender.shift();
            document.getElementById("logger").appendChild(li);

            if (logsToRender.length === 0 && intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    }, 200);
}

export const logger = {
    info: (component, message, hook, ...args) => {
        logsToRender.push(
            `<span class='cmp'>${component}:&nbsp;</span>
      <span class='hook'>${hook || ""}</span>
      <span class='msg'>${message}</span>
      <span class='addl'>${args.map(arg => arg.toString()).join(" ")}</span>`
        );
        renderQueue();
    },
    clear: () => {
        document.getElementById("logger").innerHTML = "";
    }
};