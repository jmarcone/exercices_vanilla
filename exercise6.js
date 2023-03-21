import axios from "axios";


try {
    const { data } = await axios.get("http://google.com");
    console.log(data);
} catch (e) {
    console.error(e.message);
}