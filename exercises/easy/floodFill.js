/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const floodFill = function(image, sr, sc, color) {
  let start = image[sr][sc];
  if (start === color) return image;
  
  const dfs = function (sr, sc) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    else if (image[sr][sc] === start) {
      image[sr][sc] = color;
      dfs(sr+1,sc);
      dfs(sr-1,sc);
      dfs(sr, sc+1);
      dfs(sr, sc-1);
    }
  }
  dfs(sr, sc);

  return image;
}