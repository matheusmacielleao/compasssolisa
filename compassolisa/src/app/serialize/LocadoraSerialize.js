const serialize = ({ _id, nome,cnpj,atividades,endereco}) => {
    return { _id, nome,cnpj,atividades,endereco};
}

const paginateSerialize = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => {
    return {
        locadoras: docs.map(serialize),
        limit,
        total: totalDocs,
        offset: pagingCounter,
        offsets: totalPages
    };

}

module.exports = { serialize, paginateSerialize };