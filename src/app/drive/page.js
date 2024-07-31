import { createDelivery } from "@/lib/actions";
import Product from "@/ui/drive/product/product";

export default function DrivePage() {
  return (
    <main className="flex flex-col px-4">
      <h2></h2>
      <form action={createDelivery}>
        <label name="check">
          Verificado
          <input type="checkbox" name="check" className="w-screen border" />
        </label>
        <label name="date">
          Fecha
          <input type="date" name="date" className="w-screen border" />
        </label>
        <label name="name">
          Nombre
          <input type="text" name="name" className="w-screen border" />
        </label>
        <Product />
        <label name="features">
          Caracteristicas
          <input type="text" name="features" className="w-screen border" />
        </label>
        <label name="data">
          Datos
          <input type="text" name="data" className="w-screen border" />
        </label>
        <label name="specs">
          Especificaciones
          <input type="text" name="specs" className="w-screen border" />
        </label>
        <label name="price">
          Precio
          <input type="number" name="price" className="w-screen border" />
        </label>
        <label name="paid">
          Pago
          <input type="checkbox" name="paid" className="w-screen border" />
        </label>
        <label name="contact">
          Contacto
          <input type="text" name="contact" className="w-screen border" />
        </label>
        <label name="delivery">
          Entrega
          <input type="text" name="delivery" className="w-screen border" />
        </label>
        <label name="direction">
          Direccion
          <input type="text" name="direction" className="w-screen border" />
        </label>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
