let rootElm = document.querySelector(".root");

let gray = [
  { color: "#f8f9fa", num: "50" },
  { color: "#f1f3f5", num: "100" },
  { color: "#e9ecef", num: "200" },
  { color: "#dee2e6", num: "300" },
  { color: "#ced4da", num: "400" },
  { color: "#adb5bd", num: "500" },
  { color: "#868e96", num: "600" },
  { color: "#495057", num: "700" },
  { color: "#343a40", num: "800" },
  { color: "#212529", num: "900" },
];

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function colorUI() {
  rootElm.innerHTML = "";
  gray.forEach((g, i) => {
    let li = elm(
      "li",
      {},
      elm("div", { className: "box", style: "background-color: " + g.color }),
      elm(
        "span",
        {
          className: "flex",
          "data-id": i,
        },
        elm("p", { className: "code" }, g.num),
        elm("p", { className: "color" }, g.color)
      )
    );
    rootElm.append(li);
  });
}

colorUI();
