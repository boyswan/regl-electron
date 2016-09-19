precision mediump float;
uniform vec4 color;
varying float newAngle;

float getAngle() {
  return newAngle * 0.1;
}
void main() {
  gl_FragColor = vec4(0.2, getAngle(), 0.2, 1);
}
