import http from "../http-common";

const getAll = () => {
    return http.get("/enemy");
}

const create = (data) => {
    return http.post("/enemy", data);
}

const createResistance = (data, enemyId) => {
    return http.post(`/enemy/resistance/${enemyId}`, data);
}

const createImmunity = (data, enemyId) => {
    return http.post(`/enemy/immunity/${enemyId}`, data);
}

const createVulnerability = (data, enemyId) => {
    return http.post(`/enemy/vulnerability/${enemyId}`, data);
}

const EnemyService = {
    getAll,
    create,
    createResistance,
    createImmunity,
    createVulnerability
};

export default EnemyService;