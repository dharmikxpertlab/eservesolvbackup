import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, Machine } from 'src/api/models';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { confirmOperation } from 'src/app/shared/decorators/confirm-operation';
import { loader } from 'src/app/shared/decorators/loader';
import { LocationsFacadeService } from '../../locations/locations-facade.service';
import { MachinesFacadeService } from '../machines-facade.service';

@Component({
  selector: 'app-machine-edit',
  templateUrl: './machine-edit.page.html',
  styleUrls: ['./machine-edit.page.scss'],
})
export class MachineEditPage implements OnInit {

  location: Location;
  machine: Machine;

  machineForm = new FormGroup({
    id: new FormControl(null),
    location: new FormControl(null),
    manufacturer: new FormControl(''),
    type: new FormControl(''),
    serial_number: new FormControl(''),
    remark: new FormControl('')
  });

  constructor(
    public activatedRoute: ActivatedRoute,
    public locationFacadeService: LocationsFacadeService,
    public machineFacadeService: MachinesFacadeService,
    public router: Router
  ) { }

  async ngOnInit() {
    const snapshotParams = this.activatedRoute.snapshot.params;
    if (snapshotParams.location) {
      this.location = await this.locationFacadeService.getLocation(+snapshotParams.location);
      this.machineForm.patchValue({
        location: this.location.id
      });
    }

    if (snapshotParams.machine) {
      this.machine = await this.machineFacadeService.getMachine(+snapshotParams.machine);
      this.machineForm.patchValue({
        ...this.machine
      });
    }
  }

  @loader()
  @completionNotifier()
  async addOrUpdate() {
    if (this.machine && this.machine.id) {
      await this.updateMachine();
    } else {
      await this.addMachine();
    }
  }


  async addMachine() {
    this.machine = await this.machineFacadeService.addMachine(this.machineForm.value);
  }

  async updateMachine() {
    this.machine = await this.machineFacadeService.updateMachine(this.machineForm.value);
  }

  @confirmOperation('Deleting Machine')
  @loader()
  @completionNotifier('', true, 'Cannot delete this machine because it is being used by an Order')
  async deleteMachine(machine: Machine) {
    await this.machineFacadeService.deleteMachine(this.machine);
    await this.router.navigate(['/locations', this.location.id, 'machines']);
  }
}
