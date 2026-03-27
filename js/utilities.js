/**
 * @param {string} path
 * @returns {string}
 */
export async function load_text_data(abs_path) {
  const response = await fetch(abs_path);
  if (!response.ok) {
    throw new Error(`Fail to fetch path ${abs_path}\n:${response.text()}`);
  }
  return response.text();
}
