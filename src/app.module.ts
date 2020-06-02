import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasModelo } from './compras/compras.modelo';
import { EmpleadosModelo } from './empleados/empleados.modelo';
import { InventariosModelo } from './inventarios/inventarios.modelo';
import { ProductosModelo } from './productos/productos.modelo';
import { ProveedoresModelo } from './proveedores/proveedores.modelo';
import { VentasModelo } from './ventas/ventas.modelo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: '123',
      database: 'nestjs_app',
      entities: [
        ComprasModelo,
        EmpleadosModelo,
        InventariosModelo,
        ProductosModelo,
        ProveedoresModelo,
        VentasModelo
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
