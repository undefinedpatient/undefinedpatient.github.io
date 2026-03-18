uniform sampler2D u_texture;
in vec2 vUv;

void main(){
	vec4 tex_color = texture2D(u_texture, vUv);
	//gl_FragColor = vec4(1.0,1.0,1.0,1.0);
	gl_FragColor = tex_color;
}
