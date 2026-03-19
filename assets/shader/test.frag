uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_resolution;
in vec2 vUv;
vec3 grid(vec2 uv) {
	uv *= 5.0;
	float factor = 1.0;
	return vec3(factor);
}
void main(){
	vec4 tex_color = texture2D(u_texture, vUv);
	vec2 st = gl_FragCoord.xy / u_resolution.xy;
	
	gl_FragColor = tex_color;
	#include <colorspace_fragment>
}

