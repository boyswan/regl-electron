precision mediump float;
attribute vec2 position;
uniform float angle;
uniform vec2 offset;
varying float newAngle;

float getX() {
return cos(angle) * position.x + sin(angle) * position.y + offset.x * angle;
}

float getY() {
  return -sin(angle) * position.x + cos(angle) * position.y + offset.y * angle;
}
void main() {
  newAngle = angle;
  gl_Position = vec4(getX(), getY(), 0, 10);
}
