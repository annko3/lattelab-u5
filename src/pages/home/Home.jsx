import React from "react";
import cafePersons from "../../assets/images/cafePersons.png";
import Testimonios from "../../components/Testimonios";

function Home() {
  return (
    <main>
      <section className="flex flex-col bg-background text-brown-dark items-center text-center">
        <h1 className="font-bold text-4xl mb-5 text-brown-dark">
          Bienvenidos a <span className="text-brown-pink">Lattelab</span>
        </h1>
        <p>
          Nacimos con la idea de ofrecer un espacio acogedor, donde cada cliente
          pueda encontrar desde un café clásico hasta preparaciones únicas
          hechas con granos seleccionados y tostados de manera artesanal.
        </p>
        <p className="italic mt-4">
          "Un café, una charla y un momento para ti"
        </p>

        <div className="flex flex-row gap-3 mt-4">
          <a
            href="/menu"
            className="bg-[#a9745c] text-white p-2 rounded-xl hover:bg-brown-medium"
          >
            Ver Menú
          </a>
          <a
            href="/contact#contact-form"
            className="border border-[#a9745c] text-[#a9745c] p-2 rounded-xl hover:bg-[#a9745c] hover:text-white"
          >
            Contáctanos
          </a>
        </div>

        <img
          src={cafePersons}
          alt="Clientes disfrutando café"
          className="rounded-2xl border-4 border-[var(--color-brown-medium)] transition-transform duration-300 hover:scale-105 hover:shadow-lg mx-auto mt-10"
          style={{ width: "600px", height: "auto" }}
        />
      </section>

      <section className="bg-background-alt text-brown-dark px-6 py-16 text-center">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">
          ¿Por qué elegir <span className="text-brown-pink">Lattelab</span>?
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          No solo es café... es vivir una experiencia. En Lattelab trabajamos
          para que cada cliente se sienta como en casa y se lleve un buen
          recuerdo.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center p-6 text-center hover:-translate-y-1 transition-transform">
            <svg
              fill="#A9745C"
              width="64px"
              height="64px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,120,64Zm32,0a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,152,64Zm96,56v8a40.04613,40.04613,0,0,1-37.50781,39.91455A96.65441,96.65441,0,0,1,183.46387,208H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.53613A96.31957,96.31957,0,0,1,24,136V88a8.00008,8.00008,0,0,1,8-8H208A40.04521,40.04521,0,0,1,248,120Zm-16,0a24.03806,24.03806,0,0,0-16-22.624V136a95.32337,95.32337,0,0,1-1.20312,15.01367A24.039,24.039,0,0,0,232,128Z"></path>
            </svg>
            <h3 className="font-bold text-2xl mb-3 text-brown-dark">
              Café fresco y de calidad
            </h3>
            <p>
              Usamos granos seleccionados y tostados de forma artesanal para que
              cada taza sea única.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 text-center hover:-translate-y-1 transition-transform">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 4.5C7 2.01472 9.01472 0 11.5 0H15V3.5C15 5.98528 12.9853 8 10.5 8H8V15H7V11H4.5C2.01472 11 0 8.98528 0 6.5V3H3.5C4.91363 3 6.17502 3.65183 7 4.67133V4.5ZM8.14648 6.14642L11.1465 3.14642L11.8536 3.85353L8.85359 6.85353L8.14648 6.14642ZM6.14648 9.85353L3.14648 6.85353L3.85359 6.14642L6.85359 9.14642L6.14648 9.85353Z"
                fill="#A9745C"
              ></path>
            </svg>
            <h3 className="font-bold text-2xl mb-3 text-brown-dark">
              Compromiso con el medio ambiente
            </h3>
            <p>Priorizamos empaques ecológicos y prácticas sostenibles.</p>
          </div>

          <div className="flex flex-col items-center p-6 text-center hover:-translate-y-1 transition-transform">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            <h3 className="font-bold text-2xl mb-3 text-brown-dark">
              Ambiente acogedor
            </h3>
            <p>
              Un espacio diseñado para relajarte, estudiar o compartir con
              amigos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <h2 className="text-3xl font-bold text-center text-brown-dark mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <Testimonios />
      </section>
    </main>
  );
}

export default Home;
