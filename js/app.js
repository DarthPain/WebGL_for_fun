function main() {
  const canvas = document.getElementById("glCanvas");
  const gl = canvas.getContext("webgl");

  if (gl === null) {
    alert("WebGL is not supported");
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
