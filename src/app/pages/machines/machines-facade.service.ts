import { Injectable } from '@angular/core';
import { Machine } from 'src/api/models/machine';
import { MachinesService } from 'src/api/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MachinesFacadeService {

  constructor(
    public machinesService: MachinesService,
    public authService: AuthService,
  ) { }

  async getMachines(): Promise<Machine[]> {
    return await (await this.machinesService.machinesList()).toPromise() as Machine[];
  }

  async getMachine(id: number): Promise<Machine> {
    return await (await this.machinesService.machinesRetrieve({
      id
    })).toPromise();
  }

  async addMachine(machine: Machine): Promise<Machine> {
    return await (await this.machinesService.machinesCreate$Json({
      body: machine
    })).toPromise();
  }

  async updateMachine(machine: Machine): Promise<Machine> {
    return await (await this.machinesService.machinesPartialUpdate$Json({
      id: machine.id,
      body: machine
    })).toPromise();
  }

  async deleteMachine(machine: Machine): Promise<any> {
    return await (await this.machinesService.machinesDestroy({
      id: machine.id
    })).toPromise();
  }
}
