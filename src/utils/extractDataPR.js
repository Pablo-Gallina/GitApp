import { EstadosPR } from "./constants";
import { getDiffDays } from "./dateFormats";
const { ABIERTO, CERRADO } = EstadosPR;

export const extractDataPR = (data) => {
  const {
    repository_url,
    title,
    created_at: createdAt,
    updated_at: updatedAt,
    user: { login: author },
    pull_request: { merged_at: mergedAt },
    state: stateData,
  } = data;

  // obtener el nombre del repositorio segun la url
  const repositoryName = repository_url.split("/").slice(-1)[0];
  const acepted = stateData === CERRADO && stateData !== ABIERTO && mergedAt;

  // en base a la fecha de actualizacion, retornar el mensaje: Hace 2 días by ${author}
  const diffDays = getDiffDays(updatedAt);
  const description = `Hace ${diffDays} días by ${author}`;
  const state = !acepted ? "rejected" : stateData;

  return { title, createdAt, author, state, repositoryName, acepted, description };
};
