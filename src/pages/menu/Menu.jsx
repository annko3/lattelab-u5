import React, { useState } from "react";
import "../../components/Products";
import Products from "../../components/Products.jsx";

function Menu() {
  const [typeService, setTypeService] = useState("");
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    people: "",
  });
  const [event, setEvent] = useState({
    type: "",
    date: "",
    people: "",
    duration: "",
  });
  const [order, setOrder] = useState({
    type: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!typeService) {
      alert("Por favor, seleccione un tipo de servicio antes de enviar.");
      return;
    }

    if (
      typeService === "reservation" &&
      (!reservation.date || !reservation.time || !reservation.people)
    ) {
      alert("Por favor, complete todos los campos de reservación.");
      return;
    }

    if (
      typeService === "event" &&
      (!event.type || !event.date || !event.people || !event.duration)
    ) {
      alert("Por favor, complete todos los campos de eventos");
      return;
    }

    if (typeService === "order" && (!order.type || !order.time)) {
      alert("Por favor, complete todos los campos pedidos");
      return;
    }

    alert(`Tu solicitud de ${typeService} fue enviada con éxito.`);
  };

  const [total, setTotal] = useState(0);

  const [products, setProducts] = useState({
    americano: 0,
    cappuccino: 0,
    latte: 0,
    mocha: 0,
    cake: 0,
    sandwich: 0,
  });

  const [extras, setExtras] = useState({
    decoration: false,
    customCake: false,
    photographer: false,
    tableDecoration: false,
    specialMenu: false,
  });

  const prices = {
    americano: 3.5,
    cappuccino: 4.0,
    latte: 4.25,
    mocha: 4.5,
    cake: 5.0,
    sandwich: 6.5,
    decoration: 100,
    customCake: 80,
    photographer: 150,
    tableDecoration: 15,
    specialMenu: 10,
  };

  const calculateTotal = (newProducts = products, newExtras = extras) => {
    let totalAmount = 0;

    // Calcular productos
    for (const key in newProducts) {
      totalAmount += newProducts[key] * prices[key];
    }

    // Calcular servicios extra
    if (newExtras.decoration) totalAmount += prices.decoration;
    if (newExtras.customCake) totalAmount += prices.customCake;
    if (newExtras.photographer) totalAmount += prices.photographer;
    if (newExtras.tableDecoration) totalAmount += prices.tableDecoration;

    if (newExtras.specialMenu) {
      const peopleCount =
        typeService === "event"
          ? Number(event.people)
          : Number(reservation.people);
      totalAmount += prices.specialMenu * (peopleCount || 0);
    }

    setTotal(totalAmount);
  };

  return (
    <>
      <section className="bg-background text-center text-brown-dark">
        <h1 className="font-bold text-4xl mb-5 text-brown-dark">Productos</h1>
        <Products/>
      </section>

      <section className="bg-background-alt">
      <form>
        <div
          id="service-form"
          className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]"
        >
          <div className="flex flex-col gap-[1rem]">
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-3xl mb-5 text-brown-dark">
                Solicitar Servicio
              </h2>

              <label for="type-service">Tipo de Servicio</label>
              <select
                value={typeService}
                onChange={(e) => setTypeService(e.target.value)}
                className="bg-background border-2 border-brown-dark outset-border"
                id="type-service"
                name="type-service"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="reservation">Reservaciones</option>
                <option value="event">Eventos</option>
                <option value="order">Pedidos</option>
              </select>
            </div>

            {typeService === "reservation" && (
              <div className="space-y-3">
                <h2 className="font-bold text-3xl mb-5 text-brown-dark">
                  Reservaciones
                </h2>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="reservation-date">Fecha de Reservación</label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="date"
                    name="reservation-date"
                    value={reservation.date}
                    onChange={(e) =>
                      setReservation({ ...reservation, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="reservation-time">Hora de Reservación</label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="time"
                    name="reservation-time"
                    value={reservation.time}
                    onChange={(e) =>
                      setReservation({ ...reservation, time: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="people-reservation">Número de Personas</label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="number"
                    name="people-reservation"
                    min="1"
                    value={reservation.people}
                    onChange={(e) =>
                      setReservation({ ...reservation, people: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}

            {typeService === "event" && (
              <div className="space-y-3">
                <h2 className="font-bold text-3xl mb-5 text-brown-dark">
                  Eventos
                </h2>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="type-event">Tipo de evento</label>
                  <select
                    className="bg-background border-2 border-brown-dark outset-border"
                    name="type-event"
                    value={event.type}
                    onChange={(e) =>
                      setEvent({ ...event, type: e.target.value })
                    }
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="cumpleaños">Cumpleaños</option>
                    <option value="corporate">Evento corporativo</option>
                    <option value="private">Evento privado</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="event-date">Fecha de Reservación</label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="date"
                    name="event-date"
                    value={event.date}
                    onChange={(e) =>
                      setEvent({ ...event, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="people-event">Número de Personas</label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="number"
                    name="people-event"
                    min="1"
                    value={event.people}
                    onChange={(e) =>
                      setEvent({ ...event, people: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="event-duration">
                    Duración del evento (horas)
                  </label>
                  <input
                    className="bg-background border-2 border-brown-dark outset-border"
                    type="number"
                    name="event-duration"
                    min="1"
                    value={event.duration}
                    onChange={(e) =>
                      setEvent({ ...event, duration: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}

            {typeService === "order" && (
              <div className="space-y-3">
                <h2 className="font-bold text-3xl mb-5 text-brown-dark">
                  Pedidos
                </h2>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="type-order">Tipo de pedido</label>
                  <select
                    className="bg-background border-2 border-brown-dark outset-border"
                    name="type-order"
                    value={order.type}
                    onChange={(e) =>
                      setOrder({ ...order, type: e.target.value })
                    }
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="local">Recoger a local</option>
                    <option value="domicilio">Envio a domicilio</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[0.5rem]">
                  <label for="order-time">Hora de Recogida/Entrega</label>
                  <input
                    type="time"
                    className="bg-background border-2 border-brown-dark outset-border"
                    name="order-time"
                    value={order.time}
                    onChange={(e) =>
                      setOrder({ ...order, time: e.target.value })
                    }
                    required
                  />
                </div>

                <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                  Seleccione sus productos
                </h3>
                <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.5rem]">
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Café Americano - $3.50</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.americano}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, americano: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Cappuccino - $4.00</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.cappuccino}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, cappuccino: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Latte - $4.25</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.latte}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, latte: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Mocha - $4.50</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.mocha}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, mocha: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Pastel de Chocolate - $5.00</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.cake}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, cake: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <p>Sandwich - $6.50</p>
                    <input
                      type="number"
                      className="bg-background border-2 border-brown-dark outset-border"
                      min="0"
                      value={products.sandwich}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const newProducts = { ...products, sandwich: value };
                        setProducts(newProducts);
                        calculateTotal(newProducts);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-[1rem]">
            <div className="space-y-3">
              <h3 className="font-bold text-2xl mb-5 text-brown-dark">
                Servicios Adicionales
              </h3>
              <div>
                <label for="event-decoration">
                  Decoración temática (+$100)
                </label>
                <input
                  type="checkbox"
                  className="bg-background border-2 border-brown-dark outset-border"
                  name="event-decoration"
                  value="100"
                  checked={extras.decoration}
                  onChange={(e) => {
                    const newExtras = {
                      ...extras,
                      decoration: e.target.checked,
                    };
                    setExtras(newExtras);
                    calculateTotal(products, newExtras);
                  }}
                />
              </div>
              <div>
                <label for="custom-cake">Pastel personalizado (+$80)</label>
                <input
                  type="checkbox"
                  className="bg-background border-2 border-brown-dark outset-border"
                  name="custom-cake"
                  value="80"
                  checked={extras.customCake}
                  onChange={(e) => {
                    const newExtras = {
                      ...extras,
                      customCake: e.target.checked,
                    };
                    setExtras(newExtras);
                    calculateTotal(products, newExtras);
                  }}
                />
              </div>
              <div>
                <label for="photographer">Servicio fotográfico (+$150)</label>
                <input
                  type="checkbox"
                  className="bg-background border-2 border-brown-dark outset-border"
                  name="photographer"
                  value="150"
                  checked={extras.photographer}
                  onChange={(e) => {
                    const newExtras = {
                      ...extras,
                      photographer: e.target.checked,
                    };
                    setExtras(newExtras);
                    calculateTotal(products, newExtras);
                  }}
                />
              </div>
              <div>
                <label for="table-decoration">Decoración de mesa (+$15)</label>
                <input
                  type="checkbox"
                  className="bg-background border-2 border-brown-dark outset-border"
                  name="table-decoration"
                  value="15"
                  checked={extras.tableDecoration}
                  onChange={(e) => {
                    const newExtras = {
                      ...extras,
                      tableDecoration: e.target.checked,
                    };
                    setExtras(newExtras);
                    calculateTotal(products, newExtras);
                  }}
                />
              </div>
              <div>
                <label for="special-menu">
                  Menú especial (+$10 por persona)
                </label>
                <input
                  type="checkbox"
                  className="bg-background border-2 border-brown-dark outset-border"
                  name="special-menu"
                  value="10"
                  checked={extras.specialMenu}
                  onChange={(e) => {
                    const newExtras = {
                      ...extras,
                      specialMenu: e.target.checked,
                    };
                    setExtras(newExtras);
                    calculateTotal(products, newExtras);
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label for="comentarios-pedido">Comentarios Especiales</label>
              <textarea
                className="bg-background border-2 border-brown-dark outset-border"
                name="comentarios-pedido"
                rows="3"
              ></textarea>
            </div>
            <p>
              Precio estimado: <span className="font-bold text-red">${total.toFixed(2)}</span>
            </p>
            <button
              onClick={handleSubmit}
              className="bg-background border-2 border-brown-dark outset-border hover:bg-white hover:border-red"
              id="submit-button"
              type="submit"
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      </form>
    </section>
    </>
    
  );
}

export default Menu;
