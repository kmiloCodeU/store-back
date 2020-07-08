import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from 'src/config/config.keys';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: true,
        type: 'postgres' as 'postgres',
        database: 'd41rrig1cp6nr2',
        host: 'ec2-35-172-73-125.compute-1.amazonaws.com',
        username: 'iejhmxpkmpbbpv',
        password: 'd47286c32c1fe6adc8e7e516dc73d61549259d47c66805d8264334e0ffcc7122',
        port: 5432,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsRun: true,
        synchronize: true,
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      } as ConnectionOptions;
    },
  }),
];
