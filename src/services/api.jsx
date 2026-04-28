const BASE_URL = "EMPTY";

function createApiError(response, defaultMessage) {
  const error = new Error(`${defaultMessage}: ${response.status} ${response.statusText}`);
  error.status = response.status;
  return error;
}

//#region MusicGroups
export async function fetchMusicGroups(pageNr = 0, pageSize = 10, seeded = true) {
  const url = `${BASE_URL}/MusicGroups/Read?seeded=${seeded}&flat=false&pageNr=${pageNr}&pageSize=${pageSize}`; 
  const response = await fetch(url);
  if (!response.ok) {
    throw createApiError(response, "Failed to fetch music groups");
  }
  return await response.json();
}


export async function fetchMusicGroup(id) {
  const url = `${BASE_URL}/MusicGroups/ReadItem?id=${id}&flat=false`;

  const response = await fetch(url);

  if (!response.ok) {
    throw createApiError(response, `Failed to fetch music group with id ${id}`);
  }
  return await response.json();
}

export async function deleteMusicGroup(id) {
  const url = `${BASE_URL}/MusicGroups/DeleteItem/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw createApiError(response, `Failed to delete music group with id ${id}`);
  }
}

export async function searchMusicGroups(query, currentPage = 0, pageSize = 10, seeded = true) {
  const url = `${BASE_URL}/MusicGroups/Read?&seeded=${seeded}&flat=false&filter=${encodeURIComponent(query)}&pageNr=${currentPage}&pageSize=${pageSize}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw createApiError(response, `Failed to search music groups with query "${query}"`);
  }
  return await response.json();
}

export async function createMusicGroup(musicGroup) {
  const url = `${BASE_URL}/MusicGroups/CreateItem`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(musicGroup),
  });
    if (!response.ok) {
    throw createApiError(response, "Failed to create music group");
  }
    return await response.json();
}

//#endregion

//#region Admin calls
export async function seedMusicGroups() {
    const url = `${BASE_URL}/Admin/Seed`;
    const response = await fetch(url);
    if (!response.ok) {
      throw createApiError(response, "Failed to seed music groups");
    }
    return await response.json();
}

export async function removeSeed() {
    const url = `${BASE_URL}/Admin/RemoveSeed?seeded=true`;
    const response = await fetch(url);
    if (!response.ok) {
      throw createApiError(response, "Failed to remove seed");
    }
    return await response.json();
}
// #endregion