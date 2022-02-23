import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default function installElementPlus(app) {
  app.use(ElementPlus, { size: "normal" });
}
