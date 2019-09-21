import storeProd from "store/configureStore_prod";
import storeDev from "store/configureStore_dev";

export default process.env.NODE_ENV !== "production" ? storeDev : storeProd;
