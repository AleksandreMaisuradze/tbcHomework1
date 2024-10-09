
export async function fetchData(url) {
    const resp = await fetch(url);
    if (resp.ok) {
        return resp.json();
    }
    throw new Error("fetch API error");
}
