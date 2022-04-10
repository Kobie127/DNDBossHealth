import http from "../http-common";

const getAll = () => {
    return http.get("/enemy");
}

const create = data => {
    return http.post("/enemy", data);
}

const EnemyService = {
    getAll,
    create
};

export default EnemyService;