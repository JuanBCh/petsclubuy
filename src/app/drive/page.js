"use client";

import { createDelivery } from "@/lib/actions";
import Product from "@/ui/drive/product/product";
import { useState } from "react";
import data from "@/lib/data.json";
import ItemCounter from "@/utils/products/itemCounter";

export default function DrivePage() {
  const [input, setInput] = useState({});
  return (
    <main className="flex flex-col px-4">
      <h2 className="text-3xl text-center my-9">Registro de pedidos</h2>
      <form action={createDelivery} className="flex flex-col space-y-5">
        {input.products && (
          <>
            <p className="font-semibold mb-2 text-xl">Productos agregados</p>
            <ItemCounter input={input} />
          </>
        )}
        <label
          name="check"
          className="w-full flex items-center justify-between text-xl px-9"
        >
          <p className="font-semibold mb-2">Verificado</p>
          <input type="checkbox" name="check" className="h-9 w-9 shadow" />
        </label>
        <label name="date" className="text-xl">
          <p className="font-semibold mb-2">Fecha</p>
          <input
            type="date"
            name="date"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="name" className="text-xl">
          <p className="font-semibold mb-2">Nombre</p>
          <input
            type="text"
            name="name"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <Product input={input} setInput={setInput} drive={data.drive} />
        <label name="features" className="text-xl">
          <p className="font-semibold mb-2">Caracteristicas</p>
          <input
            type="text"
            name="features"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="data" className="text-xl">
          <p className="font-semibold mb-2">Datos</p>
          <input
            type="text"
            name="data"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="specs" className="text-xl">
          <p className="font-semibold mb-2">Especificaciones</p>
          <input
            type="text"
            name="specs"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="price" className="text-xl">
          <p className="font-semibold mb-2">Precio</p>
          <input
            type="number"
            name="price"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="contact" className="text-xl">
          <p className="font-semibold mb-2">Contacto</p>
          <input
            type="text"
            name="contact"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="delivery" className="text-xl">
          <p className="font-semibold mb-2">Entrega</p>
          <input
            type="text"
            name="delivery"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label name="direction" className="text-xl">
          <p className="font-semibold mb-2">Direccion</p>
          <input
            type="text"
            name="direction"
            className="w-full h-12 border rounded-lg px-1 shadow"
          />
        </label>
        <label
          name="paid"
          className="w-full flex items-center justify-between text-xl px-9"
        >
          <p className="font-semibold mb-2">Pago</p>
          <input type="checkbox" name="paid" className="h-9 w-9 shadow" />
        </label>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
