import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsModelo } from '../products.entity';
import { ProductsDto } from '../interfaceProductsDto/products.interface';
import { ProductsClassDto } from '../productosClass/productClassDto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsModelo)
    private readonly productoRepository: Repository<ProductsModelo>,
  ) {}
  async getAll() {
    return await this.productoRepository.find();
  }

  async createProduct(newProduct: ProductsClassDto) {
    let newProductSet = new ProductsClassDto();
    newProductSet.cod_Empleado = newProduct.cod_Empleado;
    newProductSet.cod_Producto = newProduct.cod_Producto;
    newProductSet.descripcion = newProduct.descripcion;
    newProductSet.fecha_registro = newProduct.fecha_registro;
    newProductSet.precio_Costo = newProduct.precio_Costo;
    newProductSet.precio_Venta = newProduct.precio_Venta;

    //(Me sale error) return this.productoRepository.save<ProductsClassDto[]>(ProductsClassDto)
  }

  async updateProduct(idProduct: number, producUpdate: ProductsClassDto) {
    let updateProductSet = this.productoRepository.findOne(idProduct);
    // updateProductSet =
    // updateProductSet.cod_Empleado = updateProduct.cod_Empleado
    // updateProductSet.cod_Producto = updateProduct.cod_Producto
    // updateProductSet.descripcion = updateProduct.descripcion
    // updateProductSet.fecha_registro = updateProduct.fecha_registro
    // updateProductSet.precio_Costo = updateProduct.precio_Costo
    // updateProductSet.precio_Venta = updateProduct.precio_Venta

    //(Me sale error) return this.productoRepository.save<ProductsClassDto[]>(ProductsClassDto)
    return updateProductSet;
  }
}
