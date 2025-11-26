import React from "react";

function AboutUs() {
  return (
    <section className="bg-background text-brown-dark text-center">
      <h1 className="text-4xl font-bold mb-5">
        ¿Quienes <span className="text-brown-pink">Somos</span>?
      </h1>
      <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-1 gap-5">
        <div className="bg-white p-8 outset-border border-2 border-brown-dark rounded-t-full md:rounded-b-full md:rounded-t-none overflow-hidden">
          <h2 className="text-3xl font-bold mb-5">
            Nuestra <span className="text-brown-pink">Historia</span>
          </h2>
          <p>
            Nuestra cafetería nació del amor por el café y la lectura. Queríamos
            crear un espacio donde las personas pudieran disfrutar de una buena
            bebida mientras se sumergen en un libro o comparten ideas en
            nuestros talleres.
          </p>
        </div>
        <div className="bg-white p-4 outset-border border-2 border-brown-dark">
          <h2 className="text-3xl font-bold mb-5">
            Nuestros <span className="text-brown-pink">Valores</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div>
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 4.5C7 2.01472 9.01472 0 11.5 0H15V3.5C15 5.98528 12.9853 8 10.5 8H8V15H7V11H4.5C2.01472 11 0 8.98528 0 6.5V3H3.5C4.91363 3 6.17502 3.65183 7 4.67133V4.5ZM8.14648 6.14642L11.1465 3.14642L11.8536 3.85353L8.85359 6.85353L8.14648 6.14642ZM6.14648 9.85353L3.14648 6.85353L3.85359 6.14642L6.85359 9.14642L6.14648 9.85353Z"
                    fill="#A9745C"
                  ></path>{" "}
                </g>
              </svg>
              <h3 className="text-xl font-bold mb-5">Calidad</h3>
              <p>
                Seleccionamos cuidadosamente cada grano de café para garantizar
                la mejor calidad en cada taza.
              </p>
            </div>
            <div>
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#A9745C"
                className="mx-auto"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                    <path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM4 9a1 1 0 0 1 .993.883L5 10V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2zm9.646-5.425L14 3.93l.354-.354a2.5 2.5 0 1 1 3.535 3.536L14 11l-3.89-3.89a2.5 2.5 0 1 1 3.536-3.535z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h3 className="text-xl font-bold mb-5">Comunidad</h3>
              <p>
                Creemos en crear un espacio donde las personas puedan conectar,
                relajarse y sentirse bienvenidas.
              </p>
            </div>
            <div>
              <svg
                height="64px"
                width="64px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 456.281 456.281"
                xml:space="preserve"
                fill="#A9745C"
                className="mx-auto"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M450.845,322.859v-0.862l-0.236-0.61c-0.439-1.951-1.081-3.625-1.967-5.015l-28.32-72.361 c-1.618-6.145-6.836-12.364-14.859-12.364c-2.617,0-5.292,0.691-7.616,1.894l-55.811,25.784c-2.878,1.227-8.836,3.796-10.9,9.884 c-0.862,2.609-1.284,6.82,1.423,11.502l14.55,29.742l-45.382,0.033v-25.678c0-10.624-7.056-13.437-11.209-13.437 c-5.552,0-10.291,4.129-12.518,6.503l-73.32,75.409c-0.927,0.797-5.552,5.088-5.804,11.673 c-0.114,2.894,0.618,7.267,4.739,11.388c7.251,7.251,76.222,74.003,76.222,74.003c1.756,1.788,6.495,5.934,12.152,5.934 c1.227,0,11.965-0.415,11.965-15.07V418.15h112.044c1.171,0,4.235-0.219,7.218-2.243c2.178-1.496,5.885-5.032,5.861-11.469 c0.39-3.04,5.349-18.883,9.315-31.612c7.316-23.37,10.941-35.465,12.29-42.073l0.171-0.033v-0.967 c0.284-1.65,0.471-3.016,0.471-3.991C451.317,324.647,450.983,323.834,450.845,322.859z M370.892,309.349 c-1.398-0.122-4.739-1.65-6.324-2.934l-15.282-31.214l54.616-25.353l23.76,59.501H370.892z"></path>{" "}
                    <path d="M151.177,114.775l50.129,35.628c3.292,2.479,6.966,4.763,11.518,4.763 c2.845,0,8.169-0.992,11.762-7.21l18.444-27.206l21.98,38.359l-22.297,12.77c-7.421,4.227-7.836,9.657-7.446,12.534 c1.089,7.755,9.697,10.648,13.241,11.502l101.843,26.133c0.642,0.219,2.918,0.967,5.828,0.967 c7.161,0,12.794-4.398,14.745-11.518c2.674-9.884,26.369-102.875,26.369-102.875c0.756-2.756,2.089-9.73-1.788-14.786 c-3.764-4.975-10.535-5.991-18.175-1.601l-20.013,11.469L301.783,6.763C300.166,3.642,296.183,0,290.436,0 c-2.56,0-5.154,0.756-7.161,1.926c-2.821,1.154-18.899,4.715-31.84,7.568c-31.978,7.064-43.325,9.836-47.503,12.25 c-4.243,2.414-6.324,5.219-7.421,7.755l-47.341,60.566c-1.008,0.959-5.909,6.161-5.243,13.355 C144.268,106.647,145.829,111.264,151.177,114.775z M356.172,205.547l-0.033,8.73l-0.667-8.543 C355.725,205.62,355.977,205.547,356.172,205.547z M201.639,50.365l28.775,50.178c0.618,1.341,0.862,4.958,0.561,6.861 l-19.484,28.808l-49.072-34.872L201.639,50.365z"></path>{" "}
                    <path d="M154.998,163.482c-2.008-7.291-10.486-14.371-20.403-10.819 c-9.624,3.447-99.445,37.318-99.445,37.318c-2.617,0.919-11.209,4.601-11.624,12.737c-0.195,3.764,1.309,9.063,9.616,12.981 l20.85,9.852L6.318,326.622c-0.585,1.105-2.317,5.121-0.667,9.925c0.862,2.52,2.926,5.983,7.332,7.999 c2.561,1.65,14.721,12.843,24.508,21.833c22.272,20.492,32.531,29.694,37.164,31.897c2.788,1.309,5.381,1.951,7.893,1.951 c1.097,0,2.065-0.276,3.04-0.504l75.019,5.349l3.26,0.276c4.658,0,8.779-1.618,11.624-4.576 c2.032-2.089,4.406-5.853,4.178-11.543l0.528-61.444c0.114-3.26,0.333-9.315-3.926-13.729c-1.788-1.845-5.576-4.389-11.404-3.983 l-31.937,0.447l19.362-41.025l23.223,10.99c2.536,1.187,4.853,1.756,7.023,1.756c3.731,0,7.023-1.683,9.063-4.65 c3.544-5.194,1.699-12.087,0.309-15.615L154.998,163.482z M163.866,387.961v8.665l-0.975-7.925 C163.191,388.375,163.533,388.099,163.866,387.961z M162.752,327.549l-0.528,60.216l-63.696-4.129l24.142-51.153 c0.756-1.284,3.544-3.568,5.3-4.438L162.752,327.549z"></path>
                  </g>
                </g>
              </svg>
              <h3 className="text-xl font-bold mb-5">Sostenibilidad</h3>
              <p>
                Nos comprometemos con prácticas responsables que cuiden nuestro
                planeta y apoyen a los productores de café
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 outset-border border-2 border-brown-dark rounded-b-full overflow-hidden">
          <h2 className="text-3xl font-bold mb-5">
            Nuestra <span className="text-brown-pink">Misión</span>
          </h2>
          <p>
            Inspirar la creatividad, el aprendizaje y la conexión humana a
            través del café, la lectura y el arte. Buscamos ser un punto de
            encuentro para las mentes curiosas y los corazones apasionados.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="bg-white p-4 outset-border border-2 border-brown-dark">
          <h2 className="text-3xl font-bold mb-5">
            Nuestro <span className="text-brown-pink">Equipo</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold mb-5">Nicole Reyes</h3>
              <p className="mb-3 text-brown-pink font-bold italic">
                Fundadora & Barista Principal
              </p>
              <p>
                Amante del café y las buenas historias, Nicole soñó con crear un
                espacio donde cada taza inspire una conversación y cada libro
                encuentre un nuevo lector. Su pasión dio origen a nuestra
                cafetería.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-5">Tatiana Marín</h3>
              <p className="mb-3 text-brown-pink font-bold italic">
                Chef Pastelero
              </p>
              <p>
                Creativo y perfeccionista, Tatiana combina sabores y texturas
                para ofrecer postres únicos que acompañan perfectamente una
                tarde de lectura o una charla entre amigos.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-5">Alisson Gonzales</h3>
              <p className="mb-3 text-brown-pink font-bold italic">
                Coordinadora de Cursos y Talleres
              </p>
              <p>
                Amante de la cultura y el aprendizaje continuo. Alisson organiza
                actividades que promueven la lectura, el arte y el intercambio
                de ideas, creando una comunidad que crece con cada encuentro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
