import React from "react";
import latte from "../../assets/images/latte.png";
import TeamCard from "../../components/TeamCard";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const nombre = form.name.value.trim();
    const correo = form.email.value.trim();
    const mensaje = form.message.value.trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    alert(`¡Gracias por contactarnos, ${nombre}! Te responderemos pronto.`);
    form.reset();
  };

  return (
    <main>
      <section className="bg-background text-brown-dark">
        <div className="flex flex-col gap-[1rem] text-center items-center">
          <h1 className="text-4xl font-bold">¡Dejanos endulzarte el día!</h1>
          <p className="leading-7">
            ¿Tienes preguntas sobre nuestros productos? ¿Quieres agendar un
            evento? ¿O simplemente quieres compartir tu opinión sobre nuestro
            café? ¡Nos encantaría saber de ti!
          </p>
          <img
            className="w-[40%] rounded-3xl hover:scale-105 transition-transform duration-300"
            src={latte}
            alt="Latte art coffee cup"
          />
        </div>
      </section>

      <section className=" bg-background-alt  text-center">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">
          Métodos de contacto
        </h2>
        <div className="grid gap-[2rem] justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Reservas y pedidos
              </h3>
              <p className="text-red font-bold">pedidos@lattelab.com</p>
              <p>
                Para reservas de mesa o pedidos especiales, respondemos en una
                hora.
              </p>
            </div>
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Eventos y grupos
              </h3>
              <p className="text-red font-bold">eventos@lattelab.com</p>
              <p>
                ¿Quieres celebrar un cumpleaños o una reunión en nuestro local?
                Cuéntanos tu idea.
              </p>
            </div>

            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Proveedores y asociaciones
              </h3>
              <p className="text-red font-bold">proveedores@lattelab.com</p>
              <p>
                Para granjas, panaderías y marcas interesadas en trabajar con
                nosotros.
              </p>
            </div>
            <div className="grid items-start bg-white border-2 border-brown-pink p-[2rem] rounded-2xl h-[250px]">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Únete a nuestro equipo
              </h3>
              <p className="text-red font-bold">empleos@lattelab.com</p>
              <p>Envía tu CV si quieres unirte a nuestro equipo.</p>
            </div>
          </div>
          <div
            className="bg-white border-2 border-brown-pink p-[2rem] rounded-2xl w-full "
            id="contact-social"
          >
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">
              Redes sociales
            </h3>

            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram: @lattelab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn: LatteLab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b5232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              Twitter: @lattelab
            </p>
            <p className="font-bold flex items-center justify-center mb-2">
              <svg
                fill="#7b5232"
                width="22px"
                height="22px"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M224,72a44.04978,44.04978,0,0,1-44-44,12,12,0,0,0-12-12H128a12,12,0,0,0-12,12V156a16,16,0,1,1-22.85107-14.46631,12.0001,12.0001,0,0,0,6.85058-10.83886L100,89.05569a11.99969,11.99969,0,0,0-14.10352-11.814A80.00515,80.00515,0,1,0,180,156l-.00049-29.32812A107.476,107.476,0,0,0,224,136a12,12,0,0,0,12-12V84A12,12,0,0,0,224,72Zm-12,39.15381a83.22823,83.22823,0,0,1-36.99268-14.91211,12,12,0,0,0-19.00781,9.74121L156,156a56,56,0,1,1-80-50.63965l-.00049,18.64795A39.99736,39.99736,0,1,0,140,156V40h17.06006A68.19054,68.19054,0,0,0,212,94.94Z"></path>{" "}
                </g>
              </svg>
              TikTok: @lattelab
            </p>
            <p>Siguenos para promociones y nuestro proceso artesanal.</p>
          </div>
        </div>
      </section>

      <section className=" bg-background text-center">
        <h2 className="font-bold text-3xl mb-5 text-brown-dark">
          Contacte directamente con nuestro equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamCard
            name="Nicole Reyes"
            role="Fundador y chef ejecutivo"
            description="Especialista en repostería artesanal y mezclas de café."
            instagram="https://www.instagram.com/sar_ji.3/"
          />

          <TeamCard
            name="Samira Viña"
            role="Gerente general"
            description="Maneja reservas de eventos y experiencias grupales."
            instagram=""
          />

          <TeamCard
            name="Esthefany Quispe"
            role="Maestro barista"
            description="Experto en métodos de extracción y arte latte."
            instagram="https://www.instagram.com/blumwind/"
          />

          <TeamCard
            name="Tatiana Marín"
            role="Panadero creativo"
            description="Diseña nuestros postres y panes frescos diarios."
            instagram="https://www.instagram.com/tatianxs.__/"
          />

          <TeamCard
            name="Dayana Arellano"
            role="Director de Experiencia"
            description="Gestiona programas de retroalimentación y fidelización."
            instagram="https://www.instagram.com/abixx_1975?igsh=MXcxcDhwbzEzN2JhdQ%3D%3"
          />

          <TeamCard
            name="Noelia Garcia"
            role="Director de Recursos Humanos"
            description="Gestiona el talento, el desarrollo organizacional y el clima del equipo."
            instagram=""
          />
        </div>
      </section>

      <section className=" bg-background-alt text-center">
        <div className="flex flex-col sm:flex-row gap-[3rem] justify-center items-start">
          <div>
            <h2 className="font-bold text-3xl mb-5 text-brown-dark">
              Preguntas frecuentes
            </h2>
            <p>Encuentra respuestas a tus preguntas aquí:</p>
          </div>
          <div className="grid grid-rows-3 gap-[2rem]">
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                ¿Se permiten mascotas?
              </h3>
              <p>
                Sí, tenemos una{" "}
                <span className="font-bold text-red">
                  terraza donde se admiten mascotas
                </span>
                . Por favor, usen correa.
              </p>
            </div>
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                ¿Ofrecen descuentos para estudiantes?
              </h3>
              <p>
                ¡Claro! Muestra tu credencial de estudiante y
                <span className="font-bold text-red">
                  {" "}
                  obtén un 15% de descuento
                </span>{" "}
                de lunes a jueves.
              </p>
            </div>
            <div className="p-5.5 rounded-2xl bg-white border-2 border-brown-pink w-100%">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                ¿Puedo pedir una tarta personalizada?
              </h3>
              <p>
                Sí, con{" "}
                <span className="font-bold text-red">
                  48 horas de antelación
                </span>
                . Consulta nuestra carta de repostería.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className=" bg-background text-center">
        <div className="mx-[40px] bg-[#ffffff] rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-[40px] p-6">
          <div className="flex flex-col gap-3 sm:w-1/2 w-full">
            <h2 className="font-bold text-3xl mb-5 text-[#5e3c23]">
              Contactanos
            </h2>
            <p>
              ¿Tienes alguna pregunta sobre nuestro menú, quieres hacer una
              reserva o dejarnos una sugerencia? Escríbenos a través del
              formulario y estaremos encantados de responderte lo antes posible.
              ¡Gracias por pensar en nosotros para acompañar tus mejores
              momentos con LatteLab!
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.192"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#5e3c23"
                  ></path>{" "}
                </g>
              </svg>
              999 888 777
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 76 76"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                baseProfile="full"
                enable-background="new 0 0 76.00 76.00"
                xml:space="preserve"
                fill="#5e3c23"
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
                    fill="#5e3c23"
                    fill-opacity="1"
                    stroke-width="0.2"
                    stroke-linejoin="round"
                    d="M 38,43L 35.5,41.5L 24,50.5L 24,52L 52,52L 52,50.5L 40.5,41.5L 38,43 Z M 38,34.5L 52,24.5L 52,24L 24,24L 24,24.5L 38,34.5 Z M 17,22L 59,22L 59,54L 17,54L 17,22 Z M 24,48L 33.75,40L 24,33L 24,48 Z M 52,48L 52,33L 42.25,40L 52,48 Z "
                  ></path>{" "}
                </g>
              </svg>
              email@latteab.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
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
                    d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                    fill="#5e3c23"
                  ></path>{" "}
                </g>
              </svg>
              Av. Café #123, Lima
            </p>
          </div>

          <form
            id="contactForm"
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-4 sm:w-1/2 w-full"
          >
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              required
              className="p-[12px] border-1 border-[#ccc] rounded-xl"
            />
            <input
              type="email"
              placeholder="Ingresa tu correo"
              name="email"
              required
              className="p-[12px] border-1 border-[#ccc] rounded-xl"
            />
            <textarea
              name="message"
              placeholder="Ingresa tu mensaje"
              className="p-[12px] border-1 border-[#ccc] h-[120px] rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="bg-[#a96f4b] text-white p-[12px] font-bold rounded-xl"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
