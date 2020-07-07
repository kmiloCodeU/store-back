import { ClientRepository } from './client.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @ts-ignore
import { ClientEntity } from './client.entity';

export class ClientService {
  // @ts-ignore
  constructor(@InjectRepository(ClientRepository ) private readonly _clientRepository: ClientRepository) {
  }

  save(client: ClientEntity){
     this._clientRepository.save(client)
  }


}