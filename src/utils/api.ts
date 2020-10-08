import axios from "axios";

export const getProjects = async () => {
    try {
        const data = await axios.get("http://localhost:1337/projects");
        return data.data;
    } catch (error) {
        return [];
    }
};
